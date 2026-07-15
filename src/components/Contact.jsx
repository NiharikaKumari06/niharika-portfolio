import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!form.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-shell">
      <span className="eyebrow">// Contact</span>
      <h2 className="section-title">Let's build something data-driven</h2>
      <p className="mt-5 max-w-xl text-ink-600 dark:text-ink-300">
        Open to Business Analyst, Data Analyst, and Python Developer roles. Reach out directly or
        send a message below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="surface-card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
              <FiMail size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-400">Email</p>
              <a href="mailto:niharikakumari913@gmail.com" className="font-medium text-ink-800 dark:text-ink-100">
                niharikakumari913@gmail.com
              </a>
            </div>
          </div>

          <div className="surface-card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
              <FiPhone size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-400">Phone</p>
              <a href="tel:+919818440592" className="font-medium text-ink-800 dark:text-ink-100">
                +91 98184 40592
              </a>
            </div>
          </div>

          <div className="surface-card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
              <FiMapPin size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-400">Location</p>
              <p className="font-medium text-ink-800 dark:text-ink-100">Faridabad, Haryana</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="surface-card grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="What's this about?"
              className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me a bit about the role or project..."
              className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center sm:w-auto">
              <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-3 flex items-center gap-2 text-sm text-emerald-600">
                <FiCheckCircle /> Message sent — thanks for reaching out!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 flex items-center gap-2 text-sm text-red-500">
                <FiAlertCircle /> Something went wrong. Please email me directly instead.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
