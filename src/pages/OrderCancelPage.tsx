import { Fragment } from 'react'

const SUPPORT = 'https://support.apple.com'

const NAV: { label: string; href: string; current?: boolean }[] = [
  { label: 'Store', href: 'https://www.apple.com/in/store' },
  { label: 'Mac', href: 'https://www.apple.com/in/mac/' },
  { label: 'iPad', href: 'https://www.apple.com/in/ipad/' },
  { label: 'iPhone', href: 'https://www.apple.com/in/iphone/' },
  { label: 'Watch', href: 'https://www.apple.com/in/watch/' },
  { label: 'Support', href: `${SUPPORT}/en-in/`, current: true },
]

const productLinks: { label: string; href: string }[] = [
  { label: 'iPhone', href: `${SUPPORT}/en-in/iphone` },
  { label: 'Mac', href: `${SUPPORT}/en-in/mac` },
  { label: 'iPad', href: `${SUPPORT}/en-in/ipad` },
  { label: 'Watch', href: `${SUPPORT}/en-in/watch` },
  { label: 'AirPods', href: `${SUPPORT}/en-in/airpods` },
  { label: 'Music', href: `${SUPPORT}/en-in/music` },
  { label: 'TV', href: `${SUPPORT}/en-in/tv` },
  { label: 'Support Site Map', href: `${SUPPORT}/en-in/sitemap` },
]

const serviceLinks: { label: string; href: string }[] = [
  { label: 'Apple Repair Options', href: `${SUPPORT}/en-in/repair` },
  { label: 'Service and Repair Information', href: `${SUPPORT}/en-in/repair-products` },
  { label: 'AppleCare Products', href: 'https://www.apple.com/in/support/products/' },
  { label: 'Hardware Warranties', href: 'https://www.apple.com/in/legal/warranty/' },
  { label: 'Software License Agreements', href: 'https://www.apple.com/in/legal/sla/' },
  { label: 'Complimentary Support', href: `${SUPPORT}/en-in/complimentary` },
]

const resourceLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'My Support', href: `${SUPPORT}/en-in/my-support` },
  { label: 'Product Documentation', href: `${SUPPORT}/en-in/docs` },
  { label: 'Apple Support Videos', href: 'https://www.youtube.com/applesupport', external: true },
  { label: 'Accessibility', href: `${SUPPORT}/en-in/accessibility` },
]

const connectLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'Contact us', href: `${SUPPORT}/en-in/contact` },
  { label: 'Support app', href: 'https://apps.apple.com/in/app/apple-support/id1130498044', external: true },
  { label: 'Apple Communities', href: 'https://discussions.apple.com', external: true },
]

const FOOTER_LEGAL = [
  { href: 'https://www.apple.com/in/legal/privacy/', label: 'Privacy Policy' },
  { href: 'https://www.apple.com/in/legal/internet-services/', label: 'Terms of Use' },
  { href: 'https://www.apple.com/in/shop/goto/help/sales_refunds', label: 'Sales Policy' },
  { href: 'https://www.apple.com/in/legal/', label: 'Legal' },
  { href: 'https://www.apple.com/in/sitemap/', label: 'Site Map' },
] as const

export default function OrderCancelPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1d1d1f]">
      <GlobalHeader />

      <main className="mx-auto w-full max-w-[980px] flex-1 px-[22px] pb-20">
        
        <section className="flex justify-center pb-2 pb-8 border-b border-[#d2d2d7]">
            <div className="w-1/2">
                <img src={'/images/s11_01ae61a6b_2x'} width={250} height={200} alt="" />
            </div>
            <div className="ml-6 self-center">
                
                <h3 className="ml-6 self-center text-[28px] font-semibold tracking-[0.01em]">41mm Elderberry Sport Loop</h3>
                <span className="ml-auto self-center text-[17px] text-[#424245]">$49.00</span>
            </div>
        </section>

        <section className="pb-2 border-b border-[#d2d2d7]">
            <div className="my-12 flex items-center gap-6">
                <div className="w-1/2">
                  <span className="text-[17px] text-[#424245]">Select Payment Method</span>
                  <p>
                    Secure Checkout
                  </p>
                  <p>
                    Your payment information is fully protected.
                  </p>
                    
                </div>
            </div> 
        </section>

        

        <section className="pb-6 border-b border-[#d2d2d7]">
  {/* Payment Method Buttons - Centered */}
  <div className="flex justify-center gap-4 mb-6">
    <button 
      type="button" 
      className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
    >
      GPay
    </button>
    <button 
      type="button" 
      className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
    >
      TD Bank
    </button>
    <button 
      type="button" 
      className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
    >
      RC Bank
    </button>
  </div>
</section>

<section className="py-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Card Details</h3>
  
  {/* Card Form */}
  <div className="max-w-md mx-auto space-y-4">
    {/* Cardholder Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Cardholder Name
      </label>
      <input 
        type="text" 
        placeholder="John Doe" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    {/* Card Number */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Card Number
      </label>
      <input 
        type="text" 
        placeholder="1234 5678 9012 3456" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    {/* Expiry Date and CVV - Row layout */}
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Expiry Date
        </label>
        <input 
          type="text" 
          placeholder="MM/YY" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CVV
        </label>
        <input 
          type="text" 
          placeholder="123" 
          maxLength={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button 
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4"
    >
      Pay Now
    </button>
  </div>
</section>

        
      </main>

      <SiteFooter />
    </div>
  )
}

function GlobalHeader() {
  return (
    <header className="sticky top-0 z-[100] border-b border-black/[0.08] bg-[rgba(251,251,253,0.92)] backdrop-blur-xl backdrop-saturate-[180%]">
      <div className="mx-auto flex h-12 max-w-[980px] items-center gap-6 px-[22px]">
        <a className="flex shrink-0 items-center text-[#1d1d1f]" href="https://www.apple.com/in/" aria-label="Apple">
          <AppleLogo />
        </a>
        <nav className="hidden flex-1 justify-center gap-7 text-xs min-[834px]:flex" aria-label="Global">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.current
                  ? 'font-semibold text-[#1d1d1f] opacity-100'
                  : 'text-[#1d1d1f] opacity-[0.88] hover:opacity-100'
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <a
            href="https://support.apple.com/kb/index?page=search&locale=en_IN"
            className="flex items-center text-[#1d1d1f]"
            aria-label="Search Support"
          >
            <SearchIcon />
          </a>
          <a href="https://www.apple.com/in/shop/goto/bag" className="flex items-center text-[#1d1d1f]" aria-label="Shopping Bag">
            <BagIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

function AppleLogo() {
  return (
    <svg width="14" height="44" viewBox="0 0 14 44" aria-hidden>
      <path
        fill="currentColor"
        d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="15" height="44" viewBox="0 0 15 44" aria-hidden>
      <path
        fill="currentColor"
        d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
      />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="14" height="44" viewBox="0 0 14 44" aria-hidden>
      <path
        fill="currentColor"
        d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
      />
    </svg>
  )
}

function SiteFooter() {
  return (
    <footer className="bg-[#f5f5f7] px-[22px] pb-6 pt-10 text-xs text-[#424245]">
      <div className="mb-7 flex max-w-[980px] flex-wrap items-center gap-1.5 mx-auto">
        <a href="https://www.apple.com/in/">Apple</a>
        <span className="opacity-50" aria-hidden>
          ›
        </span>
        <a href={`${SUPPORT}/en-in/`}>Support</a>
        <span className="opacity-50" aria-hidden>
          ›
        </span>
        <span>Billing and Subscriptions</span>
      </div>

      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-x-8 gap-y-6 border-b border-[#d2d2d7] pb-8 min-[481px]:grid-cols-2 min-[835px]:grid-cols-4">
        <FooterColumn title="Product Support" links={productLinks} />
        <FooterColumn title="Service and Repair" links={serviceLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />
        <FooterColumn title="Connect" links={connectLinks} />
      </div>

      <div className="mx-auto mt-4 flex max-w-[980px] flex-wrap items-center gap-x-5 gap-y-3 text-xs">
        <a href={`${SUPPORT}/choose-country-region`} className="mr-auto text-[#424245] hover:underline">
          India
        </a>
        <p className="order-3 m-0 basis-full min-[735px]:order-none min-[735px]:mr-4 min-[735px]:basis-auto">
          Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1" aria-label="Legal">
          {FOOTER_LEGAL.map((item, i) => (
            <Fragment key={item.href}>
              {i > 0 && (
                <span className="hidden min-[735px]:inline px-1 text-[#86868b]" aria-hidden>
                  |
                </span>
              )}
              <a href={item.href} className="text-[#424245] hover:underline">
                {item.label}
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold text-[#1d1d1f]">{title}</h3>
      <ul className="m-0 list-none p-0">
        {links.map((l) => (
          <li key={l.label} className="mb-2.5">
            <a href={l.href} className="text-[#424245] hover:underline" {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
