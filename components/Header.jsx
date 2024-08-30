import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/ui/icons";
import MobileNav from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and name on the left */}
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <div className="relative h-8 w-8 rounded-full bg-muted">
            <Image
              src="/user-icon.png"
              alt="Alfred Fianyo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="font-bold">Alfred Fianyo</span>
        </Link>

        {/* Navigation links on the right */}
        <nav className="hidden md:flex flex-1 justify-end space-x-8">
          <Link
            href="#"
            className="text-sm font-medium hover:underline hover-slide-in"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline hover-slide-in"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:underline hover-slide-in"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline hover-slide-in"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline hover-slide-in"
            prefetch={false}
          >
            About
          </Link>
        </nav>

        {/* Mobile navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
