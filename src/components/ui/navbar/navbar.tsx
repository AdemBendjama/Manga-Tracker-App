"use client";
import { Dispatch, SetStateAction } from "react";
import NavbarSideBar from "./navbar-sidebar";
import NavbarIconNavigation from "./navbar-icon-navigation";
import NavbarTitleNavigation from "./navbar-title-navigation";
import NavbarLogo from "./navbar-logo";
import { usePathname } from "next/navigation";

function Navbar({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // change navbar ui based on current page
  const currentPathname = usePathname();
  const pathnames: RegExp[] = [
    /^\/manga\/\d+$/,
    /^\/user\/profile$/,
    /^\/user\/library$/,
  ];
  let transparent = false;
  for (const pathname of pathnames) {
    if (pathname.test(currentPathname)) {
      transparent = true;
      break;
    }
  }

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`flex flex-row justify-between w-full h-[3.75rem] lg:px-[5rem] ${
        transparent && !isSideBarOpen
          ? "bg-primary-50 dark:bg-card-50"
          : "bg-primary dark:bg-card z-50"
      } 
          ${transparent && "absolute z-50"}
          text-primary-foreground dark:text-card-foreground`}
    >
      {/* left navigation */}
      <div className="flex items-center relative gap-[0.25rem]">
        {/* sidebar */}
        <NavbarSideBar
          isSideBarOpen={isSideBarOpen}
          toggleSideBar={toggleSideBar}
        />

        {/* logo */}
        <NavbarLogo />
      </div>

      {/* center navigation */}
      <NavbarTitleNavigation />

      {/* right navigation */}
      <NavbarIconNavigation />
    </header>
  );
}

export default Navbar;
