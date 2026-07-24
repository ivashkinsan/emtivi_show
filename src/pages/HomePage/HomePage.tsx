import styles from "./HomePage.module.css"
import TV from "../../components/TV/TV.tsx"; // Updated path

const HomePage =() =>{
    return <section className={styles.home}>
        <TV />
    </section>
}
export default HomePage;
