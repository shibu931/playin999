import React from 'react'
import ContactForm from './ContactForm';

export const metadata = {
    title: "Contact Us – IN999 Support & Help",
    description:
        "Contact IN999 for account support, login issues, withdrawal queries, or general assistance related to IN999 colour prediction game.",
    keywords: [
        "IN999 contact",
        "IN999 support",
        "IN999 contact us",
        "IN999 help",
    ],
    alternates: {
    canonical: "https://playin999.com/contact-us",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact PlayIN999",
  "url": "https://playin999.com/contact-us",
  "isPartOf": {
    "@type": "WebSite",
    "name": "PlayIN999"
  }
};


const page = () => {
    return (
        <>
            <ContactForm />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>

    )
}

export default page