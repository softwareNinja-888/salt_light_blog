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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-gray-700 mb-1">
          Enter your email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full mt-3 bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700"
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
          <label htmlFor="subscribe-newsletter" className="text-sm text-gray-700">
            Yes, subscribe me to your newsletter.
          </label>
        </div>
      </form>
  );
};

