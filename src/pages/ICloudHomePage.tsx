import { Link } from 'react-router-dom'
import Footer from '../apple-login/Footer.jsx'
import Nav from '../apple-login/Nav.jsx'

const sf = { fontFamily: '"SF Pro Display", "Helvetica Neue", Arial, sans-serif' } as const

const webAppTiles = [
  { label: 'Mail', bg: 'bg-gradient-to-b from-sky-400 to-blue-600' },
  { label: 'Find My', bg: 'bg-gradient-to-b from-emerald-400 to-green-600' },
  { label: 'Reminders', bg: 'bg-gradient-to-b from-violet-400 to-purple-600' },
  { label: 'Notes', bg: 'bg-gradient-to-b from-amber-300 to-yellow-500' },
  { label: 'Files', bg: 'bg-gradient-to-b from-slate-200 to-slate-400' },
  { label: 'Contacts', bg: 'bg-gradient-to-b from-lime-300 to-emerald-500' },
  { label: 'Stocks', bg: 'bg-gradient-to-b from-gray-700 to-gray-900' },
  { label: 'Pages', bg: 'bg-gradient-to-b from-orange-400 to-orange-600' },
  { label: 'Photos', bg: 'bg-gradient-to-b from-fuchsia-400 to-pink-600' },
  { label: 'Keynote', bg: 'bg-gradient-to-b from-blue-300 to-indigo-500' },
] as const

export default function ICloudHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black" style={sf}>
      <Nav logoTo="/icloud" />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-5 pb-16 pt-8 min-[735px]:pb-20 min-[735px]:pt-12">
          <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
            {/* <HeroMemojiCluster /> */}

            <video
              className="mx-auto h-auto w-full max-w-[min(100%,480px)] rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Animation of Memojis with app icons"
            >
              <source src="/videos/icloud-hero.mp4" type="video/mp4" />
            </video>

            <h1 className="mt-2 text-[144px] font-bold leading-[167px] tracking-[-0.03em] min-[735px]:text-[ 140px]">iCloud</h1>

            <Link
              to="/signup"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-black px-14 text-[19px] font-semibold  text-white transition hover:bg-[#333]"
            >
              Sign In
            </Link>

            <p className="mt-10 max-w-[560px] text-[19px] font-semibold leading-snug tracking-[-0.01em] text-black min-[735px]:text-[40px]">
              The best place for all your photos, files, notes, mail, and more.
            </p>

           
          </div>
        </section>

        {/* Feature cards */}
        <section className="border-t border-black/[0.06] bg-white px-5 pb-20 pt-4">
          <div className="mx-auto grid max-w-[980px] gap-6 min-[835px]:grid-cols-2 min-[835px]:gap-10">
            <article className="rounded-[18px] bg-white space-y-10 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
              <img src="/home/06b68855764eb0e23f269ed4ef7935f0.png " alt="Easily access apps and data from your iPhone on the web" className=" w-full h-[250px] object-contain object-center" />
              <h2 className="text-[21px] font-bold leading-snug tracking-[-0.015em] min-[735px]:text-[24px]">
                Easily access apps and data from your iPhone on the web
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1d1d1f]">
              iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.


              </p>
            </article>

            <article className="rounded-[18px]  bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
              {/* <ICloudPlusGraphic /> */}
              <img src="/home/7cb9ecdad2b384754de394732519f658.png" alt="Upgrade to iCloud+ for more storage and premium features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video support." className="w-full h-[250px] object-contain object-center " />
              <h2 className="mt-8 text-[21px] font-bold leading-snug tracking-[-0.015em] min-[735px]:text-[24px]">
                <span className="text-[#007aff]">iCloud+</span>{' '}
                <span className="text-black">
                  More storage, plus features to protect your privacy and connect with friends
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1d1d1f]">
              Upgrade to iCloud+ to get more storage, plan events with Apple Invites, and have peace of mind with privacy features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family. Learn more at apple.com/icloud.

 
              
              </p>
            </article>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  )
}

function HeroMemojiCluster() {
  const floaters = [
    { className: 'left-[2%] top-[8%] md:left-0 md:top-[12%]', children: <FindMyIcon /> },
    { className: 'right-[4%] top-[6%] md:right-0 md:top-[10%]', children: <CalendarIcon /> },
    { className: 'left-[8%] bottom-[18%] md:left-[2%] md:bottom-[20%]', children: <MailIcon /> },
    { className: 'right-[6%] bottom-[16%] md:right-[2%] md:bottom-[18%]', children: <PhotosIcon /> },
    { className: 'left-[22%] top-[0%] md:left-[18%]', children: <GameCenterIcon /> },
  ] as const

  return (
    <div className="relative mx-auto h-[200px] w-full max-w-[400px] min-[735px]:h-[240px] min-[735px]:max-w-[480px]">
      {floaters.map((f, i) => (
        <div
          key={i}
          className={`absolute z-[1] flex h-[52px] w-[52px] items-center justify-center rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] min-[735px]:h-[56px] min-[735px]:w-[56px] ${f.className}`}
        >
          {f.children}
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 z-[2] flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center min-[735px]:h-[112px] min-[735px]:w-[112px]">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#ffe8cc] to-[#f5c89a] shadow-[0_8px_24px_rgba(0,0,0,0.15)] ring-4 ring-white">
          <MemojiFace />
        </div>
      </div>
    </div>
  )
}

function MemojiFace() {
  return (
    <svg viewBox="0 0 100 100" className="h-[85%] w-[85%]" aria-hidden>
      <ellipse cx="50" cy="52" rx="38" ry="40" fill="#e8b896" />
      <ellipse cx="50" cy="58" rx="28" ry="26" fill="#f4c9a8" />
      <path
        fill="#2d2d2d"
        d="M28 48c2-8 10-14 22-14s20 6 22 14c-4-6-12-10-22-10s-18 4-22 10z"
      />
      <ellipse cx="38" cy="54" rx="4" ry="5" fill="#1a1a1a" />
      <ellipse cx="62" cy="54" rx="4" ry="5" fill="#1a1a1a" />
      <path
        fill="none"
        stroke="#5c4033"
        strokeWidth="3"
        strokeLinecap="round"
        d="M32 62c8 6 28 6 36 0"
      />
      <rect x="34" y="46" width="28" height="14" rx="3" fill="#3d3d3d" opacity="0.85" />
      <path fill="#2d2d2d" d="M36 48h28v8H36z" opacity="0.3" />
    </svg>
  )
}

function MailIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-b from-sky-400 to-blue-600">
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 6.5h18v11H3v-11z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
        />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}

function CalendarIcon() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white shadow-inner ring-1 ring-black/10">
      <span className="text-[9px] font-bold uppercase text-red-500">Wed</span>
      <span className="text-[20px] font-bold leading-none text-black">28</span>
    </div>
  )
}

function FindMyIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-b from-emerald-400 to-green-600">
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
    </div>
  )
}

function PhotosIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300">
      <svg className="h-8 w-8 text-white/90" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 17.5l-5-5 1.5-1.5L12 14.5l3.5-3.5L17 12.5l-5 5zm-7-12h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2zm0 2v10h14V7.5H5z" />
      </svg>
    </div>
  )
}

function GameCenterIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" aria-hidden>
        <circle cx="8" cy="12" r="3" fill="currentColor" />
        <circle cx="16" cy="12" r="3" fill="currentColor" opacity="0.85" />
        <circle cx="12" cy="8" r="2.5" fill="currentColor" opacity="0.7" />
      </svg>
    </div>
  )
}

function ICloudPlusGraphic() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#007aff] via-[#0051d5] to-[#003d99] px-6 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -left-8 top-4 h-24 w-40 rounded-full bg-white/20 blur-xl" />
        <div className="absolute -right-4 bottom-2 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl" />
      </div>
      <div className="relative flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-3">
          <CloudBlob className="w-28 text-white/90" />
          <span className="text-3xl font-bold tracking-tight">12TB</span>
        </div>
        <div className="flex gap-4 text-white/95">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
        <p className="text-center text-lg font-semibold tracking-wide">iCloud+</p>
      </div>
    </div>
  )
}

function CloudBlob({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="currentColor" aria-hidden>
      <path d="M95 52c-1-18-16-32-34-32-15 0-28 9-33 22a24 24 0 00-23 24c0 13 11 24 24 24h58c15 0 27-12 27-27 0-12-8-22-19-25zM35 60c-7 0-12-5-12-12 0-6 5-11 11-12 1-9 9-16 18-16 8 0 14 5 17 12 2 0 4-1 6-1 7 0 13 6 13 13 0 8-6 14-14 14H35z" />
    </svg>
  )
}
