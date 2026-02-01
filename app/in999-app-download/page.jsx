import Disclaimer from '@/components/Disclaimer'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "IN999 App Download – Android APK Installation Guide",
  description:
    "Download the IN999 Android app safely. Step-by-step APK installation guide, features, and login instructions.",
  alternates: {
    canonical: "https://playin999.com/in999-app-download",
  },
  keywords:"IN999 app download, IN999 APK, IN999 Android app"
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "IN999 App",
  "operatingSystem": "Android",
  "applicationCategory": "GameApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
};


const page = () => {
  return (
    <main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>

      <PageHeader
        title="IN999 App Download – Android APK Guide"
        text={<>The <strong>IN999 Android app</strong> offers a smoother experience compared to mobile browsers. It is suitable for users who prefer quick access and faster loading.</>}
      />
      <hr />
      <section className='py-10 md:py-16'>
        <div className='max-w-300 mx-auto px-4 md:px-0'>
          <div className="grid grid-cols-2 gap-6">
            <div className='col-span-2 md:col-span-1'>
              <h2 className='font-serif text-2xl md:text-3xl font-semibold mb-4 text-surface-900'>Benefits of IN999 App</h2>
              <ol className='list-decimal list-inside mb-6 space-y-1'>
                <li>Faster performance</li>
                <li>Easy login</li>
                <li>Real-time game updates</li>
              </ol>
              <h3 className='font-serif text-xl md:text-2xl font-semibold mb-4 text-surface-900'>How to Download IN999 App</h3>
              <ul className='list-disc list-inside space-y-1 mb-4'>
                <li>Visit the official IN999 app download page</li>
                <li>Download the APK file</li>
                <li>Allow installation from unknown sources</li>
                <li>Install and log in</li>
              </ul>
              <p className='font-sans font-medium mb-6'>⚠️ Always download the app from trusted sources only.</p>
              
              <p className='font-sans font-medium'>👉 Visit the <Link href="/in999-register" className="underline hover:text-brand-500">IN999 Register</Link> page to create a new account.</p>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Image
                src="/img/IN999_App_Download.webp"
                height={400}
                width={400}
                alt="IN999 App Download"
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