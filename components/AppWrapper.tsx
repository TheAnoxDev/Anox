"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const minimum = 1700;
    const finish = () => setLoading(false);
    const remaining = Math.max(0, minimum - (performance.now() - start));
    const timer = window.setTimeout(finish, remaining);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <div className={loading ? "pointer-events-none invisible" : "visible"} aria-hidden={loading}>
        {children}
      </div>
    </>
  );
}
