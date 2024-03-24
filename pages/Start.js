import styles from "@/styles/Home.module.css";
import Button from "@/Components/Button";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <h1>Hi!</h1>
        <p>Did you know that the Earth is suffering from climate change?</p>
        <p>Let’s take a look at the problems caused by climate change:</p>
        <Button>Go</Button>
      <Footer/>
      </main>
    </>
  );
}