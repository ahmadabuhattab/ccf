"use client";

import { useState, type FormEvent } from "react";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setFormState({
        status: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormState({
        status: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/5 bg-surface/50 p-8 backdrop-blur-sm sm:p-10"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={inputClasses}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={inputClasses}
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/60">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="How can we help?"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/60">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={formState.status === "loading"}
          className="gradient-btn w-full rounded-xl px-8 py-4 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {formState.status === "success" && (
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center text-sm text-emerald-400">
            {formState.message}
          </div>
        )}

        {formState.status === "error" && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-sm text-red-400">
            {formState.message}
          </div>
        )}
      </div>
    </form>
  );
}
