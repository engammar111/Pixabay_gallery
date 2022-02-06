import React, { useState } from "react";

const SearchBox = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        class=" bg-gray-100 flex justify-center items-center"
      >
        <div class="bg-white p-4 w-96 rounded-md">
          <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
            <input
              onChange={(e) => setText(e.target.value)}
              class="flex-grow outline-none text-gray-600 focus:text-blue-600"
              type="text"
              placeholder="Search..."
            />

            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
