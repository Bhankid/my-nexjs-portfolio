"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/ui/icons";

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {" "}
      {/* Fragment wrapping the elements */}
      {/* Hamburger menu button for mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={handleMenuClick}
      >
        <MenuIcon className="h-6 w-6" />
      </Button>
      {/* Nav elements */}
      {menuOpen && (
        <nav>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default MobileNav;
