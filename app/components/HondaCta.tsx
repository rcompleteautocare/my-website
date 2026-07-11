import { CalendarDays, Phone } from "lucide-react";
import BookButton from "@/components/BookButton";
import styles from "../honda.module.css";

export default function HondaCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? styles.ctaCompact : styles.ctaPanel}>
      {!compact && <h2>Complete diagnostics. Complete repairs.</h2>}
      <p>Tell us what your Honda is doing, and we’ll start with the right inspection.</p>
      <div className={styles.ctaActions}>
        <BookButton className={styles.primaryCta}>
          <CalendarDays aria-hidden="true" size={19} /> Schedule Honda Service
        </BookButton>
        <a className={styles.secondaryCta} href="tel:2192622711">
          <Phone aria-hidden="true" size={19} /> Call for Honda Diagnostics
        </a>
      </div>
    </div>
  );
}
