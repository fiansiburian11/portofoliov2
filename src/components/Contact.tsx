"use client";
import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Format pesan WhatsApp dengan input user
    const encodedMessage = encodeURIComponent(`Haloo, saya *${name}*, Saya ingin menghubungi Anda melalui email: *${email}*.\n\nPesan saya: *${message}*.`);

    // URL WhatsApp dengan teks yang telah di-encode
    const url = `https://api.whatsapp.com/send?phone=6281266988303&text=${encodedMessage}`;

    // Redirect ke WhatsApp
    window.open(url, "_blank");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500" type="submit">
        Submit{" "}
      </button>
    </form>
  );
};
