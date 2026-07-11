"use client";

import { CalendarDays, Phone } from "lucide-react";
import BookButton from "@/components/BookButton";
import styles from "./StickyMobileCta.module.css";

export default function StickyMobileCta() {
  return (
    <aside className={styles.bar} aria-label="Quick contact options">
      <a href="tel:2192622711" aria-label="Call Now — R Complete Auto Care">
        <Phone aria-hidden="true" size={19} />
        Call Now
      </a>
      <BookButton className={styles.bookButton}>
        <CalendarDays aria-hidden="true" size={19} />
        Schedule Online
      </BookButton>
    </aside>
  );
}
