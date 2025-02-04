import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Education from "./Education";
import { subscriptionTiersInOrder } from "@/app/data/subscriptionTiers";
import { formatCompactNumber } from "@/lib/formatters";


export default function Home() {
  return (
    <>
    <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center content-center text-center text-balance gap-10 container px-4 mt-10 lg:mt-0">
      <Card className="flex flex-col md:flex-row items-center gap-4 p-4 bg-transparent border border-transparent mx-auto w-4/5">
      <Image
        src="/images/facebook.jpg"
        alt="Content Creation"
        width={200}
        height={200}
        className="rounded-full max-h-60 border border-black border-opacity-30 border-solid border-4"
      />
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl text-center font-bold tracking-tight ml-2 mr-4">Hi, I'm Rob Cornett</h1>
        
        <nav className="ml-2 mr-3">
          <ul className="flex flex-row gap-4 justify-center items-center">
            <li>
              <Link href="#education" className="text-blue-500 hover:underline"><Button>
          Education
          </Button>
              </Link>
            </li>
            <li>
              <Link href="#employment" className="text-blue-500 hover:underline"><Button>
          Employment
          </Button>
              </Link>
            </li>
          </ul>
        </nav>
        <h4 className="font-semibold text-center text-blue-300">Click on any of the buttons above to learn more about me!</h4>
        <h3 className="text-2xl text-center ml-2 mr-3 font-semibold">Welcome to my portfolio</h3>
        <div className="text-center">
        <p>Ultimately I am creating this site for potential employers, clients, and business partners to get to know my professional background as well as to launch web applications that a part of my graduate project for my masters degree program.</p>
        <p>One of the first projects I am sharing with you is this website itself and I will soon launch Phase # 1 of the CCPROS app which will be a social network specifically designed for residents and businesses of Washington and Oregon State!</p>
        </div>
      
      </div>
      </Card>
    </section>
     <Education />
     <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">Pricing</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map(tier => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
     </section>

    
    </>
     )
}
function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
  stripePriceId,
}: typeof subscriptionTiersInOrder[number]) {
  return (
    <Card>
      <CardHeader>
        <div className="text-accent font-semibold mb-4">{name}</div>
        <CardTitle className="tex-xl font-bold">${priceInCents / 100} /mo</CardTitle>
      </CardHeader>
      <CardDescription className="pl-6 mb-2">
         Max no. of Products: {formatCompactNumber(maxNumberOfProducts)} 
      </CardDescription>
      <CardFooter className="content-center justify-center">
        <Link className="content-center justify-center" href="/sign-up">
        <Button>Free Signup</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


//{maxNumberOfVisits} Max no. of Visits:
 //        {canAccessAnalytics ? "Yes" : "No"} Can Access to Analytics 
 //        {canCustomizeBanner ? "Yes" : "No"} Can Customize Banner 
 //        {canRemoveBranding ? "Yes" : "No"} Can Remove Branding