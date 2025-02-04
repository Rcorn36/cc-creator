import BrandLogo from "@/components/BrandLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export function NavBar() {
    return (
        <header className="flex py-4 shadow bg-background">
            <nav className="flex items-center gap-10 container">
                <Link className="mr-auto" href="/dashboard">
                <BrandLogo />
                </Link>
                <Link href="/dashboard/products">Products</Link>
                <Link href="/dashboard/subscription">Subscription</Link>
                <Link href="/dashboard/Social">CC-Social</Link>
                <Link href="/dashboard/business">Business</Link>
                <UserButton />
            </nav>
        </header>
    )
}