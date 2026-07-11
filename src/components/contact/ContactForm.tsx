"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import type { ContactFormData } from "@/lib/types";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle size={30} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. Our team will respond within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border text-gray-900 text-sm placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors";
  const errorInputClass = "border-red-400";
  const normalInputClass = "border-gray-200";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
            First Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            autoComplete="given-name"
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={`${inputClass} ${errors.firstName ? errorInputClass : normalInputClass}`}
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "Must be at least 2 characters" },
            })}
          />
          {errors.firstName && (
            <p id="firstName-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Last Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Smith"
            autoComplete="family-name"
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={`${inputClass} ${errors.lastName ? errorInputClass : normalInputClass}`}
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 2, message: "Must be at least 2 characters" },
            })}
          />
          {errors.lastName && (
            <p id="lastName-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone <span className="text-gray-400 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(949) 555-0100"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`${inputClass} ${errors.phone ? errorInputClass : normalInputClass}`}
          {...register("phone", {
            pattern: {
              value: /^[+\d\s\-().]{7,20}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@company.com"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClass} ${errors.email ? errorInputClass : normalInputClass}`}
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-none ${errors.message ? errorInputClass : normalInputClass}`}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Fields marked with <span className="text-red-500">*</span> are required.
      </p>
    </form>
  );
}
