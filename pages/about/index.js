import React from "react";
import Button from "@/Components/Button";
import styles from "./about.module.css";

export default function about() {
  return (
    <section className={styles.about}>
    <div>
      <Button link="/quiz">Next</Button>
    </div>
    </section>
  );
}