"use client";
import { submitForm } from "@/services/email/contact-us";
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  //   @ts-ignore
  const [formErrors, setFormErrors] = useState<FormData>({});

  const validateForm = () => {
    // @ts-ignore
    const errors: FormData = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (value: string) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        // Simulate API call or any async task
        await submitForm(formData);

        // Clear form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
        // @ts-ignore
        setFormErrors({});
      } catch (error) {
        console.error("Form submission error:", error);
        // Handle error here (e.g., show error message to the user)
      }
      setLoading(false);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form
      className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]"
      onSubmit={handleFormSubmit}
    >
      <div className="col-span-12 md:col-span-6">
        <input
          className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        {formErrors.firstName && (
          <p className="text-error text-sm">{formErrors.firstName}</p>
        )}
      </div>
      <div className="col-span-12 md:col-span-6">
        <input
          className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        {formErrors.lastName && (
          <p className="text-error text-sm">{formErrors.lastName}</p>
        )}
      </div>
      <div className="col-span-12 md:col-span-6">
        <input
          className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
        {formErrors.phoneNumber && (
          <p className="text-error text-sm">{formErrors.phoneNumber}</p>
        )}
      </div>
      <div className="col-span-12 md:col-span-6">
        <input
          className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {formErrors.email && (
          <p className="text-error text-sm">{formErrors.email}</p>
        )}
      </div>
      <div className="col-span-12">
        <textarea
          className="h-[196px] font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] resize-none"
          name="message"
          id="textarea"
          cols={30}
          rows={10}
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        {formErrors.message && (
          <p className="text-error text-sm">{formErrors.message}</p>
        )}
      </div>
      <div className="col-span-12">
        <div className="col-span-12 mb-[30px] lg:mb-0  order-2 lg:order-none">
          <button
            type="submit"
            className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[30px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all mb-[30px] lg:mb-0"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <p className="form-messege mt-3" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
