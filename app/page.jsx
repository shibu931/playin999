import CTAButton from "@/components/CTAButton";
import { CheckCircle2, CloudDownload, Pointer, User2, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "IN999 Colour Prediction Game – Login, Register & Play",
  description:
    "IN999 colour prediction game guide for Indian users. Learn about IN999 login, registration, bonuses, withdrawal process, and game rules.",
  alternates: {
    canonical: "https://playin999.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "IN999 Colour Prediction Game – Login, Register & Play",
    description:
      "Complete guide to the IN999 colour prediction game. Login, register, understand bonuses, withdrawals, and game rules.",
    url: "https://playin999.com/",
    siteName: "IN999",
    images: [
      {
        url: "https://playin999.com/og/in999-home.png",
        width: 1200,
        height: 630,
        alt: "IN999 Colour Prediction Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IN999 Colour Prediction Game – Login, Register & Play",
    description:
      "IN999 colour prediction game guide covering login, register, bonuses, withdrawal, and rules.",
    images: ["https://playin999.com/og/in999-home.png"],
  },
  other: {
    keywords:
      "IN999, IN999 colour prediction game, IN999 login, IN999 register, IN999 bonus, IN999 withdrawal",
  },
}; 


export default function Home() {
  const features = [
    "Instant Login & Register",
    "UPI / Paytm / PhonePe Withdrawals",
    "Referral Bonus Available",
    "18+ Responsible Gaming"
  ]
  return (
    <main>

      <section className="bg-brand-500 py-12 md:py-20">
        <div className="max-w-300 mx-auto grid grid-cols-12 gap-6 px-4 md:px-12 items-center">
          <div className="col-span-12 md:col-end-6 lg:col-span-7">
            <h1 className="font-serif font-extrabold text-3xl lg:text-4xl text-surface-900 mb-2">IN999 Colour Prediction Game – Play & Win Real Money in India</h1>
            <p className="font-sans font-semibold text-surface-900"><Pointer className="rotate-90 w-4 inline" /> Finger Play the IN999 colour prediction game and win real money daily.</p>
            <p className="font-sans font-semibold text-surface-900"><Pointer className="rotate-90 w-4 inline" /> Fast registration, instant UPI withdrawal, exciting bonuses, and smooth gameplay for users.</p>
            <div className="w-full max-w-2xl mx-auto mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-700 shrink-0" />
                    <span className="text-sm font-bold text-surface-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <CTAButton text="Register Now" />
            </div>

          </div>
          <div className="col-span-12 md:col-end-6 lg:col-span-5">
            <Image
              src={'/img/IN999-banner.webp'}
              width={700}
              height={400}
              alt="IN999 Banner"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto px-4 sm:px-8 md:px-12">
          <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-6 text-center">What is IN999 Colour Prediction Game?</h2>
          <p className="text-lg">The IN999 colour prediction game is an online platform where users predict colours within a fixed time frame to win real money. It is popular in India due to its simple rules, quick rounds, and fast withdrawal system.</p>
          <p className="text-lg mt-4">IN999 allows players to:</p>
          <ul className="font-medium mt-2 list-disc ps-5 space-y-2">
            <li>Register using a mobile number</li>
            <li>Add money securely via UPI</li>
            <li>Withdraw winnings instantly</li>
            <li>Predict colours in live rounds</li>
          </ul>
          <p className="text-lg mt-4">The platform is designed for users who enjoy quick decision-based games with real cash rewards.</p>
        </div>
      </section>

      <hr />

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-center">
          <div className="col-span-2 lg:col-span-1 lg:px-12">
            <Image
              src={'/img/convenience.png'}
              width={600}
              height={400}
              alt="Instant Registration"
              className="w-full"
            />
            <div className="mt-4 flex w-full justify-center gap-4 mb-4">
              <CTAButton text="Login" />
              <CTAButton text="Register Now" />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 px-4">
            <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-6">How to Play IN999 Colour Prediction Game</h2>
            <p className="text-lg">Playing IN999 is simple and beginner-friendly.</p>
            <ol className="list-decimal ps-5 mt-4 space-y-2 font-medium">
              <li>Register on IN999 using your mobile number</li>
              <li>Add money to your wallet using UPI or other supported methods</li>
              <li>Select a colour and place your prediction</li>
              <li>Win the round and withdraw your earnings instantly</li>
            </ol>
            <p className="text-lg">New users can start with small amounts and increase their play gradually.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-center">
          <div className="col-span-2 lg:col-span-1 px-4">
            <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-6">IN999 Login & Register Process</h2>
            <p className="text-lg">The IN999 login and registration process is quick and secure.</p>
            <ol className="list-decimal ps-5 mt-4 space-y-2 font-medium">
              <li>New users can register within minutes</li>
              <li>Existing users can log in using their registered number</li>
              <li>OTP-based login ensures account safety</li>
            </ol>
            <p className="text-lg mt-4">👉 Read the full guide here: <Link className="text-base underline hover:text-brand-500" href="/in999-login">IN999 Login</Link> | <Link className="text-base underline hover:text-brand-500" href="/in999-register">IN999 Register</Link></p>
          </div>
          <div className="col-span-2 lg:col-span-1 lg:px-12">
            <Image
              src={'/img/convenience.png'}
              width={600}
              height={400}
              alt="Instant Registration"
              className="w-full"
            />
            <div className="mt-4 flex w-full justify-center gap-4 mb-4">
              <CTAButton text="Login" />
              <CTAButton text="Register Now" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-500">
        <div className="max-w-300 mx-auto px-4">
          <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-2 text-center">IN999 Bonus & Referral Program</h2>
          <p className="text-center font-sans text-lg">IN999 offers attractive rewards for both new and existing users.</p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 mt-6">
            <div className="bg-surface-100 border p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">🎁 Joining Bonus</h3>
              <hr />
              <p className="text-sm mt-2">New users may receive a joining bonus after successful registration and wallet recharge.</p>
            </div>
            <div className="bg-surface-100 border p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">👥 Referral Program</h3>
              <hr />
              <p className="text-sm mt-2">Invite friends to IN999 and earn commission when they play. Referral earnings can be withdrawn using the same payment methods.</p>
            </div>
          </div>
          <p className="text-center mt-6 font-sans text-sm">Learn more about bonuses here <br /> <Link className="text-center block underline" href="/in999-bonus">IN999 Bonus & Referral Program</Link></p>

        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-center">
          <div className="col-span-2 lg:col-span-1 lg:px-12">
            <Image
              src={'/img/convenience.png'}
              width={600}
              height={400}
              alt="Instant Registration"
              className="w-full"
            />
            <div className="mt-4 flex w-full justify-center gap-4 mb-4">
              <CTAButton text="Login" />
              <CTAButton text="Register Now" />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 px-4">
            <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-6">IN999 Withdrawal & Payment Methods</h2>
            <p className="text-lg">IN999 supports fast and convenient withdrawals for users.</p>
            <ol className="list-decimal ps-5 mt-2 font-medium">
              <li>UPI</li>
              <li>Paytm</li>
              <li>PhonePe</li>
              <li>Bank Transfer</li>
            </ol>
            <p className="text-lg mt-4">Withdrawals are usually processed within a short time after request, subject to minimum withdrawal limits.</p>
            <p className="text-lg mt-4">👉 Detailed guide available here:&nbsp;
              <Link className="text-base underline hover:text-brand-500" href="/in999-withdrawal">IN999 Withdrawal Process</Link></p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-brand-500">
        <div className="max-w-300 mx-auto px-4">
          <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-2 text-center">Is IN999 Real or Fake?</h2>
          <p className="text-center text-lg font-medium font-sans text-surface-900">Many users ask whether IN999 is real or fake before playing.</p>
          <p className="text-center mt-4 lg:px-24 font-sans">IN999 is an online colour prediction platform that allows users to participate in prediction-based games using real money. Like all online gaming platforms, outcomes involve risk, and users should play responsibly.</p>
          <div className="flex flex-col sm:flex-row justify-center mt-6 lg:px-24 text-surface-900 font-sans">
            <p className="font-medium">We strongly recommend:</p>
            <ul className="list-disc ps-4 sm:ps-6">
              <li>Playing with a clear understanding of the rules</li>
              <li>Using only disposable income</li>
              <li>Avoiding excessive or compulsive play</li>
            </ul>
          </div>
          <p className="text-center mt-6 font-sans text-sm">Read our detailed analysis here <br /> <Link className="text-center block underline" href="/in999-is-real-or-fake">Is IN999 Real or Fake?</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto flex justify-center">
          <div className="px-4">
            <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-2 text-center">IN999 App Download (Android APK)</h2>
            <p className="mb-4 text-gray-600">
              For a smoother experience, users can play IN999 through the Android app.
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Benefits of the IN999 app:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Faster performance</li>
                <li>Easy login</li>
                <li>Real-time game updates</li>
              </ul>
            </div>
            <div className="mt-4 flex w-full justify-center gap-4 mb-4">
              <CTAButton text="Login" />
              <CTAButton text="Register Now" />
            </div>
            <div className="bg-brand-100 p-4 rounded-md inline-block">
              <span className="font-medium mr-2">👉 Download guide available here:</span>
              <a href="#" className="text-brand-600 hover:underline font-bold">IN999 App Download</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto">
          <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-2 text-center">Pros and Cons of IN999</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 text-green-700">✅ Pros</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Simple and fast gameplay</li>
                <li>Instant UPI withdrawals</li>
                <li>Easy registration</li>
                <li>Referral earning opportunity</li>
              </ul>
            </div>

            {/* Cons */}
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 text-red-700">❌ Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Real money gaming involves risk</li>
                <li>Requires self-control and responsible play</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-300 mx-auto">
          <h2 className="font-serif font-extrabold text-2xl lg:text-3xl text-surface-900 mb-6 text-center">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-5 px-4">
            <div>
              <h3 className="font-bold text-lg font-serif text-surface-900">Is IN999 legal in India?</h3>
              <p className="text-gray-600">Online colour prediction games operate in a legal grey area. Users should check local regulations and play responsibly.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg font-serif text-surface-900">What is the minimum withdrawal amount?</h3>
              <p className="text-gray-600">The minimum withdrawal amount depends on platform rules and may change over time.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg font-serif text-surface-900">Can I play IN999 without investment?</h3>
              <p className="text-gray-600">Some users may receive bonuses, but real money play usually requires wallet recharge.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg font-serif text-surface-900">Is KYC required on IN999?</h3>
              <p className="text-gray-600">KYC requirements may apply before withdrawals, depending on platform policy.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg font-serif text-surface-900">How long does withdrawal take?</h3>
              <p className="text-gray-600">Withdrawals are generally processed within a short time via UPI.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="pt-12 md:pt-20">
        <div className="bg-linear-to-br from-brand-500 to-brand-600 text-white p-8 shadow-lg text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">🔥 Ready to Play IN999 Colour Prediction Game?</h2>
            <p className="text-brand-100 text-lg mb-6">Join thousands of users playing IN999 daily.</p>

            <p className="mb-8 font-medium">Register now and experience fast gameplay with instant withdrawals.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-600 px-8 py-3 rounded-full font-bold shadow hover:bg-gray-100 transition transform hover:-translate-y-1">
                <Link href="#"><UserPlus className="inline w-5 h-5"/> Register Now</Link>
              </button>
              <button className="bg-brand-800 text-white border border-brand-400 px-8 py-3 rounded-full font-bold shadow hover:bg-brand-900 transition transform hover:-translate-y-1">
                <Link href={'/in999-app-download'}><CloudDownload className="inline w-5 h-5"/> Download App</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
