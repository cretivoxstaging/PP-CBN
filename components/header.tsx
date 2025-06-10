"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Peraturan Perusahaan", href: "/peraturan" },
  // { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 60 24"
              fill="black"
              className="w-14 h-14 sm:w-16 sm:h-16"
            >
              <path d="M13.507 19.526c-5.377 0-5.411-5.816-5.411-7.223 0-4.218 1.283-7.766 5.48-7.766 1.976 0 3.746.864 4.057 3.196h7.145c-.034-.862-.069-2.94-2.081-4.922C20.72.895 17.633 0 13.576 0 9.934 0 6.639.703 4.073 3.387 1.713 5.847.917 9.013.917 12.177c0 2.396.485 6.072 3.225 8.756C6.917 23.617 11.218 24 13.645 24c3.26 0 11.237-.607 11.272-7.83h-7.215c-.138.896-.52 3.356-4.195 3.356M53.027 0v19.052h-.039L48.708 0h-3.2190000000000003v24h2.145V4.945h.039L51.955 24V24h3.217V0zM43.774 13.715v8.571H42.06V24H26.632V0h13.714v1.714h1.714v8.573h-1.714v1.714h1.714v1.713z" />
            </svg>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium  text-black hover:text-gray-600 ${
                pathname === item.href
                  ? " font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium  text-black hover:text-gray-600 ${
                    pathname === item.href
                      ? " font-semibold"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
