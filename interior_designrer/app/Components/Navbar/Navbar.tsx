"use client";
import Image from "next/image";
import Link from "next/link";
import phoneCall from "@/public/Images/phone-call.svg";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Expertise",
    href: "#expertise",
  },
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "Faq's",
    href: "#faq's",
  },
  {
    label: "Contact Us",
    href: "#contactus",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScrooll = () => {
      setIsFixed(window.scrollY > 50);
      window.addEventListener("scroll", handleScrooll);
      return () => window.removeEventListener("scroll", handleScrooll);
    };
  });

  return (
    <>
      <div
        className={`w-full transition-all py-5 duration-500 fixed top-0 left-0 z-50 fixed
             ${isFixed ? "bg-black" : "bg-transparent"}`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-500 
             ${isFixed ? "px-[8%] lg:px-[16%]" : "px-[8%] lg:px-[5%]"}`}
        >
          {/* Desktop Logo */}
          <Link
            href="/"
            className={`text-4xl lg:text-5xl font-bold audiowide text-white`}
          >
            Liv<span className="text-(--prim-dark)">ora</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-5 menu-link relative z-40">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={link.href}
                className="text-lg rethink text-gray-200 hover:text-(--prim-dark) 
                    transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <Link href="#" className="hidden md:flex gap-2 text-gray-200 group">
              <Image
                src={phoneCall}
                alt="phoneCall"
                width={20}
                height={20}
                className=" invert"
              />
              <span className="rethink font-semibold group-hover:text-white">
                +237 652872441
              </span>
            </Link>

            <Link
              href="#contact"
              className="rethink font-semibold px-4 py-2 bg-white text-black hover:bg-(--prim)
                    hover:text-white rounded-full transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden bg-black border-t border-gray-500 mt-3 
                transition-all duration-300"
          >
            <div className="flex flex-col px-[8%] py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className=" block px-2 py-2 font-medium text-gray-200 hover:text-(--prim-dark)"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
