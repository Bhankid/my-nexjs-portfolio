"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import Link from "next/link";

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusableElements, setFocusableElements] = useState([]);

  useEffect(() => {
    const focusableElements = document.querySelectorAll(".mobile-nav li a");
    setFocusableElements(focusableElements);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  return (
    <div className="mobile-nav" onKeyDown={handleKeyDown}>
      {/* Hamburger menu button for mobile */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Menu"
        onClick={handleMenuClick}
        className="lg:hidden"
      >
        {menuOpen ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </Button>
      {/* Nav elements */}
      {menuOpen && (
        <nav
          className="absolute top-0 left-0 w-full h-screen bg-white shadow-lg rounded-t-md transition-transform duration-300 ease-in-out"
          aria-label="Navigation"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <Link href="#" className="text-sm font-medium">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link href="#projects" className="text-sm font-medium">
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link href="#skills" className="text-sm font-medium">
                Skills
              </Link>
            </li>
            <li className="py-2">
              <Link href="#contact" className="text-sm font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
