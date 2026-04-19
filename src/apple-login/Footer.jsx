export default function Footer() {
  return (
    <footer className="mt-auto px-5 pb-7 pt-5 text-center bg-[#f2f2f7]" role="contentinfo">
      <div className="mx-auto flex justify-between max-w-[980px]">
        <div className="flex flex-wrap items-center justify-center gap-0 text-xs leading-[1.45] text-[rgba(0, 0, 0, 0.88)]">
          <div className="inline-flex items-center">
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.apple.com/support/systemstatus/"
                aria-label="System Status (opens in a new tab)"
                className="text-[#424245] no-underline hover:underline"
              >
                System Status
              </a>
            </span>
            <div aria-hidden="true" className="mx-2.5 h-[11px] w-px shrink-0 bg-[#d2d2d7]" />
          </div>
          <div className="inline-flex items-center">
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.apple.com/legal/privacy/"
                aria-label="Privacy Policy (opens in a new tab)"
                className="text-[#424245] no-underline hover:underline"
              >
                Privacy Policy
              </a>
            </span>
            <div aria-hidden="true" className="mx-2.5 h-[11px] w-px shrink-0 bg-[#d2d2d7]" />
          </div>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.apple.com/legal/internet-services/icloud/"
              aria-label="Terms & Conditions (opens in a new tab)"
              className="text-[#424245] no-underline hover:underline"
            >
              Terms &amp; Conditions
            </a>
          </span>
        </div>
        <div className="mt-2.5 block text-xs text-[#86868b]">Copyright © 2026 Apple Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
