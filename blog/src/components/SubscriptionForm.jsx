import { useState } from "react";

export function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Subscribed:", subscribed);
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-10/12 m-auto mt-12 ">
        <label htmlFor="email" className="block text-gray-700 font-nunito text-sm dark:text-white">
          Enter your email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-3 py-2 border-b border-b-black rounded focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
          required
        />
        <button
          type="submit"
          className="w-full mt-3 bg-purple-600 text-white py-2 rounded font-lora hover:bg-purple-700 "
        >
          Subscribe
        </button>
        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            id="subscribe-newsletter"
            checked={subscribed}
            onChange={() => setSubscribed(!subscribed)}
            className="mr-2"
          />
          <label htmlFor="subscribe-newsletter" className="text-sm text-gray-700 font-geist dark:text-white">
            Yes, subscribe me to newsletter.
          </label>
        </div>
      </form>
  );
};

