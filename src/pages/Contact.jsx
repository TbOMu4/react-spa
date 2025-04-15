import React from "react";
const Contact = () => {
  return (
    <div className="container mx-auto max-w-[1280px] min-h-[125px] flex flex-col items-center justify-between py-4 px-6">
      <h1 className="text-3xl font-bold leading-9 text-grey-900">Contact Us</h1>
      <p className="text-lg leading-snug text-grey-900">We would love to hear from you!</p>
      <form className="flex flex-col gap-4 mt-4">
        <input type="text" placeholder="Your Name" className="border p-2" required />
        <input type="email" placeholder="Your Email" className="border p-2" required />
        <textarea placeholder="Your Message" className="border p-2" required></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
