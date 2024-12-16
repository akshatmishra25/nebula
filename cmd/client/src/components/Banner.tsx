"use client";

const Banner = () => {
  return (
    <header className="flex-grow flex items-center bg-black justify-center text-center px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold gradient-text mb-6">
          Powerful Backend Infrastructure, Zero Hassle
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Nebula provides scalable, secure, and lightning-fast backend services
          to help developers focus on building amazing products.
        </p>
        <div className="space-x-4">
          <button
            className="px-6 py-3 rounded-md font-semibold hover:bg-blue-50
          bg-gradient-to-r from-violet-600 to-purple-500 text-white"
          >
            Start Free Trial
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-md hover:text-purple-500 hover:border-purple-500">
            View Documentation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
