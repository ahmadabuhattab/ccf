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
    "w-full border-0 border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-white/40">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClasses}
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-white/40">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-wider text-white/40">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-white/40">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={formState.status === "loading"}
          className="quiet-btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.status === "loading" ? "Sending…" : "Send"}
          {formState.status !== "loading" && <span aria-hidden="true">→</span>}
        </button>

        {formState.status === "success" && (
          <p className="text-sm text-white/60">{formState.message}</p>
        )}

        {formState.status === "error" && (
          <p className="text-sm text-white/60">{formState.message}</p>
        )}
      </div>
    </form>
  );
}
