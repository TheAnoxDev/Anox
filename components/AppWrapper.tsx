"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({
  children,
}: AppWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      <div
        className={
          loading
            ? "pointer-events-none invisible"
            : "visible"
        }
        aria-hidden={loading}
      >
        {children}
      </div>
    </>
  );
}
