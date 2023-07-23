"use client";
import React, { useState } from "react";
import { submitForm } from "@/services/email/subcription";
import { isValidEmail } from "@/utils/helpers";

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isValidEmail(email)) {
      setLoading(true);
      try {
        await submitForm({ email });
        setEmail("");
        // Add any success handling code if needed
      } catch (error) {
        // Handle form submission error if necessary
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Invalid email");
    }
  };

  return (
    <form
      action="#"
      method="POST"
      className="mt-5 lg:mt-12"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <label htmlFor="email" className="sr-only" />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* SVG code for the email icon */}
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-primary rounded-md sm:rounded-r-none  focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading} // Disable the button when the form is in a loading state
          className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-[tomato] border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-secondary focus:bg-secondary"
        >
          {loading ? "Loading..." : "Get instant access"}
        </button>
      </div>
    </form>
  );
}
