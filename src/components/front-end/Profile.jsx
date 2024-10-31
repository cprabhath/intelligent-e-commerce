import React from "react";

const ProfilePage = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded-xl w-[800px]">
      <div className="pt-4">
        <h1 className="py-2 text-3xl font-semibold text-center">Account settings</h1>
      </div>
      <hr className="mt-4 mb-5" />
      <p className="py-2 text-xl font-semibold">Email Address</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your email address is <strong>someone@something.com</strong>
        </p>
        <button className="inline-flex text-sm font-semibold text-blue-600 decoration-2">
          Change
        </button>
      </div>
      <hr className="mt-4 mb-5" />
      <p className="py-2 text-xl font-semibold">Password</p>
      <div className="flex items-center">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
          <label htmlFor="login-password">
            <span className="text-sm text-gray-500">Current Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="login-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
          <label htmlFor="login-password">
            <span className="text-sm text-gray-500">New Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="login-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>
      </div>
      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
        Save Password
      </button>
      <hr className="mt-4 mb-8" />

      <div className="mb-10">
        <p className="py-2 text-xl font-semibold">Delete Account</p>
        <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Proceed with caution
        </p>
        <p className="mt-2">
          Make sure you have taken backup of your account in case you ever need
          to get access to your data. We will completely wipe your data. There
          is no way to access your account after this action.
        </p>
        <button className="ml-auto text-sm font-semibold text-rose-600 decoration-2">
          Continue with deletion
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
