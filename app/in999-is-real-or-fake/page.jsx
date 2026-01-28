import React from 'react'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Disclaimer from '@/components/Disclaimer'

export const metadata = {
  title: "Is IN999 Real or Fake? Honest User Guide",
  description:
    "Find out whether IN999 is real or fake. Learn about risks, gameplay nature, and important facts before playing.",
  alternates: {
    canonical: "https://playin999.com/in999-is-real-or-fake",
  },
  keywords:"IN999 real or fake, is IN999 safe, IN999 review"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is IN999 real or fake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IN999 is an online colour prediction platform. Gameplay involves risk and users should play responsibly."
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
        title="Is IN999 Real or Fake? Honest Information"
        text={<>Many users ask whether <strong>IN999 is real or fake</strong> before participating.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <p className='font-sans font-medium mb-6'>IN999 is an online colour prediction platform where users participate in prediction-based games using real money. Like all online gaming platforms, outcomes involve financial risk.</p>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>Important Considerations</h2>
              <ul className='list-disc list-inside mb-4 space-y-1'>
                <li>No guaranteed earnings</li>
                <li>Results are chance-based</li>
                <li>Users must play responsibly</li>
              </ul>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>Our Recommendation</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Understand the risks</li>
                <li>Never chase losses</li>
                <li>Use only discretionary income</li>
              </ul>
              <p className='font-sans font-medium mb-6'>This website provides informational content only and does not guarantee any outcome.</p>
              
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