// filepath: /home/rcornett3555/development/cc-creator/app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { env } from '@/data/env/server';
import { db } from '@/drizzle/db';
import { UserSubscriptionTable } from '@/drizzle/schema';

export async function POST(req: Request) {
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Create new Svix instance with secret
  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let event: WebhookEvent;

  // Verify payload with headers
  try {
    event = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', {
      status: 400,
    });
  }

  switch (event.type) {
    case 'user.created': {
      const userId = event.data.id;
      try {
        await db.insert(UserSubscriptionTable).values({
          clerkUserId: userId,
          tier: "ccsocial",
        });
      } catch (err) {
        console.error('Error: Could not insert user subscription:', err);
        return new Response('Error: Database insertion error', {
          status: 500,
        });
      }
      break;
    }
    default: {
      console.warn(`Unhandled event type: ${event.type}`);
      break;
    }
  }

  return new Response('Webhook received', { status: 200 });
}