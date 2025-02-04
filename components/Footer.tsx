import BrandLogo from '@/components/BrandLogo'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    
      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
      <Link href="/">
      <BrandLogo />
      </Link>
      {/* <div className="flex flex-col sm:flex-row gap-8">
      <div className="flex flex-col gap-8">
        <FooterLinkGroup
        title="Help"
        links={[
          { label: "PPP Discounts", href: "/" },
          { label: "API", href: "#" },
        ]}
        />
      </div>
      </div> */}
    </footer>
  )
}

export default Footer
