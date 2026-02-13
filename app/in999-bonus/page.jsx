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
  keywords: "IN999 bonus, IN999 first deposit bonus, IN999 rewards, IN999 offers, IN999 bonus rules"
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
        title="IN999 Bonus – First Deposit, Activity & Weekly Rewards Explained"
        text={<>IN999 offers multiple bonus and reward systems designed to enhance gameplay for users. These bonuses are <strong className="font-semibold text-gray-900 dark:text-white">activity-based</strong>, meaning rewards are unlocked after meeting specific conditions.</>}
      />
      <hr />
      <section className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">

        {/* First Deposit Bonus Section */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          🎁 First Deposit Bonus (New Users)
        </h2>

        <p className="mb-4 leading-relaxed">
          New users on IN999 are eligible for a <strong className="font-semibold text-gray-900 dark:text-white">first deposit bonus</strong>, where an additional bonus amount is credited based on the deposit slab.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mt-6 mb-4 text-gray-900 dark:text-white">
          First Deposit Bonus Structure
        </h3>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto mb-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-3 font-semibold">First Deposit Amount</th>
                <th className="px-6 py-3 font-semibold">Bonus Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹400</td>
                <td className="px-6 py-4">₹48</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹1,000</td>
                <td className="px-6 py-4">₹108</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹2,000</td>
                <td className="px-6 py-4">₹188</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹10,000</td>
                <td className="px-6 py-4">₹488</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹24,000</td>
                <td className="px-6 py-4">₹1,388</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹1,20,000</td>
                <td className="px-6 py-4">₹5,888</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">₹2,40,000</td>
                <td className="px-6 py-4">₹8,888 (Max)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
          Important Rules
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li>Bonus is <strong className="font-semibold text-gray-900 dark:text-white">available only once per account</strong></li>
          <li>Bonus amount <strong className="font-semibold text-gray-900 dark:text-white">excludes principal</strong></li>
          <li>Bonus requires <strong className="font-semibold text-gray-900 dark:text-white">turnover (valid bets)</strong> before withdrawal</li>
          <li>Bonus rewards are credited after conditions are met</li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Activity & Weekly Betting Rewards Section */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          🗓️ Activity & Weekly Betting Rewards
        </h2>

        <p className="mb-4 leading-relaxed">
          IN999 also provides <strong className="font-semibold text-gray-900 dark:text-white">weekly betting tasks</strong> where users receive rewards after completing specific betting volumes.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
          Example Weekly Rewards
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li>₹18 reward for ₹1,500 betting</li>
          <li>₹38 reward for ₹5,500 betting</li>
          <li>₹188 reward for ₹29,900 betting</li>
          <li>₹1,288 reward for ₹99,900 betting</li>
          <li>₹1,888 reward for ₹1,99,000 betting</li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
          Notes
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li>Rewards must be <strong className="font-semibold text-gray-900 dark:text-white">claimed manually</strong></li>
          <li>Unclaimed rewards may expire</li>
          <li>Weekly rewards do <strong className="font-semibold text-gray-900 dark:text-white">not roll over</strong></li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Bonus Conditions Section */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
          ⚠️ Bonus Conditions (Very Important)
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
          <li>Bonuses are subject to <strong className="font-semibold text-gray-900 dark:text-white">turnover requirements</strong></li>
          <li>Misuse (multiple accounts, bots, arbitrage) can lead to cancellation</li>
          <li>Platform reserves the <strong className="font-semibold text-gray-900 dark:text-white">final interpretation rights</strong></li>
        </ul>

        <p className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 text-sm md:text-base italic">
          👉 Bonuses are optional and meant to support gameplay, not guarantee profit.
        </p>

      </section>

      <Disclaimer />

    </main>
  )
}

export default page