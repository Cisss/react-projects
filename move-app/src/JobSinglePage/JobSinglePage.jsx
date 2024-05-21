import React, {useContext} from "react";
import Context from "../context"
import { useParams } from "react-router-dom";
import styling from "./JobSinglePage.module.css";
import { Link } from "react-router-dom";

const JobSinglePage = () => {
    const { jobid } = useParams();
    const { houses } = useContext(Context);
    const currentHouse = houses.find((house) =>
        house.id === Number(jobid)
      );

    return (
        <div className="content">
            <section className={styling.header}>
                <img className={styling.image} alt="job" src={require("../images/porto-letizia.jpeg")} width={400}/>
                <div className={styling.list} >
                    <h2 className={styling.text} key={currentHouse.id}>{currentHouse.name}</h2>
                    <p><strong>Stad:</strong> {currentHouse.location}</p>
                    <p><strong>Kamer:</strong> {currentHouse.room}</p>
                    <p><strong>Slaapkamers:</strong> {currentHouse.sleeps}</p>
                    <p><strong>Badkamers:</strong> {currentHouse.bathroom}</p>
                </div>
            </section>
            <section className={styling.wrapper}>
                <h2>Instructions:</h2>
                <p>{currentHouse.instructions}</p>
                <Link className="button" to="/list">Asign to me</Link>
            </section>
            </div>
    )
};

export default JobSinglePage;
