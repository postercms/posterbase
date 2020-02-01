import React from 'react';

export function Setup(props) {
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="token">
              Github token
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="token"
              type="text"
              placeholder="Github token"
            />
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy; Posterbase</p>
      </div>
    </div>
  );
}

export default Setup;
