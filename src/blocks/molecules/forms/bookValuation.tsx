"use client";
import Book_Input from "@/blocks/atoms/inputs/book-v-input";
import CountryInput from "@/blocks/atoms/inputs/country-input";
import { submitForm } from "@/services/email/valuation";
import React, { useState } from "react";

interface BookValuationFormState {
  fullName: string;
  email: string;
  propertyType: string;
  phoneNumber: string;
  propertyAddress: string;
}

const BookValuationForm: React.FC = () => {
  const [formState, setFormState] =
    useState<BookValuationFormState>(initialFormState);
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (field: keyof BookValuationFormState, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [error, setError] = useState<string>("");

  const isFormValid = () => {
    const requiredFields: (keyof BookValuationFormState)[] = [
      "fullName",
      "email",
      "propertyType",
      "phoneNumber",
      "propertyAddress",
    ];

    for (const field of requiredFields) {
      if (!formState[field]) {
        setError(`${field} is required`);
        return false;
      } else if (field === "email" && !isValidEmail(formState.email)) {
        setError("Invalid email address");
        return false;
      }
    }

    setError(""); // Clear the error if there are no validation errors
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      setLoading(true);
      try {
        await submitForm(formState);
        console.log("Form submitted successfully!");
        // Clear the form after successful submission
        setFormState(initialFormState);
      } catch (err) {
        console.error("Error submitting form:", err);
        setError("Error submitting form. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form className="mt-12 space-y-4" onSubmit={handleSubmit}>
      <Book_Input
        type="text"
        placeholder="Full Name*"
        value={formState.fullName}
        onChange={(value) => handleChange("fullName", value)}
      />
      <Book_Input
        type="email"
        placeholder="Email*"
        value={formState.email}
        onChange={(value) => handleChange("email", value)}
      />
      <select
        className="select w-full bg-white rounded-full pl-8 font-light text-[#A7ADB8] "
        value={formState.propertyType}
        onChange={(e) => handleChange("propertyType", e.target.value)}
      >
        <option disabled selected className="text-sm ">
          Property type
        </option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>

      <CountryInput
        value={formState.phoneNumber}
        setValue={(value) => handleChange("phoneNumber", value)}
      />

      <Book_Input
        type="text"
        placeholder="Property Address*"
        value={formState.propertyAddress}
        onChange={(value) => handleChange("propertyAddress", value)}
      />

      <p className="text-error text-sm text-center">{error}</p>

      <button className="bg-primary group flex items-center mt-5 py-4 text-white hover:bg-white  hover:text-primary font-medium text-sm rounded-full capitalize px-8 w-full justify-center ">
        {loading ? "Loading..." : "Submit Detials"}
      </button>
    </form>
  );
};

export default BookValuationForm;

const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

const initialFormState: BookValuationFormState = {
  fullName: "",
  email: "",
  propertyType: "",
  phoneNumber: "",
  propertyAddress: "",
};
