import styling from "./JobItem.module.css";
import Context from "../context";
import { useContext } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const JobItem = () => {
    const { houses } = useContext(Context);

    return (
        <div className={styling.wrapper}>
            {houses.map((item) => (
                <Link to={`/item/${item.id}`} className={styling.listItem} key={item.id}>
                    <figure className={styling.houseFigure}>
                        <img alt="job" className={styling.houseImage} src={require("../images/porto-letizia.jpeg")} width={100}/>
                    </figure>
                    <div className={styling.houseDescription}>
                        <h2 className={styling.listTitle}>{item.name}</h2>
                            <span className={styling.span}>{item.guests}</span><span className={styling.span}>{item.location}</span><span className={styling.span}>{item.room}</span><span className={styling.span}>{format(item.date, 'dd-MM-yyyy HH:mm')}</span>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default JobItem;