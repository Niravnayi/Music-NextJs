"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

const Navbar = ({ className }: { className?: string }) => {

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Contact",
      link: "/contact",
      
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
};

export default Navbar;
