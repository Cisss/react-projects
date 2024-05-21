import styling from "./SortByDate.module.css";
import Context from "../context";
import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const SortByDate = () => {
    const { result } = useContext(Context);

    return (
      <>
        < SearchBar />
        <section className="content">
          {result.map((date) => (
            <ul className={styling.list} key={date.date}>
              <li className={styling.listItem} key={date.date}>{date.date}</li>
                  <ul className={styling.subList}>
                  {date.housesInfo.map((house) => (
                      <li className={styling.subListItem} key={house.id}>{house.name}</li>
                    ))}
                  </ul>
            </ul>
          ))}
          <Link to="/count">Counter!</Link>
          <Link to="/shiplist">Ships</Link>
        </section>
    </>
    )
};

export default SortByDate;