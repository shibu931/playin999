import React from 'react'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Disclaimer from '@/components/Disclaimer'

export const metadata = {
  title: "IN999 Game Rules – Gameplay, Limits & Fair Use",
  description:
    "Learn IN999 game rules including gameplay mechanics, betting limits, prohibited activities, and fair play policies.",
  alternates: {
    canonical: "https://playin999.com/in999-game-rules",
  },
  keywords:"IN999 rules, IN999 game rules, IN999 fair play, IN999 betting rules"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "IN999 Game Rules"
};


const page = () => {
  return (
    <main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      <PageHeader
        title="IN999 Game Rules – Important Guidelines"
        text={<>Understanding the <strong>IN999 game rules</strong> helps users make informed decisions.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>General Rules</h2>
              <ul className='list-disc list-inside mb-4 space-y-1'>
                <li>Only registered users can play</li>
                <li>One account per user</li>
                <li>Users must follow payment and withdrawal policies</li>
              </ul>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Fair Play Rules</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>No use of bots or automation</li>
                <li>No misuse of referral system</li>
                <li>Platform decisions are final</li>
              </ul>
              <p className='font-sans font-medium mb-6'>Violation of rules may lead to account restrictions.</p>
              
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