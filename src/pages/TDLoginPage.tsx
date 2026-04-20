import { MapPin, HelpCircle, User, ChevronRight, Eye } from 'lucide-react'

export default function TDLoginPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800  ">
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 ">
          <div className="text-3xl font-bold text-green-900">TD</div>
          <nav className="hidden gap-6 font-semibold text-gray-700 min-[900px]:flex">
            <span className="cursor-pointer border-b-2 border-green-800 text-green-800">My TD</span>
            <span className="cursor-pointer">Products</span>
            <span className="cursor-pointer">Solutions</span>
            <span className="cursor-pointer">Learning</span>
          </nav>
          <div className="flex items-center gap-3 text-sm min-[900px]:gap-4">
            <MapPin size={18} className="hidden sm:block" aria-hidden />
            <HelpCircle size={18} className="hidden sm:block" aria-hidden />
            <span className="font-semibold">EN</span>
            <div className="flex items-center gap-1 rounded border border-green-900 px-2 py-1 font-semibold text-green-900 min-[900px]:px-3">
              <User size={18} aria-hidden /> Log In
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-green-900 px-4 py-1 text-[10px] text-white">
          FDIC-Insured - Backed by the full faith and credit of the U.S. Government
        </div>
      </header>

      <main className="mx-auto flex  w-6xl  backdrop-blur-sm  flex-col items-center  justify-center gap-24 px-4 py-12 md:flex-row md:items-start bg-[url('/td/tdOnceLogin_tablet_portraitOnly.png')] bg-cover bg-center bg-no-repeat  ">
        <div className="w-full max-w-sm flex-1 border border-gray-300 p-8 shadow-sm">
          <h1 className="mb-6 text-2xl font-semibold">Welcome to Online Banking</h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="User name"
              className="w-full border border-gray-400 p-3"
              autoComplete="username"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-400 p-3 pr-11"
                autoComplete="current-password"
              />
              <Eye className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-green-700" aria-hidden />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4" /> Remember me
            </label>
            <button type="button" className="w-full cursor-not-allowed bg-gray-200 py-3 font-semibold text-gray-500" disabled>
              Log in
            </button>
            <a href="#" className="block font-semibold text-green-800 underline">
              Forgot user name and/or password?
            </a>
          </div>
        </div>

        <div className=" w-[45px] flex-1 space-y-4">
          <div className="space-y-2 font-semibold text-green-800">
            <p className="flex items-center gap-1">
              Sign up for Online Banking <ChevronRight size={16} aria-hidden />
            </p>
            <p className="flex items-center gap-1">
              View the Online Banking demo <ChevronRight size={16} aria-hidden />
            </p>
            <p className="flex items-center gap-1">
              Learn more about TD mobile banking <ChevronRight size={16} aria-hidden />
            </p>
          </div>
          <div className="border-l-4 border-green-800 bg-gray-50 p-4 text-sm">
            <p className="font-bold">Find out more about TD Bank&apos;s online security</p>
            <p>and our commitment to provide you with a safe and secure online and mobile banking experience.</p>
          </div>
        </div>
      </main>

      <div className="bg-gray-800 py-6 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
          <p className="text-lg">
            Open a new savings account, earn $200 with qualifying activities. It&apos;s that easy
          </p>
          <button type="button" className="shrink-0 bg-orange-500 px-6 py-2 font-bold text-white">
            Apply now
          </button>
        </div>
      </div>

      <footer className="mx-auto max-w-5xl space-y-6 px-4 py-8 text-xs text-gray-600">
        <p className="text-center font-bold text-green-800">Questions? Contact us &gt;</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 underline">
          <span>Help</span>
          <span>Terms of Use</span>
          <span>Security</span>
          <span>Privacy</span>
          <span>California Privacy</span>
          <span>Bank Deposits FDIC Insured</span>
          <span>Online Advertising</span>
        </div>
        <div className="border border-gray-300 text-center">
          <div className="bg-gray-100 py-1 font-bold">SECURITIES AND INVESTMENTS</div>
          <div className="flex divide-x divide-gray-300">
            <div className="flex-1 py-2">Not FDIC Insured</div>
            <div className="flex-1 py-2">No Bank Guarantee</div>
            <div className="flex-1 py-2">May Lose Value</div>
          </div>
        </div>
        <p className="text-[10px] text-gray-500">
          Registered Investment Advisory, Securities and Brokerage services are offered through TD Private Client Wealth,
          LLC, member FINRA/SIPC, TD Private Client Wealth, LLC and TD Bank, N.A. are affiliated through their parent
          company The Toronto-Dominion Bank. TD Wealth is a trademark owned by the Toronto-Dominion Bank, used with
          permission.
        </p>
        <p className="text-center text-[10px] text-gray-500">© 2026 TD Bank, N.A. All Rights Reserved</p>
      </footer>
    </div>
  )
}
