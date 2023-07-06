"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevFormData) => ({
      ...prevFormData,
      resume: file,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors: Partial<FormData> = {};

    if (formData.fullName.trim() === "") {
      validationErrors.fullName = "Full Name is required.";
    }

    if (formData.email.trim() === "") {
      validationErrors.email = "Email is required.";
    }

    if (formData.phone.trim() === "") {
      validationErrors.phone = "Phone is required.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform submission logic
      // ...
    }
  };

  return (
    <div>
      {/* ... */}

      <div className="px-10">
        <form onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text text-black">Full Name*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-full"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          {errors.fullName && <p className="text-error">{errors.fullName}</p>}

          <label className="label">
            <span className="label-text text-black">Email*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered w-full max-w-full"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-error">{errors.email}</p>}

          <label className="label">
            <span className="label-text text-black">Phone*</span>
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your Mobile No."
            className="input input-bordered w-full max-w-full"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className="text-error">{errors.phone}</p>}

          <label className="label">
            <span className="label-text text-black">Resume</span>
          </label>
          <input
            type="file"
            name="resume"
            className="file-input file-input-bordered w-full max-w-full"
            onChange={handleFileChange}
          />
          <label className="label">
            <span className="label-text-alt text-black">
              MAX 10MB, PDF, DOC, DOCX
            </span>
          </label>

          <button className="btn mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
