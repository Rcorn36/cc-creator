import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"


export default function SocialLayout({
    children,
}: {
children: React.ReactNode
}) {
    return (
        

        <div className="min-h-screen flex flex-col justify-center items-center">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}