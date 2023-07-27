import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, geoApiUrl } from "../Api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState("");

    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    async function loadOptions(inputData) {
        try {
            const response = await fetch(`${geoApiUrl}/adminDivisions?minPopulation=10000&namePrefix=${inputData}`, geoApiOptions);
            const result = await response.json();
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} , ${city.country}, ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;