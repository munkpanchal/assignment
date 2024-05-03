import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/slices/jobSlice.js";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const RoleFilter = () => {
    const state = useSelector((state) => state.jobReducer);
    const { data, filters } = state;
    const [selectedValues, setSelectedValues] = useState("");
    const dispatch = useDispatch();

    const extractUniqueCompanies = (data) => {
        const uniqueCompany = new Set(data.map((option) => option.jobRole));
        return Array.from(uniqueCompany, (word) => word.toLowerCase());
    };

    const handleChange = (event, newSelectedValues) => {
        console.log(newSelectedValues.props.value);
        const filteredData = data.filter((option) => {
            option.jobRole === newSelectedValues.props.value;
        });

        dispatch(updateFilter({ filterType: "role", value: newSelectedValues.props.value }));
        setSelectedValues(filteredData);
    };

    return (
        <>
            {data && (
                <div className="filter-box">
                    <FormControl
                        fullWidth={true}
                        size="small"
                        sx={{ minWidth: 150, width: "max-content", fontSize: "12px" }}
                    >
                        <InputLabel id="demo-simple-select-autowidth-label">Tech Stack</InputLabel>
                        <Select
                            size="small"
                            fullWidth={true}
                            onChange={handleChange}
                            labelId="demo-simple-select-autowidth-label-1"
                            id="demo-simple-select-autowidth"
                            autoWidth
                            label="Tech Stack"
                        >
                            <MenuItem value="" sx={{ fontSize: "14px" }}>
                                None
                            </MenuItem>
                            {extractUniqueCompanies(data)?.map((val, idx) => {
                                return (
                                    <MenuItem sx={{ fontSize: "14px" }} size="small" key={`${idx}`} value={val}>
                                        {val}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>
            )}
        </>
    );
};

export default RoleFilter;
