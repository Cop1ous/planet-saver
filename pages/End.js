import Header from "@/Components/Header";
import styles from "@/styles/Home.module.css";
import Footer from "@/Components/Footer";

export default function End() {
    return (
      <>
        <Header/>
        <main className={`${styles.main}`}>
        <h1>Thank you!</h1>
        <Button/>
        </main>
        <Footer/>
      </>
    );
  }
  