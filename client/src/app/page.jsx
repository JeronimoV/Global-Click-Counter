import Counter from "@/components/counter"
import styles from "./home.module.css"
const home = () => {
    return(
        <div className={styles.container}>
            <h1>Global Click Counter</h1>
            <h3 className={styles.title}>Total Clicks</h3>
            <Counter/>
        </div>
    )
}

export default home