"use client";
import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  selectedDate: string;
  phoneNumber: string;
}

export default function Booking_Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    selectedDate: "2023-07-22",
    phoneNumber: "",
  });

  const [formErrors, setFormErrors] = useState<FormData>({
    fullName: "",
    email: "",
    selectedDate: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    // @ts-ignore
    const errors: FormData = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }
    // You can add more validation rules as needed

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
      // Form is valid, you can proceed with the form submission
      setLoading(true);
      try {
        // Simulate API call or any async task
        await submitForm(formData);

        // Clear form fields after successful submission
        setFormData({
          fullName: "",
          email: "",
          selectedDate: "2018-07-22",
          phoneNumber: "",
        });
        // @ts-ignore
        setFormErrors({});
      } catch (error) {
        console.error("Form submission error:", error);
        // Handle error here (e.g., show error message to the user)
      }
      setLoading(false);
    } else {
      // Form validation failed, set the errors state to display error messages
      setFormErrors(errors);
    }
  };

  const submitForm = (data: FormData) => {
    // Simulate an API call here, or handle the form submission as needed
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For this example, we'll just resolve the promise after a delay
        resolve("success");
      }, 2000); // Simulating a 2-second delay for the API call
    });
  };

  return (
    <form
      className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl"
      onSubmit={handleFormSubmit}
    >
      <div className="py-3">
        <h3 className="font-semibold text-gray-900 text-3xl">Book a meeting</h3>
      </div>
      <div className="py-3">
        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        {formErrors.fullName && (
          <p className="text-error text-sm">{formErrors.fullName}</p>
        )}
      </div>
      <div className="py-3">
        <input
          type="text"
          placeholder="Email"
          className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {formErrors.email && (
          <p className="text-error text-sm">{formErrors.email}</p>
        )}
      </div>
      <div className="py-3 relative">
        <input
          type="date"
          placeholder="Date"
          className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
          value={formData.selectedDate}
          onChange={(e) =>
            setFormData({ ...formData, selectedDate: e.target.value })
          }
        />
      </div>
      <div className="py-3 relative">
        <input
          type="number"
          placeholder="Phone Number"
          className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      </div>
      <div className="py-3">
        <button
          className="w-full py-4 font-semibold text-white bg-primary rounded-xl hover:bg-green-900 transition ease-in-out duration-500"
          type="submit"
          disabled={loading} // Disable the button while the form is submitting
        >
          {loading ? "Submitting..." : "Book"}
        </button>
      </div>
    </form>
  );
}
