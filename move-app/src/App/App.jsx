import React, { Suspense, lazy, useEffect, useState, useMemo } from "react";
import houseData from "../data";
import Context from "../context";
import { Routes, Route } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// base components
import Navigation from '../Navigation/Navigation';
import Loader from "../Loader/Loader";

// page components
const SortByDate = lazy(() => import("../SortByDate/SortByDate.jsx"));
const JobList = lazy(() => import("../JobList/JobList.jsx"));
const JobSinglePage = lazy(()=> import("../JobSinglePage/JobSinglePage.jsx"));
const Counter = lazy(()=> import("../Counter/Counter.jsx"));
const Ships = lazy(()=> import("../ShipList/ShipList.jsx"));



const App = () => {
    const data = houseData;
    const [houses, setHouses] = useState(data);
    const [result, setResult] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    // update houses (manupulate json)
    const updatedHouses = useMemo(() => {
        // filter all houses that needs cleaning
        const dirtyHouses = data.filter((house) =>
        house.needsCleaning === true
      );
        // sort houses on date
        dirtyHouses.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        })

        return dirtyHouses;
    }, [data]);

    // if input changes select houses that match the input value
    const onChangeSelection = (params) => {
        const dirtyHouses = data.filter((house) =>
        house.needsCleaning === true
      );
        // filter houses for consistency of the input value
        const filterdHouses = dirtyHouses.filter((house) => {
            if (params.get("name")) {
                return house.name.toLowerCase().includes(params.get("name"))
            }
        return true
        });
        setHouses(filterdHouses);
    }

    const dates = useMemo(() => {
        // filter unique dates out of houses
        const date = [...new Set(updatedHouses.map(item => item.date))];
        const dates = date;

        return dates;
    }, [updatedHouses])

    const newArray = useMemo(() => {
        // make json with houses ordered on date
            setResult([...new Set(
                dates.map((item, index) => {
                const id = index;
                const date = item;
                const houseInfo = houses.filter((house) => house.date.includes(item));

                return (
                    {
                        id: id,
                        date: date,
                        housesInfo: houseInfo,
                    }
                )
            }))])
    }, [houses, dates])

    useEffect(() => {
        onChangeSelection(searchParams);

        // eslint-disable-next-line
    }, [data, searchParams, newArray]);

    const handleInputChange = (event) => {
        // get inputValue
        const inputValue = event.target.value;

        const formattedValue = inputValue.toLowerCase();

        // set search params
        setSearchParams({name: formattedValue})
    }

    const appData = {houses, dates, result, handleInputChange};

    return (
        <Context.Provider value={appData}>
            <Suspense fallback={<Loader />}>
            < Navigation />
                <Routes>
                    <Route path="/" element={<SortByDate />}></Route>
                    <Route path="/list" element={<JobList />}></Route>
                    <Route path="/item/:jobid" element={<JobSinglePage />}></Route>
                    <Route path="/count" element={<Counter />}></Route>
                    <Route path="/shiplist" element={<Ships />}></Route>

                </Routes>
            </Suspense>
        </Context.Provider>
    )
};

export default App;