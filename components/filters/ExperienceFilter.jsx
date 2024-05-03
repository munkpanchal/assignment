import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter, updateLocation } from "../../redux/slices/jobSlice.js";

const ExperienceFilter = () => {
    const state = useSelector((state) => state.jobReducer);
    const { data } = state;
    const [selectedValues, setSelectedValues] = useState([]);
    const dispatch = useDispatch();

    const extractUniqueExperience = (data) => {
        const uniqueLocations = new Set(data.map((option) => option.minExp));
        return Array.from(uniqueLocations).sort((a, b) => a - b);
    };

    const handleChange = (event, newSelectedValues) => {
        const filteredData = data.filter((option) => {
            option.minExp >= newSelectedValues;
        });

        dispatch(updateFilter({ filterType: "minExperience", value: `${newSelectedValues}` }));
        setSelectedValues(filteredData);
    };

    return (
        <>
            {data && (
                <div className="filter-box">
                    <Autocomplete
                        size="small"
                        fullWidth={true}
                        multiple
                        onChange={handleChange}
                        options={extractUniqueExperience(data)}
                        getOptionLabel={(option) => option}
                        sx={{ minWidth: 150, width: "max-content", fontSize: "12px" }}
                        renderInput={(params) => (
                            <TextField
                                key={params.id}
                                {...params}
                                variant="standard"
                                label="Minimum Experience"
                                placeholder="Experience"
                            />
                        )}
                    />
                </div>
            )}
        </>
    );
};

export default ExperienceFilter;
