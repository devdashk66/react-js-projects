import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setShowPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center mx-6 lg:mx-12 rounded-md my-12 bg-primary">
      <div className="max-w-2xl px-3 py-5 rounded-2xl md:px-8 md:py-7">
        <h4 className="text-2xl font-semibold tracking-wide text-white lg:text-3xl">
          Want to stay updated on the latest movies?
        </h4>
        <p className="max-w-xl mt-2 leading-relaxed text-blue-100 lg:text-lg">
          Sign up for our newsletter and get notified about the newest movies
          and updates to our collection.
        </p>
        <div className="my-4 sm:flex sm:flex-row ">
          <input
            className="block w-full px-4 py-3 mt-3 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none sm:max-w-xs focus:outline-none focus:ring focus:ring-blue-50 focus:border-blue-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="bg-transparent border-2  text-white block w-full py-3 mt-3 font-bold tracking-wide rounded shadow sm:ml-3 md:w-52  focus"
          >
            <span className="block">Subscribe</span>
          </button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 bg-opacity-80 z-50">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg text-center">
            <p>Thank you for subscribing!</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
