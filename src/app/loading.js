// import styles from "@/app/styles/common.module.css";
import styles from "./styles/loading.module.css"
const Loading = () => {
    return (
        // <section className={styles.loading_section}>
        //     <div className={styles.loading}>
        //     </div>
        // </section>
        // <section className={styles.lds_ripple_section}>
        //     <div className={styles.lds_ripple}><div></div><div></div></div>
        // </section>


        <section className={styles.loading_section}>
            <div className={styles.loading_spinner}><div class={styles.loading}>
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>
        </section>




    );
};

export default Loading;
