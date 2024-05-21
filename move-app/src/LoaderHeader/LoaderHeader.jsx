import styling from "./LoaderHeader.module.css";

const LoaderHeader = () => {
    return (
        <>
            <nav className={styling.navigation}>
                <span className={styling.logo}>
                    <div className={styling.logoItem}></div>
                </span>
                <span className={styling.title}>
                    <div className={styling.titleItem}></div>
                </span>
                <span className={styling.navButton}>
                    <button className={styling.button}> </button>
                </span>
            </nav>
            <section className={styling.searchBar}>
                <div className={styling.inputTitle}></div>
                <div>
                    <span
                    className={styling.input}
                    >
                    </span>
                </div>
            </section>
        </>
    )
};

export default LoaderHeader;