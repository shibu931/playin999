import React from 'react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'
import Disclaimer from '@/components/Disclaimer'

export const metadata = {
  title: "IN999 Register – Create Account Using Mobile Number",
  description:
    "Register on IN999 using OTP-based mobile verification. Simple and quick account creation guide.",
  alternates: {
    canonical: "https://playin999.com/in999-register",
  },
  keywords:"IN999 register, IN999 signup, IN999 create account, IN999 registration"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to register on IN999?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Registration on IN999 requires a valid mobile number and OTP verification."
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
        title="IN999 Register – Create an Account in Minutes"
        text={<>New users can <strong>register on IN999</strong> quickly using a mobile number. The registration process is free and takes only a few minutes.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>How to Register on IN999</h2>
              <ol className='list-decimal list-inside mb-4 space-y-1'>
                <li>Open the IN999 registration page</li>
                <li>Enter your mobile number</li>
                <li>Verify using OTP</li>
                <li>Complete basic account setup</li>
                <li>Complete the Captcha verification</li>
              </ol>
              <CTAButton text="Register Now" />
              <p className='font-sans font-medium mt-2 mb-6'>After registration, users can explore the platform and understand the gameplay before participating.</p>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Who Can Register?</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Users aged 18 years or above</li>
                <li>Anyone nationality person can register on IN999</li>
              </ul>
              <p className='font-sans font-medium mb-6'>Registration does not guarantee winnings. Users should play responsibly.</p>
              
              <p className='font-sans font-medium'>👉 Completed Registration? Visit the <Link href="/in999-rules" className="underline hover:text-brand-500">IN999 Game rules</Link> page to learn how to play.</p>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Image
                src="/img/convenience.png"
                height={400}
                width={400}
                alt="IN999 Login"
                className="mx-auto"
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