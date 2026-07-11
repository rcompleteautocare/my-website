import Link from "next/link";
import styles from "../honda.module.css";

export default function HondaBreadcrumbs({ current }: { current: string }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/honda-repair-crown-point-in">Honda Repair</Link></li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
