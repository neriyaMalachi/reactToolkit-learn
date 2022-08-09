import React, { useEffect, useState } from 'react';
import { MoviseInput } from './MoviseInput';
import { MoviseList } from './MoviseList';
import axios from "axios";
import { sortBy } from "lodash"

const MoviseApi = () => {
    const [serch, setSerch] = useState("white");
    const [moviy_arr, setMoviy_arr] = useState([]);
    const [sortSelect, setSortSelect] = useState("Title");
   
    useEffect(() => {
        doSearchApi();
    }, [serch])
    const sortMovis = (_sort) => {
        let temp_ar = sortBy(moviy_arr, _sort)
        setMoviy_arr(temp_ar);
        setSortSelect(_sort)
    }
    const doSearchApi = async () => {
        let url = `http://www.omdbapi.com/?s=${serch}&apikey=10b2b943`
        // let resp = await fetch(url);
        // let data = await resp.json();
        let resp = await axios.get(url);
        // console.log("axios", resp);
        // let temp_arr = sortBy(resp.data.Search,sortSelect)
        setMoviy_arr(resp.data.Search)
    }
    return (
        <div>
            <MoviseInput sortMovis={sortMovis} setSerch={setSerch} />
            <MoviseList moviy_arr={moviy_arr} />
        </div>
    )
}
export default MoviseApi;
