import { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "./_components/ScrollToTopButton";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="selection:bg-[hsl(320,65%,53%,20%)]">
      <NavBar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

