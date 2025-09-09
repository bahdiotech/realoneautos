"use client"
import { useState } from "react"
import { Menu, Phone, MapPin, Car, Settings, Users, Info, ChevronDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900 text-white">
      {/* Top bar with contact info */}
      <div className="bg-gray-700 py-2 px-4 text-sm">
        <div className="container mx-auto text-center">
          <span className="flex items-center justify-center gap-1">
            For emergency towing and roadside assistance, call us at{" "}
            <a href="tel:08092735348" className="text-blue-400 hover:text-blue-300">
              08092735348
            </a>{" "}
            for immediate service.
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-24  invert brightness-0 h-24 flex items-center justify-center">
                <img src="/logo.svg" alt="REALONE AUTO Logo" className="w-full" />
              </div>
              <span className="-ml-2 text-xl font-bold">REALONE AUTO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/services" className="px-4 py-2 hover:text-red-400 transition-colors">
              Services
            </Link>
            <Link href="/lagos-services" className="px-4 py-2 hover:text-red-400 transition-colors">
              Lagos Services
            </Link>
            <Link href="/towing-roadside" className="px-4 py-2 hover:text-red-400 transition-colors">
              Towing & Roadside
            </Link>
            <Link href="/about" className="px-4 py-2 hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="/help" className="px-4 py-2 hover:text-red-400 transition-colors">
              Help
            </Link>
            <Link href="/careers" className="px-4 py-2 hover:text-red-400 transition-colors">
              Join the Team
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button className="bg-blue-500 hidden md:block hover:bg-blue-600 text-white">
              <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0"> Get a Quote</a>
             
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gray-900 text-white border-gray-800">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/services" className="text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                  <Link href="/lagos-services" className="text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>
                    Lagos Services
                  </Link>
                  <Link href="/towing-roadside" className="text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>
                    Towing & Roadside
                  </Link>
                  <Link href="/about" className="text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/help" className="text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>
                    Help
                  </Link>
                  <Link href="/careers" className="text-lg hover:text-red-400" onClick={() => setIsOpen(false)}>
                    Join the Team
                  </Link>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-4">
                  <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0"> Get a Quote</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}