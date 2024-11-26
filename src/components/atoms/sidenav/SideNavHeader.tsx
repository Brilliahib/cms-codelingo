"use client";

import Link from "next/link";

import { Flame, Heart, House, LogOut, Menu, Settings } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import { buildFromAppURL, generateFallbackFromName } from "@/utils/misc";

import { Link as NavLink } from "@/components/organism/side/SideNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideNavLink from "./SideNavLink";
import Image from "next/image";

interface SideNavHeaderProps {
  session: Session;
  links: NavLink[];
}

export default function SideNavHeader({ session, links }: SideNavHeaderProps) {
  return (
    <header className="fixed left-0 right-0 z-40 h-14 lg:h-[60px] lg:px-6 bg-background">
      <div className="flex h-full w-full items-center justify-between gap-4 bg-background px-4 md:justify-end md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col">
            <div className="mx-auto my-8">
              <Link
                href="/"
                className="flex text-left justify-center items-center gap-2 font-semibold"
              >
                <Image
                  src="/images/logo.png"
                  alt="CodeLingo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <nav className="grid-gap-2 space-y-4 font-poppins">
              {links
                .filter((link) => !link.hide)
                .map((link) => (
                  <SideNavLink key={link.label} {...link} />
                ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="md:flex md:gap-x-12">
          <div className="flex items-center gap-x-2">
            <Flame className="text-orange-500" />
            <h1 className="text-white font-semibold">2 hari beruntun</h1>
          </div>
          <div className="flex items-center gap-x-2">
            <Heart className="text-destructive" />
            <h1 className="text-white font-semibold">5</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
