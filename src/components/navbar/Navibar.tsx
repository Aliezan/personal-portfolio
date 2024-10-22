"use client";

import React, { FC, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { SpaceGrotesk } from "@/utils/font";
import { Link as LinkScroll } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import ThemeButton from "./ThemeButton";
import { Button } from "../ui/button";

const Navibar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const path = usePathname();

  return (
    <Navbar
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo
            fontWidth={100}
            fontHeight={100}
            logoWidth={30}
            logoHeight={30}
          />
        </NavbarBrand>
      </NavbarContent>
      {path === "/" ? (
        <>
          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Button variant="link">
                <LinkScroll
                  to="hero"
                  className={SpaceGrotesk.className}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  home
                </LinkScroll>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button variant="link">
                <LinkScroll
                  to="about"
                  className={SpaceGrotesk.className}
                  spy
                  smooth
                  offset={60}
                  duration={500}
                >
                  about
                </LinkScroll>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button variant="link">
                <LinkScroll
                  to="works"
                  className={SpaceGrotesk.className}
                  spy
                  smooth
                  offset={-30}
                  duration={500}
                >
                  works
                </LinkScroll>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                asChild
                variant="link"
                data-umami-event="blogs button clicked"
              >
                <Link href="/blogs">blogs</Link>
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <NavbarMenuItem>
              <Button variant="link">
                <LinkScroll to="home" spy smooth duration={500}>
                  home
                </LinkScroll>
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button variant="link">
                <LinkScroll to="about" spy smooth duration={500}>
                  about
                </LinkScroll>
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button variant="link">
                <LinkScroll to="test" spy smooth duration={500}>
                  works
                </LinkScroll>
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button asChild variant="link">
                <Link href="/blogs">blogs</Link>
              </Button>
            </NavbarMenuItem>
          </NavbarMenu>
        </>
      ) : (
        <>
          <NavbarContent className="hidden gap-12 sm:flex" justify="center">
            <NavbarMenuItem>
              <Link
                href=".."
                color="foreground"
                className={`${SpaceGrotesk.className} text-sm hover:underline`}
              >
                home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={path === "/blogs"}>
              <Link
                href="/blogs"
                aria-current={path === "blogs" && "page"}
                className={`${SpaceGrotesk.className} text-sm hover:underline`}
              >
                blogs
              </Link>
            </NavbarMenuItem>
          </NavbarContent>
          <NavbarMenu>
            <NavbarMenuItem>
              <Link
                href=".."
                className={SpaceGrotesk.className}
                color="foreground"
              >
                home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={path === "/blogs"}>
              <Link
                href="/blogs"
                aria-current={path === "blogs" && "page"}
                className={SpaceGrotesk.className}
              >
                blogs
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </>
      )}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navibar;
