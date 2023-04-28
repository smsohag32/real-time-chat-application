import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            ChatYard
          </Link>
        </div>
        <div className="mx-5 w-full md:mx-10">
          <Marquee>Welcome to Chat Yard</Marquee>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
