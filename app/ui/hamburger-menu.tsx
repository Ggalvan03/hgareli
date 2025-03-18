'use client';

import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import NavLinks from "@/app/ui/nav-link";

export default function HamburgerMenu(){
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside, but prevent conflicts with the button click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
        }

        if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]); // Only runs when `open` changes

    return(
        <div className="relative">
      {/* Hamburger Toggle Button */}
      <Hamburger size={24} toggled={open} toggle={() => setOpen((prev) => !prev)} />

      {/* Small Dropdown Menu */}
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-1"
        >
          <nav className="flex flex-col space-y-2" onClick={() => setOpen(false)}>
            <NavLinks/>
          </nav>
        </motion.div>
      )}
      {open && (
        <div
          className="fixed inset-0 bg-transparent z-0"
          onClick={() => setOpen(false)} // Clicking anywhere closes menu
        />
      )}

      
    </div>
    );
}