"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import Button from "../ui/button";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const { items } = useCartStore();

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center container mx-auto py-4 px-5 md:py-7">
        <div className="w-24 md:w-auto">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Sport on"
              width={127}
              height={30}
              className="w-full h-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-10 lg:gap-44 font-medium transition-all">
          <Link
            href="#"
            className="relative hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Category
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Explore Product
          </Link>
        </nav>

        <div className=" relative flex gap-4 md:gap-10 items-center">
          <FiSearch className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />

          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag className="w-5 h-5 md:w-6 md:h-6  " />
            {items.length ? (
              <div className="bg-primary rounded-full w-3 h-3 md:w-4 md:h-4 absolute -top-1 -right-1 text-[8px] md:text-[10px] text-white flex items-center justify-center">
              {items.length}
            </div>
            ) : (
              <></>
            )}
          </button>
          {isCartPopupOpen && <CartPopup />}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden flex flex-col p-5 gap-4 animate-in slide-in-from-top-5 duration-300">
          <Link
            href="#"
            className="font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Category
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore Product
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
