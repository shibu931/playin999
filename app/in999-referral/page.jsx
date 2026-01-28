import Disclaimer from '@/components/Disclaimer'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "IN999 Referral Program – Invite Friends & Earn",
  description:
    "Detailed guide to the IN999 referral program, commission structure, referral bonuses, and rules.",
  alternates: {
    canonical: "https://playin999.com/in999-referral",
  },
  keywords:"IN999 referral, IN999 referral bonus, IN999 invite friends, IN999 commission structure",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the IN999 referral program work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Users can invite friends to IN999 and earn referral rewards based on valid participation."
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
        title="IN999 Referral Program – Invite & Earn"
        text={<>The <strong>IN999 referral program</strong> allows users to invite friends to the platform. Referral rewards depend on platform policies and user activity.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>How the Referral Program Works</h2>
              <ol className='list-decimal list-inside mb-6 space-y-1'>
                <li>Share your referral link</li>
                <li>Friend registers using the link</li>
                <li>Rewards are credited as per rules</li>
              </ol>
              <p className='font-sans font-medium mb-6'>Referral earnings are not guaranteed and depend on valid participation.</p>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Tips</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Share responsibly</li>
                <li>Avoid spamming referral links</li>
              </ul>
              
              <p className='font-sans font-medium'>👉 Visit the <Link href="/in999-register" className="underline hover:text-brand-500">IN999 Register</Link> page to create a new account.</p>
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