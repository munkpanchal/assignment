import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/slices/jobSlice.js";

const LocationFilter = () => {
    const state = useSelector((state) => state.jobReducer);
    const { data } = state;
    const [selectedValues, setSelectedValues] = useState([]);
    const dispatch = useDispatch();

    const extractUniqueLocations = (data) => {
        const uniqueLocations = new Set(data.map((option) => option.location));
        return Array.from(uniqueLocations);
    };

    const handleChange = (event, newSelectedValues) => {
        const filteredData = data.filter((option) => {
            newSelectedValues.includes(option.location);
        });
        dispatch(updateFilter({ filterType: "location", value: newSelectedValues }));
        setSelectedValues(filteredData);
    };

    return (
        <>
            {data && (
                <div className="filter-box">
                    <Autocomplete
                        fullWidth={true}
                        multiple
                        onChange={handleChange}
                        options={extractUniqueLocations(data)}
                        getOptionLabel={(option) => option}
                        sx={{ minWidth: 100, width: "max-content" }}
                        renderInput={(params) => (
                            <TextField
                                key={params.id}
                                {...params}
                                variant="standard"
                                label="Location"
                                placeholder="Location"
                            />
                        )}
                    />
                </div>
            )}
        </>
    );
};

export default LocationFilter;
