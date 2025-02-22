 import React, { useState } from "react";
 import { useDispatch } from "react-redux";
 import { addShip } from "../redux/actions/shipAction";

 import styling from "./Form.module.css";

 const From = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [type, setType] = useState("Container")

    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch(
            addShip({
                id: Date.now(),
                name: name,
                type: type
            })
        )

        resetForm();
    }

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "type":
                setType(value);
                break;
            default:
                return;
        }
    }

    const resetForm = () => {
        setName("");
        setType("Container");
    }

    return (
        <div>
            <form className={styling.wrapper} onSubmit={handleFormSubmit}>
                <label className={styling.label} htmlFor="name">Ship Name</label>
                <input className={styling.item}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
                autoComplete="off"
                >
                </input>
                <label className={styling.label} htmlFor="type">Ship type</label>
                <select className={styling.item} id="type" name="type" onChange={handleChange} value={type}>
                    <option value="Container">Container</option>
                    <option value="Bulk">Bulk</option>
                    <option value="Tanker">Tanker</option>
                </select>
                <button className={`button ${styling.button}`}>Add Ship</button>
            </form>
        </div>
    )
 };
 export default From;