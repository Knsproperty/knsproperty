"use client";
import { Fragment, useState, ChangeEvent } from "react";
import DatePicker from "./picker";
import { Dialog, Transition } from "@headlessui/react";
import { submitForm } from "@/services/email/booking";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const BookAView: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [formError, setFormError] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedHour, setSelectedHour] = useState<string>("8AM");
  const handleDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };
  const handleHourChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(event.target.value);
  };

  const nameInput = useFormInput("");
  const emailInput = useFormInput("");
  const phoneInput = useFormInput("");
  const isFormValid = () => {
    const { value: name } = nameInput;
    const { value: email } = emailInput;
    const { value: phone } = phoneInput;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {
      name: !name ? "Please enter your name." : "",
      email: !email
        ? "Please enter your email."
        : !emailRegex.test(email)
        ? "Please enter a valid email address."
        : "",
      phone: !phone ? "Please enter your phone number." : "",
    };

    setFormError(errors.name || errors.email || errors.phone);

    return !errors.name && !errors.email && !errors.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      const { value: name } = nameInput;
      const { value: email } = emailInput;
      const { value: phone } = phoneInput;

      // Your request payload
      const requestData = {
        name,
        email,
        phone,
        selectedDate,
        selectedHour,
      };

      // Make the POST request using the utility function
      await submitForm(requestData);
      closeModal();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enterTo="opacity-100"
          leave="ease-in duration-200"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="xl:text-xl text-lg font-semibold text-secondary pb-3 text-center"
                >
                  Take a tour with our agent
                </Dialog.Title>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    {/* <Customdate /> */}
                    <DatePicker
                      selectedDate={selectedDate}
                      selectedHour={selectedHour}
                      handleDateChange={handleDateChange}
                      handleHourChange={handleHourChange}
                    />
                    <div className="grid gap-2">
                      <input
                        type="text"
                        placeholder="Your name"
                        {...nameInput}
                        className="text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light"
                      />
                      <input
                        type="text"
                        placeholder="Your email"
                        {...emailInput}
                        className="text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light"
                      />
                      <input
                        type="number"
                        placeholder="Your Phone"
                        {...phoneInput}
                        className="text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-error text-sm text-center">
                      {formError}
                    </p>
                    <button
                      // onClick={handleSubmit}
                      className="bg-primary px-5 py-2.5 rounded-full text-white text-sm w-full"
                    >
                      Request this time
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookAView;

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return { value, onChange: handleChange };
};
