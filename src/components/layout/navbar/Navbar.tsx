"use client";
import { Button } from "@/components/ui/button";
import { NavMenu } from "./NavMenu";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { logoutUser } from "@/firebase/firebase.auth";

const Navbar = () => {
  const { user, loading } = useAuth();

  // console.log("user", user?.photoURL);

  return (
    <nav className="mx-auto h-16 max-w-(--breakpoint-xl)  border bg-[#ffffff]">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {loading ? null : user ? (
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src={user.photoURL || "https://github.com/shadcn.png"}
                      alt="@shadcn"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={"/events/manage"}>Manage Events</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSub></DropdownMenuSub>
                    <DropdownMenuItem>
                      <Link href={"/events/add"}>Publish Event</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant={"destructive"}
                size={"icon"}
                onClick={() => logoutUser()}
              >
                <LogOut />
              </Button>
            </div>
          ) : (
            <div className="">
              <Link href={"/login"}>
                <Button
                  className="hidden rounded-full sm:inline-flex"
                  variant="outline"
                >
                  Sign In
                </Button>
              </Link>

              <Link href={"/register"}>
                <Button className="rounded-full">Register</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
