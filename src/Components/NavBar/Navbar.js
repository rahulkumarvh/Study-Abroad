import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbarstyle.css";
// import { Popover } from "@headlessui/react";
import KD from "./KDDropDown";
import KE from "./KEDropDown";
import KDSUB from "./KDSubDropDown";
import KME from "./KMEDropDown";
import KV from "./KVDropDown";
import { MenuItems } from "./MenuItems";
import { KDItems } from "./KDItems";
import { KDSub } from "./KDSub";
import TestDropdown from "./TestDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [KDdropdown, setKDDropdown] = useState(false);

  const [KEdropdown, setKEDropdown] = useState(false);

  const onKEMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setKEDropdown(false);
    } else {
      setKEDropdown(true);
    }
  };
  const onKEMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setKEDropdown(false);
    } else {
      setKEDropdown(false);
    }
  };

  const onKDMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setKDDropdown(false);
    } else {
      setKDDropdown(true);
    }
  };
  const onKDMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setKDDropdown(false);
    } else {
      setKDDropdown(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div class="bg-gray-900 sticky fixingnav top-0">
        <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Study Abroad
              </span>
            </Link>
            <ul class="items-center hidden space-x-8 lg:flex">
              <li onMouseEnter={onKDMouseEnter} onMouseLeave={onKDMouseLeave}>
                <NavLink
                  to="/programtype"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Program Types
                </NavLink>
                {KDdropdown &&
                  KDItems.map((item, index) => {
                    return (
                      <TestDropdown
                        dropdown={KDdropdown}
                        onMouseEnter={onKDMouseEnter}
                        onMouseLeave={onKDMouseLeave}
                        item={item}
                        key={index}
                      />
                    );
                  })}
              </li>
              <li onMouseEnter={onKEMouseEnter} onMouseLeave={onKEMouseLeave}>
                <NavLink
                  to="/resources"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Resources
                </NavLink>
                {KEdropdown && <KE />}
              </li>
              <li>
                <Link
                  to="/scholarship"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Scholarship
                </Link>
              </li>
              <li>
                <Link
                  to="/scholar"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Scholars
                </Link>
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Study Abroad
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <Link
                            to="/programtype"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium overflow-auto tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Program Types
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/resources"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Resources
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/scholarship"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Scholarship
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/scholar"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Scholars
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
