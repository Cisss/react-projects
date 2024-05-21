import styling from "./SearchBar.module.css";
import { useContext } from "react";
import Context from "../context";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
    const { handleInputChange } = useContext(Context);
    const [SearchParams] = useSearchParams();

    return (
        <section className={styling.searchBar}>
            <h2 className={styling.title}>Search Jobs:</h2>
            <form>
                <input
                className={styling.input}
                id="jobName"
                type="text"
                value={SearchParams.get("name") || ""}
                onChange={handleInputChange}
                placeholder="e.g. Porto Letizia"
                >
                </input>
            </form>
        </section>
    );
};

export default SearchBar;