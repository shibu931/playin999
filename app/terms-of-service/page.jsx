import React from 'react'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: "IN999 Terms of Service – Rules & User Conditions",
  description:
    "IN999 terms of service covering usage rules, account conditions, and user responsibilities.",
  alternates: {
    canonical: "https://playin999.com/terms-of-service",
  },
  keywords:"IN999 terms, IN999 conditions, IN999 rules"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TermsOfService",
  "name": "IN999 Terms of Service"
};


const page = () => {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      <PageHeader
        title="Terms of Service"
        text="Please read these Terms of Service carefully before using our website operated by IN999."
      />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="space-y-8">
            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>1. Acceptance of Terms</h2>
              <p className='font-sans mb-4'>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>2. User Responsibilities</h2>
              <p className='font-sans mb-4'>
                As a user of this Site, you agree to use the Site legally and ethically. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
              </p>
              <ul className='list-disc list-inside mb-4 space-y-1 font-sans'>
                <li>You must be at least 18 years of age to use this Service.</li>
                <li>You agree not to use the Service for any illegal or unauthorized purpose.</li>
                <li>You must not violate any laws in your jurisdiction (including but not limited to copyright laws).</li>
              </ul>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>3. Intellectual Property</h2>
              <p className='font-sans mb-4'>
                The Service and its original content, features and functionality are and will remain the exclusive property of IN999 and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>4. Termination</h2>
              <p className='font-sans mb-4'>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>5. Governing Law</h2>
              <p className='font-sans mb-4'>
                These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>6. Changes</h2>
              <p className='font-sans mb-4'>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default page
