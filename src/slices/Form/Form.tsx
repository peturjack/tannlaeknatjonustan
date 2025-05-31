"use client";
import { KeyTextField, LinkField } from "@prismicio/client";

import React, { useState } from "react";

type Props = {
  name: KeyTextField;
  surname: KeyTextField;
  email: KeyTextField;
  message: KeyTextField;
  button: KeyTextField;
};

const FormComponent = ({ name, surname, email, message, button }: Props) => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Nafn er nauðsynlegt";
    if (!form.surname.trim()) newErrors.surname = "Eftirnafn er nauðsynlegt";
    if (!form.email.trim()) newErrors.email = "Netfang er nauðsynlegt";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Netfang er ógilt";
    if (!form.message.trim()) newErrors.message = "Skilaboð eru nauðsynleg";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSending(true);
      setSubmitted(false);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setSending(false);
      if (!data.success) {
        setSubmitted(false);
        alert("Sending failed: " + (data.error || "Unknown error"));
      } else {
        setForm({ name: "", surname: "", email: "", message: "" }); // clear form
        setSubmitted(true);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {name}
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`w-full border ${
              errors.name ? "border-red-400" : "border-primary-200"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300`}
            placeholder="Fullt nafn"
            disabled={sending}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {surname}
          </label>
          <input
            name="surname"
            type="text"
            value={form.surname}
            onChange={handleChange}
            className={`w-full border ${
              errors.surname ? "border-red-400" : "border-primary-200"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300`}
            placeholder="Eftirnafn"
            disabled={sending}
          />
          {errors.surname && (
            <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {email}
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border ${
              errors.email ? "border-red-400" : "border-primary-200"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300`}
            placeholder="Netfang"
            disabled={sending}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {message}
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`w-full border ${
              errors.message ? "border-red-400" : "border-primary-200"
            } resize-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300`}
            rows={4}
            placeholder="Hvað getum við aðstoðað með?"
            disabled={sending}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center"
          disabled={sending}
        >
          {sending ? (
            <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
          ) : null}
          {button || "Senda"}
        </button>
        {submitted && Object.keys(errors).length === 0 && (
          <p className="text-green-600 text-sm mt-2">
            Takk fyrir! Skilaboðin hafa verið send.
          </p>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
