"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import { cn } from "../../utils/cn";
import { useSidebar } from "./context";
import type { SidebarProps } from "./types";

const SIDEBAR_WIDTH_MOBILE = "18rem";

export function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
      className={cn(
        "bg-sidebar text-sidebar-foreground group/sidebar relative flex h-full flex-col transition-[width]",
        variant === "floating" &&
          "absolute inset-y-0 z-30 rounded-r-xl border-r shadow-xl",
        collapsible === "icon"
          ? "w-(--sidebar-width-icon) data-[state=expanded]:w-(--sidebar-width)"
          : "w-(--sidebar-width)",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
} 