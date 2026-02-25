"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../../../helper/constant";
import Logo from "../../../assets/hilltown_school.jpeg";
import { FaBurger, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[9999] w-full bg-white shadow-md transition-all">
      <div className="max-w-body mx-auto flex items-center justify-between px-6 py-4 sm:px-12">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <Image src={Logo} alt="Site Logo" className="h-10 w-auto" priority />

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-wide text-gray-900">
              Ecommerse
            </p>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Site
            </p>
          </div>
        </Link>

        {/* Desktop NAV */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-lg font-medium transition-all duration-100 ${
                  isActive
                    ? "text-primary"
                    : "hover:text-primary text-gray-700 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row gap-2">
          <button className="lg:hidden" onClick={() => setShowMobileNav(true)}>
            <FaBurger className="h-7 w-7 text-black" />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity ${
          showMobileNav ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setShowMobileNav(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-[9999] h-full w-[80%] max-w-sm bg-white p-6 transition-transform ${
          showMobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" className="h-12 w-auto" />
          <button onClick={() => setShowMobileNav(false)}>
            <FaXmark className="h-7 w-7 text-black" />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="border-b pb-2 text-xl font-medium"
              onClick={() => setShowMobileNav(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
