import React, { ReactNode } from "react";
import styles from "../../src/styles/Dashboard.module.css";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboard}>
      <p>Ini layout tambahan di dalam dashboard</p>
      {children}
    </div>
  );
}
