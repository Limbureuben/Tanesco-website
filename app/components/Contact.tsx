"use client";

import AnimatedSection from "../components/AnimatedSection";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const mailBody = `Name: ${name}\nCompany: ${company}\nBudget: ${budget}\nEmail: ${email}\n\nMessage:\n${message}`;
  const mailto = `mailto:hello@example.com?subject=Project%20Inquiry&body=${encodeURIComponent(mailBody)}`;

  return (
    <AnimatedSection id="contact" className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Contact Us</h2>
          <p className="mt-2 text-neutral-600">We’ll get back within 1–2 business days.</p>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            <li className="flex gap-3"><MapPin className="text-[var(--brand)]" size={18}/> 1st Floor, Example Street, Dar es Salaam</li>
            <li className="flex gap-3"><Phone className="text-[var(--brand)]" size={18}/> +255 700 000 000</li>
            <li className="flex gap-3"><Mail className="text-[var(--brand)]" size={18}/> hello@example.com</li>
            <li className="flex gap-3"><Clock className="text-[var(--brand)]" size={18}/> Mon–Fri: 9:00–17:00</li>
          </ul>
          <div className="mt-6 rounded-md bg-[var(--brand)]/10 p-4 text-sm text-neutral-800">
            Prefer a quick chat? Email us and we’ll schedule a call.
          </div>
        </div>

        <form className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-6 grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company (optional)"
            className="w-full rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
          >
            <option value="">Budget range</option>
            <option value="<$1k">Less than $1k</option>
            <option value="$1k–$5k">$1k–$5k</option>
            <option value=">$5k">Above $5k</option>
          </select>
          <textarea
            className="md:col-span-2 min-h-32 w-full rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brand)]"
            placeholder="Briefly describe your project"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="md:col-span-2 flex items-center gap-3">
            <button
              onClick={() => (window.location.href = mailto)}
              className="rounded-md bg-[var(--brand)] hover:opacity-90 text-white font-medium px-5 py-2"
            >
              Send Message
            </button>
            <span className="text-xs text-neutral-500">By clicking send, you agree to be contacted about your request.</span>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
