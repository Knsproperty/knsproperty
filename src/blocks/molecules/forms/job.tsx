"use client";
import Container from "@/blocks/atoms/container";
import { submitForm } from "@/services/email/job";
import strapi from "@/utils/strapi";
import { notify } from "@/utils/toast";
import axios from "axios";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent, useRef } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
}

export default function Form({ id }: any) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleFileUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chat-app");
    formData.append("cloud_name", "hellooworkd"); // Replace with your upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/hellooworkd/image/upload",
        formData
      );
      console.log(response.data.url);
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const applyJob = async () => {
    const pdf = await handleFileUpload(formData.resume);
    let data = {
      Name: formData.fullName,
      email: formData.email,
      number: formData.phone,
      Cv: pdf,
      job: id,
    };
    const res = strapi.create("job-applications", data);
    console.log(res);
  };

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

  const handleSubmit = async (e: FormEvent) => {
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
      const pdf = await handleFileUpload(formData.resume);
      let data = {
        Name: formData.fullName,
        email: formData.email,
        number: formData.phone,
        Cv: pdf,
        job: id,
      };
      await submitForm(data);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        resume: null,
      });
      notify();
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <section className="bg-[#e3ecee]" id="contact">
      <Container>
        <div className="lg:pt-[60px] lg:pb-[80px] py-10 rounded-lg px-5 text-center">
          <div className="w-full">
            <div className="pb-6">
              <h2
                className={
                  "text-secondary pb-[1.5rem] lg:text-2xl md:text-xl text-xl font-medium"
                }
              >
                Apply to Job
              </h2>
              <p className="col-md-7 col-11 mx-auto text-primary text-base sm:w-[60%] pb-[10px]  ">
                If you have a passion for real estate and a drive for
                excellence, you've come to the right place. Submit your resume
                today, and expect to hear from us soon. Join us in shaping the
                future of real estate. Send your resume now!
              </p>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:max-w-none lg:mx-0 max-w-[500px] mx-auto">
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <Image
                width={531}
                height={395}
                className="hidden object-cover mx-auto rounded-lg lg:block shrink-0 "
                src="/hi.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 lg:mx-10">
              <form ref={formRef} onSubmit={handleSubmit}>
                <label className="label">
                  <span className="label-text text-black">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  className="input input-bordered w-full max-w-full bg-white"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <p className="text-error">{errors.fullName}</p>
                )}

                <label className="label">
                  <span className="label-text text-black">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered w-full max-w-full bg-white"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-error">{errors.email}</p>}

                <label className="label">
                  <span className="label-text text-black">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your Mobile No."
                  className="input input-bordered w-full max-w-full bg-white"
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
                  className="file-input file-input-bordered w-full max-w-full bg-white"
                  onChange={handleFileChange}
                />
                <label className="label">
                  <span className="label-text-alt text-black">
                    MAX 10MB, PDF, DOC, DOCX
                  </span>
                </label>

                <button
                  className="bg-primary group flex items-center mt-5 py-4 text-white hover:bg-white  hover:text-primary font-medium text-sm rounded-full capitalize px-8 w-full justify-center"
                  type="submit"
                >
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
