import Disclaimer from '@/components/Disclaimer'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "IN999 Bonus – First Deposit & Activity Rewards",
  description:
    "Complete guide to IN999 bonus offers including first deposit bonus, weekly activity rewards, and bonus rules.",
  alternates: {
    canonical: "https://playin999.com/in999-bonus",
  },
  keywords:"IN999 bonus, IN999 first deposit bonus, IN999 rewards, IN999 offers, IN999 bonus rules"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the IN999 first deposit bonus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IN999 provides a first deposit bonus based on the deposited amount, subject to bonus conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Can IN999 bonus be withdrawn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bonus amounts usually require valid turnover before withdrawal."
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
        title="IN999 Bonus – Offers & Rewards Explained"
        text={<><strong>IN999</strong> may provide bonuses to users as part of promotional activities. These bonuses are meant to enhance gameplay, not guarantee profit.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>Types of Bonuses</h2>
              <ol className='list-decimal list-inside mb-6 space-y-1'>
                <li>Joining bonus (for new users)</li>
                <li>Promotional offers (time-limited)</li>
              </ol>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Important Notes</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Bonus terms may change</li>
                <li>Wagering conditions may apply</li>
                <li>Withdrawals depend on platform rules</li>
              </ul>
              <p className='font-sans font-medium mb-6'>⚠️ Users should read bonus conditions carefully before participating.</p>
              
              <p className='font-sans font-medium'>👉 Visit the <Link href="/in999-register" className="underline hover:text-brand-500">IN999 Register</Link> page to create a new account.</p>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Image
                src="/img/IN999_Bonus.webp"
                height={400}
                width={400}
                alt="IN999 Bonus"
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