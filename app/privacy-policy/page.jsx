import React from 'react'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: "IN999 Privacy Policy – Data Usage & Cookies",
  description:
    "Read the IN999 privacy policy to understand data collection, cookies, and user information protection.",
  alternates: {
    canonical: "https://playin999.com/privacy-policy",
  },
  keywords:"IN999 privacy policy, IN999 data protection"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  "name": "IN999 Privacy Policy"
};


const page = () => {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      <PageHeader
        title="Privacy Policy"
        text="We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner."
      />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="space-y-8">
            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>1. Introduction</h2>
              <p className='font-sans mb-4'>
                Welcome to IN999. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>2. Information We Collect</h2>
              <p className='font-sans mb-4'>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className='list-disc list-inside mb-4 space-y-1 font-sans'>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>3. How We Use Your Information</h2>
              <p className='font-sans mb-4'>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className='list-disc list-inside mb-4 space-y-1 font-sans'>
                <li>Create and manage your account.</li>
                <li>Process your transactions.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>4. Data Security</h2>
              <p className='font-sans mb-4'>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>5. Contact Us</h2>
              <p className='font-sans mb-4'>
                If you have questions or comments about this Privacy Policy, please contact us at our support channels provided on the website.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default page
