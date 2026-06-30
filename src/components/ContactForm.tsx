"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-sm border border-accent/20 bg-accent-subtle">
        <p className="font-display text-xl font-light text-fg">Message sent.</p>
        <p className="mt-2 text-sm text-muted">We&rsquo;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mono mb-2 block text-[10px] tracking-[0.2em] text-muted uppercase">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-sm border border-border-subtle bg-void px-4 py-3 text-sm text-fg
              placeholder:text-subtle transition-[border-color] duration-200 ease-out-expo
              focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mono mb-2 block text-[10px] tracking-[0.2em] text-muted uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            required
            className="w-full rounded-sm border border-border-subtle bg-void px-4 py-3 text-sm text-fg
              placeholder:text-subtle transition-[border-color] duration-200 ease-out-expo
              focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="project" className="mono mb-2 block text-[10px] tracking-[0.2em] text-muted uppercase">
          Project Type
        </label>
        <select
          id="project"
          className="w-full rounded-sm border border-border-subtle bg-void px-4 py-3 text-sm text-muted
            transition-[border-color] duration-200 ease-out-expo
            focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option>Web Development</option>
          <option>AI Voice Agent</option>
          <option>Chat Bot</option>
          <option>CRM & ERP</option>
          <option>Digital Marketing</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mono mb-2 block text-[10px] tracking-[0.2em] text-muted uppercase">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          required
          className="w-full resize-y rounded-sm border border-border-subtle bg-void px-4 py-3 text-sm text-fg
            placeholder:text-subtle transition-[border-color] duration-200 ease-out-expo
            focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-accent px-10 py-4 text-base font-medium text-accent-fg
          transition-[transform,background-color] duration-200 ease-out-expo
          hover:bg-accent-bright active:scale-[0.96]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Send message
      </button>
    </form>
  );
}
