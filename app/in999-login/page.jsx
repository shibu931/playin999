import CTAButton from '@/components/CTAButton'
import Disclaimer from '@/components/Disclaimer'
import PageHeader from '@/components/PageHeader'
import { Disc } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "IN999 Login – Secure Account Access Guide",
  description:
    "Step-by-step IN999 login guide using OTP. Learn how to access your IN999 account and fix common login issues.",
  alternates: {
    canonical: "https://playin999.com/in999-login",
  },
  keywords:"IN999 login, IN999 sign in, IN999 OTP login, IN999 account access"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to log in to IN999?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use your registered mobile number and OTP verification to log in to IN999."
      }
    }
  ]
};



const page = () => {
  return (
    <main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      <PageHeader
        title="IN999 Login – How to Access Your Account Safely"
        text={<>The <strong>IN999 login process</strong> uses <strong>OTP-based verification</strong> to help protect user accounts. Existing users can log in quickly using their registered mobile number.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>How to Login to IN999 (Based on Actual App Flow)</h2>
              <ol className='list-decimal list-inside mb-4 space-y-1'>
                <li>Open the IN999 app or website</li>
                <li>Tap Account from the bottom navigation bar</li>
                <li>Select Login</li>
                <li>Enter your registered mobile number</li>
                <li>Enter the OTP sent to your phone</li>
              </ol>
              <CTAButton text="Login" />
              <p className='font-sans font-medium mb-6 mt-4'>Once verified, you will be redirected to your account dashboard.</p>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Common IN999 Login Problems</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>OTP not received</li>
                <li>Incorrect mobile number</li>
                <li>Slow internet connection</li>
              </ul>
              <p className='font-sans font-medium mb-6'>If issues persist, users should wait a few minutes and try again.</p>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Security Tips</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Keep your mobile number updated</li>
                <li>Do not share your OTP with anyone</li>
                <li>Use a strong password for your account</li>
                <li>Avoid logging in on public devices</li>
              </ul>
              <p className='font-sans font-medium'>👉 New user? Visit the <Link href="/in999-register" className="underline hover:text-brand-500">IN999 Register</Link> page to create an account.</p>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Image
                src="/img/IN999_Login_&_Register.webp"
                height={400}
                width={400}
                alt="IN999 Login"
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Disclaimer />

    </main>
  )
}

export default page