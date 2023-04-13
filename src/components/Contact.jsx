import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronsRight } from "react-feather";

import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  const formId = import.meta.env.VITE_GETFORM_ID;
  const formUrl = "https://getform.io/f/" + formId;

  // handles form validation
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // error message for invalid email
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section
      id="contact"
      className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="max-w-screen-lg m-auto md:pl-20 px-8 py-1 sm:py-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        {/* CONTACT FORM */}
        <div className="text-center text-lg font-bold mb-8">
          Don't be shy! Hit me up! 👇
        </div>
        <div>
          <form
            method="POST"
            action={formUrl}
            id="contact-form"
            className="flex flex-col justify-center max-w-[600px] mx-auto w-full"
          >
            <div className="w-full mx-auto">
              <label className="block font-['Source_Code_Pro'] font-medium">
                Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                required
                className="w-full my-2 p-2 rounded bg-stone-100 dark:bg-slate-700 border border-gray-300 dark:border-gray-500"
              />

              <label className="block font-['Source_Code_Pro'] font-medium">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                required
                className="w-full my-2 p-2 rounded bg-stone-100 dark:bg-slate-700 border border-gray-300 dark:border-gray-500"
              />

              <label className="block font-['Source_Code_Pro'] font-medium">
                Message:
              </label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="4"
                required
                className="w-full my-2 p-2 rounded bg-stone-100 dark:bg-slate-700 border border-gray-300 dark:border-gray-500"
              />

              {errorMessage && (
                <div>
                  <p className="font-['Source_Code_pro'] tracking-tight text-xs text-red-600 ">
                    {errorMessage}
                  </p>
                </div>
              )}
              <button type="submit" className="group w-[120px]">
                Submit
                <span className="group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
