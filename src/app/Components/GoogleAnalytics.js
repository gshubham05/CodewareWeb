"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as gtag from "@/app/lib/gtag";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return null;
}