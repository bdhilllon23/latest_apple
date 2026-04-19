const SVGComponent = ({ className, ...rest }) => (
  <svg
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
    draggable="false"
    aria-hidden="true"
    {...rest}
  >
    <defs>
      <linearGradient x1="100%" y1="100%" x2="50%" y2="50%" id="haloGradA">
        <stop stopColor="#8700FF" offset="0%" />
        <stop stopColor="#EE00E1" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient x1="0%" y1="100%" x2="50%" y2="50%" id="haloGradB">
        <stop stopColor="#E00" offset="0%" />
        <stop stopColor="#EE00E1" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient x1="100%" y1="0%" x2="50%" y2="50%" id="haloGradC">
        <stop stopColor="#00B1EE" offset="0%" />
        <stop stopColor="#00B1EE" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient x1="-17.876%" y1="21.021%" x2="48.935%" y2="50%" id="haloGradD">
        <stop stopColor="#FFA456" offset="0%" />
        <stop stopColor="#FFA456" stopOpacity={0} offset="100%" />
      </linearGradient>
      <path
        d="M89.905 152.381a3.81 3.81 0 110 7.619 3.81 3.81 0 010-7.619zm-23.737 2.79a3.81 3.81 0 117.36 1.973 3.81 3.81 0 01-7.36-1.972zm46.799-5.126a3.81 3.81 0 11-7.36 1.972 3.81 3.81 0 017.36-1.972zm-60.58-2.409a3.81 3.81 0 11-3.81 6.598 3.81 3.81 0 013.81-6.598zm28.777-4.373a3.302 3.302 0 11-.804 6.554 3.302 3.302 0 01.804-6.554zm-16.684-1.899a3.338 3.338 0 11-2.5 6.19 3.338 3.338 0 012.5-6.19zm36.901 2.383a3.338 3.338 0 11-6.61.93 3.338 3.338 0 016.61-.93zm28.591-4.621a3.81 3.81 0 11-6.598 3.81 3.81 3.81 0 016.598-3.81zm-94.15-.941a3.81 3.81 0 11-5.387 5.387 3.81 3.81 0 015.388-5.387zm52.547-.486a3.023 3.023 0 110 6.047 3.023 3.023 0 010-6.047zm-15.136.077a3.023 3.023 0 11-1.565 5.841 3.023 3.023 0 011.565-5.84zm-24.278-2.592a3.338 3.338 0 11-4.017 5.331 3.338 3.338 0 014.017-5.331zm68.381.883a3.338 3.338 0 11-6.145 2.609 3.338 3.338 0 016.145-2.609zm-10.664-.222a3.023 3.023 0 11-5.841 1.565 3.023 3.023 0 015.84-1.565zm-48.079-1.912a3.023 3.023 0 11-3.023 5.237 3.023 3.023 0 013.023-5.237zm22.334-3.47a2.62 2.62 0 11-.639 5.201 2.62 2.62 0 01.639-5.202zm-13.241-1.507a2.65 2.65 0 11-1.985 4.912 2.65 2.65 0 011.985-4.912zm29.286 1.891a2.65 2.65 0 11-5.246.737 2.65 2.65 0 015.246-.737zm23.196-3.668a3.023 3.023 0 11-5.236 3.024 3.023 3.023 0 015.236-3.024zm-74.721-.747a3.023 3.023 0 11-4.276 4.276 3.023 3.023 0 014.276-4.276zm98.125-2.255a3.81 3.81 0 11-5.387 5.388 3.81 3.81 0 015.387-5.388zM35.56 125.196a3.338 3.338 0 11-5.26 4.11 3.338 3.338 0 015.26-4.11zm-13.29-.428a3.81 3.81 0 11-6.599 3.81 3.81 3.81 0 016.599-3.81zm108.491-.249a3.338 3.338 0 11-5.26 4.11 3.338 3.338 0 015.26-4.11zm-75.396-.468a2.65 2.65 0 11-3.188 4.231 2.65 2.65 0 013.188-4.231zm54.271.7a2.65 2.65 0 11-4.877 2.071 2.65 2.65 0 014.877-2.07zm21.327-9.436a3.023 3.023 0 11-4.276 4.276 3.023 3.023 0 014.276-4.276zm-86.23.808a2.65 2.65 0 11-4.175 3.262 2.65 2.65 0 014.175-3.262zm-10.043-.339a3.023 3.023 0 11-5.236 3.024 3.023 3.023 0 015.236-3.024zm85.6-.197a2.65 2.65 0 11-4.175 3.262 2.65 2.65 0 014.175-3.262zm-95.085-3.507a3.338 3.338 0 11-6.145 2.609 3.338 3.338 0 016.145-2.609zm115.534-2.19a3.338 3.338 0 11-4.018 5.332 3.338 3.338 0 014.018-5.331zm12.102-3.672a3.81 3.81 0 11-3.81 6.599 3.81 3.81 0 013.81-6.599zM12.65 108.301a3.81 3.81 0 11-7.36 1.972 3.81 3.81 0 017.36-1.972zm23.865-2.586a2.65 2.65 0 11-4.877 2.07 2.65 2.65 0 014.877-2.07zm91.693-1.738a2.65 2.65 0 11-3.188 4.231 2.65 2.65 0 013.188-4.231zm10.11-2.915a3.023 3.023 0 11-3.023 5.237 3.023 3.023 0 013.023-5.237zm-111.262 1.653a3.023 3.023 0 11-5.841 1.565 3.023 3.023 0 015.84-1.565zm-8.458-5.983a3.338 3.338 0 11-6.611.93 3.338 3.338 0 016.61-.93zm127.992-3.554a3.338 3.338 0 11-2.5 6.19 3.338 3.338 0 012.5-6.19zm-115.319.356a2.65 2.65 0 11-5.246.737 2.65 2.65 0 015.246-.737zm101.581-2.821a2.65 2.65 0 11-1.984 4.912 2.65 2.65 0 011.984-4.912zm19.627-1.547a3.81 3.81 0 117.36 1.972 3.81 3.81 0 01-7.36-1.972zM3.81 86.096a3.81 3.81 0 110 7.618 3.81 3.81 0 010-7.619zm137.923-.705a3.023 3.023 0 11-1.565 5.84 3.023 3.023 0 011.565-5.84zm-121.694-.3a3.023 3.023 0 110 6.047 3.023 3.023 0 010-6.047zm-6.938-8.368a3.302 3.302 0 11-.805 6.554 3.302 3.302 0 01.805-6.554zm13.807.93a2.62 2.62 0 11-.638 5.202 2.62 2.62 0 01.638-5.202zm120.796-1.946a3.302 3.302 0 11-.805 6.554 3.302 3.302 0 01.805-6.554zm-13.968 1.14a2.62 2.62 0 11-.638 5.201 2.62 2.62 0 01.638-5.201zm7.24-7.477a3.023 3.023 0 110 6.046 3.023 3.023 0 010-6.046zm-120.128-.094a3.023 3.023 0 11-1.565 5.841 3.023 3.023 0 011.565-5.84zm135.342-2.99a3.81 3.81 0 110 7.619 3.81 3.81 0 010-7.62zM.162 68.862a3.81 3.81 0 117.36 1.972 3.81 3.81 0 01-7.36-1.972zm29.28-5.072a2.65 2.65 0 11-1.984 4.913 2.65 2.65 0 011.985-4.913zm104.844 1.355a2.65 2.65 0 11-5.247.737 2.65 2.65 0 015.247-.737zm-117.992-5.89a3.338 3.338 0 11-2.5 6.19 3.338 3.338 0 012.5-6.19zm132.102 1.708a3.338 3.338 0 11-6.61.929 3.338 3.338 0 016.61-.93zm-8.594-4.735a3.023 3.023 0 11-5.84 1.565 3.023 3.023 0 015.84-1.565zm-114.08-2.019a3.023 3.023 0 11-3.024 5.237 3.023 3.023 0 013.024-5.237zm9.569-3.001a2.65 2.65 0 11-3.189 4.23 2.65 2.65 0 013.189-4.23zm93.381.423a2.65 2.65 0 11-4.877 2.07 2.65 2.65 0 014.877-2.07zm26.039-1.904a3.81 3.81 0 11-7.36 1.972 3.81 3.81 0 017.36-1.972zM10.969 47.183a3.81 3.81 0 11-3.809 6.599 3.81 3.81 0 013.81-6.599zm12.693-3.781a3.338 3.338 0 11-4.017 5.331 3.338 3.338 0 014.017-5.331zm117.661.533a3.338 3.338 0 11-6.145 2.608 3.338 3.338 0 016.145-2.608zm-9.76-2.235a3.023 3.023 0 11-5.237 3.024 3.023 3.023 0 015.237-3.024zm-97.233-.783a3.023 3.023 0 11-4.276 4.276 3.023 3.023 0 014.276-4.276zm9.866-.35a2.65 2.65 0 11-4.175 3.262 2.65 2.65 0 014.175-3.262zm75.556-.537a2.65 2.65 0 11-4.175 3.262 2.65 2.65 0 014.175-3.262zm24.578-8.608a3.81 3.81 0 11-6.599 3.81 3.81 3.81 0 016.599-3.81zm-122.515-.987a3.81 3.81 0 11-5.387 5.388 3.81 3.81 0 015.387-5.388zm33.736 2.159a2.65 2.65 0 11-4.877 2.07 2.65 2.65 0 014.877-2.07zm52.583-1.46a2.65 2.65 0 11-3.189 4.231 2.65 2.65 0 013.189-4.231zm-73.251-1.14a3.338 3.338 0 11-5.26 4.11 3.338 3.338 0 015.26-4.11zm84.962-.194a3.023 3.023 0 11-4.276 4.276 3.023 3.023 0 014.276-4.276zm-73.76.505a3.023 3.023 0 11-5.238 3.024 3.023 3.023 0 015.237-3.024zm83.999-.987a3.338 3.338 0 11-5.26 4.11 3.338 3.338 0 015.26-4.11zm-61.5-1.487a2.65 2.65 0 11-5.247.738 2.65 2.65 0 015.247-.738zm26.024-2.284a2.65 2.65 0 11-1.984 4.913 2.65 2.65 0 011.984-4.913zm-14.487-1.912a2.62 2.62 0 11-.639 5.201 2.62 2.62 0 01.639-5.201zm25.325-2.297a3.023 3.023 0 11-3.023 5.237 3.023 3.023 0 013.023-5.237zm-45.261 1.76a3.023 3.023 0 11-5.841 1.565 3.023 3.023 0 015.84-1.565zm-10.994-3.15a3.338 3.338 0 11-6.145 2.609 3.338 3.338 0 016.145-2.609zm66.254-1.84a3.338 3.338 0 11-4.018 5.332 3.338 3.338 0 014.018-5.331zm14.12-1.68a3.81 3.81 0 11-5.388 5.387 3.81 3.81 0 015.388-5.387zm-40.217.463a3.023 3.023 0 11-1.565 5.84 3.023 3.023 0 011.565-5.84zm-16.701-.13a3.023 3.023 0 110 6.048 3.023 3.023 0 010-6.047zm-36.02.304a3.81 3.81 0 11-6.6 3.81 3.81 3.81 0 016.6-3.81zm28.985-3.118a3.338 3.338 0 11-6.611.93 3.338 3.338 0 016.61-.93zm32.79-2.877a3.338 3.338 0 11-2.5 6.19 3.338 3.338 0 012.5-6.19zM80.149 8.66a3.302 3.302 0 11-.804 6.553 3.302 3.302 0 01.804-6.553zm31.274-2.894a3.81 3.81 0 11-3.81 6.598 3.81 3.81 0 013.81-6.598zm-57.03 2.217a3.81 3.81 0 11-7.359 1.972 3.81 3.81 0 017.36-1.972zM91.139.163a3.81 3.81 0 11-1.972 7.359 3.81 3.81 0 011.972-7.36zM70.095 0a3.81 3.81 0 110 7.619 3.81 3.81 0 010-7.619z"
        id="dotHalo"
      />
    </defs>
    <use fill="#FFF" xlinkHref="#dotHalo" />
    <use fill="url(#haloGradA)" xlinkHref="#dotHalo" />
    <use fill="url(#haloGradB)" xlinkHref="#dotHalo" />
    <use fill="url(#haloGradC)" xlinkHref="#dotHalo" />
    <use fill="url(#haloGradD)" xlinkHref="#dotHalo" />
    <path
      fill="#1d1d1f"
      d="M80.38 68.181c1.66 0 3.75-1.091 4.999-2.565 1.137-1.346 1.94-3.183 1.94-5.039 0-.255-.02-.51-.057-.71-1.865.073-4.103 1.201-5.427 2.73-1.063 1.164-2.033 3.02-2.033 4.875 0 .29.056.564.075.655.112.018.298.054.503.054zm-5.724 27.713c2.248 0 3.243-1.474 6.044-1.474 2.838 0 3.483 1.438 5.97 1.438 2.47 0 4.11-2.239 5.677-4.44 1.732-2.53 2.469-4.987 2.487-5.115-.147-.036-4.865-1.947-4.865-7.28 0-4.622 3.704-6.697 3.926-6.86-2.451-3.477-6.192-3.586-7.224-3.586-2.746 0-4.994 1.656-6.431 1.656-1.53 0-3.52-1.547-5.916-1.547-4.551 0-9.158 3.713-9.158 10.701 0 4.368 1.695 8.973 3.814 11.94 1.806 2.51 3.39 4.567 5.676 4.567z"
    />
  </svg>
)

export default function Main() {
  return (
    <div className="box-border flex flex-1 flex-col items-center px-4 pb-10 pt-3 max-[480px]:pb-6">
      <div className="w-full max-w-[640px]">
        <div className="mx-auto mt-[18px] box-border w-full rounded-[44px] bg-white px-24  pb-8 pt-8 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.06)] max-[480px]:mt-3 max-[480px]:rounded-none max-[480px]:bg-transparent max-[480px]:px-5 max-[480px]:pb-5 max-[480px]:pt-6 max-[480px]:shadow-none">
          <div className="flex w-full flex-col items-start gap-2.5">
            <div className="flex w-full flex-col items-center">
              <div className="mb-1 flex flex-col items-center gap-3.5">
                <SVGComponent className="block h-auto w-40" />
                <div
                  className="mb-5 text-center text-[32px] font-semibold leading-9 text-[rgb(29,29,31)]"
                  style={{ fontFamily: 'SF Pro Display, Helvetica Neue, sans-serif' }}
                >
                  Sign in with Apple&nbsp;Account
                </div>
              </div>

              <div className="w-full">
                <div className="w-full">
                  <div
                    id="aid-auth-widget-iFrame"
                    className="box-border w-full"
                    role="region"
                    aria-label="Sign In to your Apple Account"
                  >
                    <input
                      type="text"
                      id="account_name_text_field"
                      name="accountName"
                      autoComplete="username"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      aria-required="true"
                      required
                      placeholder="Email or Phone Number"
                      aria-invalid="false"
                      autoFocus
                      className="box-border w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3.5 text-[1.0625rem] leading-snug text-[#1d1d1f] outline-none transition-[border-color,box-shadow] placeholder:text-[#86868b] focus:border-[#007aff]"
                    />
                    <a
                      className="mt-[15px] inline-block self-start text-[15px] font-normal leading-5  text-[#06c] no-underline hover:underline"
                      href="https://appleid.apple.com/account"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create Your Apple Account
                    </a>

                    <div className="mt-7 flex flex-col items-center gap-2.5 text-center">
                      <img
                        src="https://appleid.cdn-apple.com/appleauth/static/bin/cb1900903086/dist/assets/privacy-icon.png"
                        alt=""
                        className="h-7 w-[38px] shrink-0"
                      />
                      <p className="m-0 px-[15px] text-[12px] text-[#424245]">
                        Your Apple Account information is used to allow you to sign in securely and access your data.
                        Apple records certain data for security, support, and reporting purposes. If you agree, Apple
                        may also use your Apple Account information to send you marketing emails and communications,
                        including based on your use of Apple services.{' '}
                        <a
                          className="text-[12px] font-normal text-[#007aff] no-underline hover:underline"
                          href="https://www.apple.com/legal/privacy/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          See how your data is managed…
                        </a>
                      </p>
                    </div>

                    <div className="mt-7 flex w-full flex-row gap-2.5 max-[480px]:flex-col">
                      <button
                        type="button"
                        className="inline-flex   flex-1 cursor-pointer  justify-center gap-2 rounded-[10px] border-0 bg-[#99c6f5] px-3.5 py-2 text-[15px]  text-white transition  hover:opacity-90 max-[480px]:w-full"
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        className="inline-flex   flex-1 cursor-pointer justify-center gap-2 rounded-[10px] border-0 bg-black px-3.5 py-2 text-[15px]  text-white transition active:scale-[0.98] hover:opacity-90 max-[480px]:w-full"
                      >
                        <img
                          src="https://appleid.cdn-apple.com/appleauth/static/bin/cb3910871900/dist/assets/iphone-icon-dark.svg"
                          alt=""
                          className="h-[15px] w-[18px] shrink-0  pt-1 object-contain  "
                        />
                        Sign in with iPhone
                      </button>
                    </div>

                    <p className="mt-4 text-right text-[11px] leading-[1.4] text-[#aeaeb2]">
                      Requires a device with iOS 17 or later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
