import { Link } from 'react-router-dom'
import Footer from '../apple-login/Footer.jsx'
import Nav from '../apple-login/Nav.jsx'

const sf = { fontFamily: '"SF Pro Display", "Helvetica Neue", Arial, sans-serif' } as const

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
