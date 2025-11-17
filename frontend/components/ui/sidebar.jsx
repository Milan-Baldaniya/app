"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = ({ title, ...props }) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} title={title} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "min-h-[400px] py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 rounded-lg border border-neutral-200 dark:border-neutral-700",
        open ? "px-4" : "px-0",
        className
      )}
      initial={{ width: animate ? (open ? "300px" : "70px") : "300px" }}
      animate={{
        width: animate ? (open ? "300px" : "70px") : "300px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "visible" }}
      {...props}
    >
      <div className="w-full overflow-visible">
        {children}
      </div>
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  title,
  ...props
}) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex items-center justify-between z-20 w-full">
          {title && (
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              {title}
            </span>
          )}
          <Menu
            className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  onClick,
  ...props
}) => {
  const { open, animate } = useSidebar();
  const isSelected = className?.includes('bg-gradient-to-r') || className?.includes('from-amber-500');
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center group/sidebar cursor-pointer rounded-lg transition-colors w-full",
        open ? "justify-start gap-2" : "justify-center",
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-5 h-5">
        {link.icon}
      </div>
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
          width: animate ? (open ? "auto" : 0) : "auto",
        }}
        className={cn(
          "text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-nowrap overflow-hidden inline-block !p-0 !m-0",
          open ? "ml-2" : "ml-0",
          isSelected 
            ? "text-white" 
            : "text-neutral-700 dark:text-neutral-200"
        )}
      >
        {link.label}
      </motion.span>
    </div>
  );
};
