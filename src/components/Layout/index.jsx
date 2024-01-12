import React, { useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import CustomCursor from "../CustomCursor";
const Computer = lazy(() => import("../Computer"));
import Header from "../Header";

export default function Layout({ headerVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header variant={headerVariant} />
      <Outlet />
      {/* <CustomCursor /> */}
      <Suspense fallback={<>Loading....</>}>
        <Computer />
      </Suspense>
    </>
  );
}
