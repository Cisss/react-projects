import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeShip } from "../redux/actions/shipAction";
import Form from "../Form/Form";
import styling from "./ShipList.module.css";

const ShipList = () => {
    const ships = useSelector((state) => state.ships);
    const dispatch = useDispatch();

    const handleRemoveShip = (ship) => {
        dispatch(removeShip(ship))
    }

    return (
        <div className={styling.list}>
            <Form />
            <h2 className={styling.title}>Ships:</h2>
            <ul>
            {ships.map((ship) => (
                <li className={styling.item} key={ship.id}>
                    <h3><span>Name:</span> {ship.name}</h3>
                    <p>
                        <span>Type:</span> {ship.type}
                    </p>
                    <button className={`button ${styling.button}`} onClick={() => handleRemoveShip(ship)}>Remove</button>
                </li>
            ))}
            </ul>
        </div>
    )
};

export default ShipList;