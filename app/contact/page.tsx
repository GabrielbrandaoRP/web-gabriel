"use client";

import ContactCard from "@/components/shared/contact-card";
import ContactForm from "@/components/shared/contact-form";

import React from "react";

export default function Contact() {
  return (
    <div
      className="px-4 pt10 py-6 md:px-8
            lg:px-16
            xl:px-22
            2xl:px-60"
    >
      <section className="flex justify-between px-10 pt-23">
        <ContactCard />

        <ContactForm />
      </section>
    </div>
  );
}
