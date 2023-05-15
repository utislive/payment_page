import React from "react";
import css from "./navbar.module.css";
import { BsChevronCompactDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <div className={css.main}>
        <ul className={css.firstList}>
          <li>EDYODA</li>
          <li>
            Courses
            <BsChevronCompactDown />
          </li>
          <li>
            Programs
            <BsChevronCompactDown />
          </li>
        </ul>

        <ul className={css.secondList}>
          <li>
            <AiOutlineSearch />
          </li>
          <li>Log in</li>
          <li>JOIN NOW</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
