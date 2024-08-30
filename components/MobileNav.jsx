"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/ui/icons";
import Link from "next/link";

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-nav">
      {/* Hamburger menu button for mobile */}
      <Button variant="ghost" size="icon" onClick={handleMenuClick}>
        <MenuIcon className="h-6 w-6" />
      </Button>
      {/* Nav elements */}
      {menuOpen && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-white shadow-lg rounded-t-md">
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
