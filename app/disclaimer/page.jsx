import React from 'react'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: "IN999 Disclaimer – Informational & Risk Notice",
  description:
    "IN999 disclaimer explaining informational purpose, gameplay risk, and limitation of responsibility for users.",
  alternates: {
    canonical: "https://playin999.com/disclaimer",
  },
  keywords:"IN999 disclaimer, IN999 legal notice, IN999 risk information"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "IN999 Disclaimer"
};


const page = () => {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      <PageHeader
        title="Disclaimer"
        text="The information provided by IN999 on our website is for general informational purposes only."
      />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="space-y-8">
            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>1. General Disclaimer</h2>
              <p className='font-sans mb-4'>
                All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>2. No Financial Advice</h2>
              <p className='font-sans mb-4'>
                The Site may contain information related to gaming, bonuses, and financial transactions. This information is provided for educational and entertainment purposes only and is not intended as a substitute for professional advice. Before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>3. External Links Disclaimer</h2>
              <p className='font-sans mb-4'>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>4. Limitation of Liability</h2>
              <p className='font-sans mb-4'>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>5. Gaming Responsibility</h2>
              <p className='font-sans mb-4'>
                Users are responsible for ensuring that their participation in any games or activities on this site is lawful in their jurisdiction. We encourage responsible gaming and advise users to set limits on their activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
