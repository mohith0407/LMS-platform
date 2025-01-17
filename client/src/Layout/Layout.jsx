import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function Layout({ children, hideBar, hideFooter }) {
  return (
    <>
      <main className="min-h-[100vh] bg-white dark:bg-base-200">
      

        {/* sidebar */}
        <Sidebar hideBar={hideBar} />

        {/* main content */}
        {children}

        {/* footer */}
        {!hideFooter && <Footer />}
      </main>
    </>
  );
}
