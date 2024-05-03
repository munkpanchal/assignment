import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/slices/jobSlice.js";

const CompanyFilter = () => {
    const state = useSelector((state) => state.jobReducer);
    const { data } = state;
    const [selectedValues, setSelectedValues] = useState([]);
    const dispatch = useDispatch();

    const extractUniqueCompanies = (data) => {
        const uniqueCompany = new Set(data.map((option) => option.companyName));
        return Array.from(uniqueCompany, (word) => word.toLowerCase());
    };

    const handleChange = (event, newSelectedValues) => {
        const filteredData = data.filter((option) => {
            newSelectedValues.includes(option.companyName);
        });
        dispatch(updateFilter({ filterType: "companyName", value: newSelectedValues }));
        setSelectedValues(filteredData);
    };

    return (
        <>
            {data && (
                <div className="filter-box">
                    <Autocomplete
                        fullWidth={true}
                        sx={{ minWidth: 150, width: "max-content", fontSize: "12px" }}
                        multiple
                        onChange={handleChange}
                        options={extractUniqueCompanies(data)}
                        getOptionLabel={(option) => `${option}`}
                        renderInput={(params) => (
                            <TextField
                                key={params.id}
                                {...params}
                                variant="standard"
                                label="Company Name"
                                placeholder="Company Name"
                            />
                        )}
                    />
                </div>
            )}
        </>
    );
};

export default CompanyFilter;
