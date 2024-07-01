"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.heading}>Site Auth Next Demo</h1>
        <p>
          This is a demo of using the <code>`site-auth-react`</code> package with
          Next.js.
        </p>
      </div>
    </main>
  );
}
