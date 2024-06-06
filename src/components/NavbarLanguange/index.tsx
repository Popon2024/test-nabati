"use client";

import React from "react";
import { useState } from "react";

interface ListLanguangeInterFace {
  name: string;
  code: string;
}

interface NavbarLanguangeInterFace {
  onChange: any;
}

const NavbarLanguange = ({ onChange }: NavbarLanguangeInterFace) => {
  const ListLanguange: ListLanguangeInterFace[] = [
    {
      name: "Indonesia",
      code: "id",
    },
    {
      name: "English",
      code: "en",
    },
  ];
  const [languange, setLanguage] = useState<String>("id");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeLanguange = (e: String) => {
    onChange(e);
    setLanguage(e);
    setIsOpen(false);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="change-language-button"
            onClick={toggleIsOpen}
          >
            Languange: {languange.toUpperCase()}
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className={`absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {ListLanguange.map((e: ListLanguangeInterFace, i: number) => (
              <div key={i} className="py-1" role="none">
                <div
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  id="lang-indonesia"
                  onClick={() => onChangeLanguange(e.code)}
                >
                  {e.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarLanguange;
