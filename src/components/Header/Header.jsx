import React from "react";

const Header = () => {
  return (
    <header className=" p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-3">Logo</span>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <button>Signup </button>
          <button>Login </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
