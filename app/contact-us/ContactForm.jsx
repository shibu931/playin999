'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (send to backend, email service, etc.)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-surface-900 font-serif mb-4">Contact Us</h1>
          <p className="text-surface-900 font-sans text-lg">Have questions? We'd love to hear from you.</p>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-400 rounded-lg shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-surface-900 font-sans font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-white border-gray-400 placeholder-surface-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-surface-900 font-sans font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full bg-white border-gray-400 placeholder-surface-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-surface-900 font-sans font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                required
                rows="6"
                className="w-full bg-white border border-gray-400 rounded-md placeholder-surface-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </Button>
          </form>
        </div>

        {/* Telegram Button */}
        <div className="flex justify-center">
          <a
            href="https://t.me/lucifier931"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.82-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.394 0-.328-.148-.46-.52l-1.04-3.41-2.99-.924c-.648-.204-.658-.682.14-.982l11.68-4.504c.537-.194 1.006.128.832.941z" />
            </svg>
            Contact Us on Telegram
          </a>
        </div>

        {/* Alternative Contact Info */}
        <div className="mt-12 text-center text-gray-700">
          <p className="text-sm">Or reach out directly through our social channels</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm