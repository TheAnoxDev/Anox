"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      {!loading && children}
    </>
  );
}