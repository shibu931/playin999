import CTAButton from '@/components/CTAButton'
import Disclaimer from '@/components/Disclaimer'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "IN999 Withdrawal – UPI & Payment Process Explained",
  description:
    "Complete guide to IN999 withdrawal process. Learn how to withdraw money using UPI, limits, and processing time.",
  alternates: {
    canonical: "https://playin999.com/in999-withdrawal",
  },
  keywords:"IN999 withdrawal, IN999 withdraw money, IN999 UPI withdrawal, IN999 payment methods",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Withdraw Money from IN999",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Open wallet and select the withdrawal option."
    },
    {
      "@type": "HowToStep",
      "text": "Choose UPI or another available payment method."
    },
    {
      "@type": "HowToStep",
      "text": "Enter withdrawal amount and submit the request."
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
        title="IN999 Withdrawal – Payment Methods & Process"
        text={<>IN999 supports withdrawals through commonly used Indian payment options.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>Supported Withdrawal Methods</h2>
              <ul className='list-disc list-inside mb-6 space-y-1'>
                <li>UPI</li>
                <li>Paytm</li>
                <li>PhonePe</li>
                <li>Bank Transfer</li>
              </ul>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>How to Withdraw Money from IN999</h3>
              <ol className='list-decimal list-inside mb-6 space-y-1'>
                <li>Go to the withdrawal section</li>
                <li>Enter withdrawal amount</li>
                <li>Choose payment method</li>
                <li>Submit request</li>
              </ol>
              <p className='font-sans font-medium mb-6'>Withdrawals are processed as per platform timelines and conditions.</p>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Important Points</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Minimum withdrawal limit may apply</li>
                <li>KYC may be required</li>
                <li>Processing time may vary</li>
              </ul>
              <p className='font-sans font-medium'>👉 New user? Visit the <Link href="/in999-register" className="underline hover:text-brand-500">IN999 Register</Link> page to create an account.</p>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Image
                src="/img/convenience.png"
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