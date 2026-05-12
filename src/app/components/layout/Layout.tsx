import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "../shared/FloatingCTA";
import WhatsAppWidget from "../shared/WhatsAppWidget";
import CallbackWidget from "../shared/CallbackWidget";
import SchemaOrg from "../seo/SchemaOrg";
import ScrollToTop from "./ScrollToTop";
import GoogleReviewButton from "../shared/GoogleReviewButton";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <GoogleReviewButton />
      <FloatingCTA />
      <WhatsAppWidget />
      <CallbackWidget />
    </div>
  );
}