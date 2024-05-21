// Import Styling
import styling from "./JobList.module.css";
import SearchBar from '../SearchBar/SearchBar';

// import job items
import JobItem from "../JobItem/JobItem";

const JobList = () => {
    return (
        <>
            < SearchBar />
            <section className="content">
                <h2 className={styling.title}>Jobs to Choose from:</h2>
                <JobItem />
            </section>
        </>
    );
};

export default JobList;