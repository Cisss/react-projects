import styling from "./Loader.module.css";
import Header from "../LoaderHeader/LoaderHeader";

const Loader = () => {
    return (
        <>
            <Header />
            <section className={styling.wrapper}>
                <div className={styling.loadingAnimation}><div></div><div></div><div></div><div></div></div>
                <h1 className={styling.title}>Oempa Loempa's are building!</h1>
            </section>
        </>
    );
}

export default Loader;
