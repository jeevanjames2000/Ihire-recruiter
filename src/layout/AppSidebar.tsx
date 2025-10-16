"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import theme from "../../theme.json";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "../icons/index";
import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  { icon: <GridIcon />, name: "Dashboard", path: "/recruiterDashboard" },
  { icon: <ListIcon />, name: "Job Listings", path: "/joblisting" },
  { icon: <TableIcon />, name: "Post a Job", path: "/recruiterDashboard/createJob" },
  { icon: <UserCircleIcon />, name: "Applicants", path: "/applicants" },
  { icon: <PageIcon />, name: "Company Profile", path: "/profile" },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  // destructure theme values
  const { buttons, logo, text, background } = theme;
  const primaryGradient = `${buttons.primary.bg} ${buttons.primary.to}`;
  const primaryHover = `${buttons.primary.bgHover} ${buttons.primary.toHover}`;
  const primaryText = buttons.primary.text;
  const secondaryText = text.secondary;
  const primaryTextColor = text.primary;
  const primaryBg = background.primary;
  const secondaryBg = background.secondary;

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : [];
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType as "main" | "others", index });
              submenuMatched = true;
            }
          });
        } else if (nav.path && isActive(nav.path)) {
          setOpenSubmenu(null);
          submenuMatched = true;
        }
      });
    });
    if (!submenuMatched) setOpenSubmenu(null);
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev?.type === menuType && prev?.index === index
        ? null
        : { type: menuType, index }
    );
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-2">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.path ? (
            <Link
              href={nav.path}
              className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-all duration-200 font-sans ${
                isActive(nav.path)
                  ? `bg-gradient-to-r ${primaryGradient} ${primaryText} shadow-md`
                  : `hover:bg-gradient-to-r ${primaryHover} hover:text-white ${primaryTextColor}`
              }`}
            >
              <span
                className={`text-lg transition-colors ${
                  isActive(nav.path)
                    ? `${primaryText}`
                    : `${secondaryText} group-hover:text-white`
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="flex-1">{nav.name}</span>
              )}
            </Link>
          ) : (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`flex items-center gap-3 w-full p-3 rounded-xl font-medium transition-all duration-200 font-sans ${
                openSubmenu?.type === menuType &&
                openSubmenu?.index === index
                  ? `bg-gradient-to-r ${primaryGradient} ${primaryText}`
                  : `hover:bg-gradient-to-r ${primaryHover} ${primaryTextColor}`
              }`}
            >
              {nav.icon}
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="flex-1">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              )}
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 h-screen flex flex-col border-r shadow-lg transition-all duration-300 z-50 
      ${primaryBg} ${primaryTextColor} font-sans ${
        isExpanded || isMobileOpen
          ? "w-[280px]"
          : isHovered
          ? "w-[280px]"
          : "w-[90px]"
      } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* === LOGO SECTION === */}
      <div
        className={`p-6 bg-gradient-to-r ${primaryGradient} text-white shadow-md flex items-center ${
          !isExpanded && !isHovered ? "justify-center" : "justify-start"
        }`}
      >
        <Link href="/recruiterDashboard" className="flex items-center gap-3">
          {isExpanded || isHovered || isMobileOpen ? (
            <h1 className="text-xl font-bold tracking-wide">
              Recruiter Dashboard
            </h1>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
          )}
        </Link>
      </div>

      {/* === NAVIGATION === */}
      <div
        className={`flex-1 overflow-y-auto p-5 ${secondaryBg} no-scrollbar`}
      >
        <h2
          className={`text-xs uppercase tracking-widest mb-3 font-semibold ${secondaryText}`}
        >
          {isExpanded || isHovered || isMobileOpen ? "Main Menu" : ""}
        </h2>
        {renderMenuItems(navItems, "main")}
      </div>
{/* 
      === FOOTER / WIDGET === */}
      {/* <div className={`p-4 border-t ${secondaryBg}`}>
        <SidebarWidget />
      </div> */}
    </aside>
  );
};

export default AppSidebar;
