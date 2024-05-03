import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/slices/jobSlice.js";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const OfficeModalFilter = () => {
    const state = useSelector((state) => state.jobReducer);
    const { data, filters } = state;
    const [selectedValues, setSelectedValues] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event, newSelectedValues) => {
        if (newSelectedValues.props.value === "remote") {
            dispatch(updateFilter({ filterType: "isRemote", value: true }));
        } else {
            if (newSelectedValues.props.value !== "") {
                dispatch(updateFilter({ filterType: "isRemote", value: false }));
            }
        }
        setSelectedValues(newSelectedValues.props.value);
    };

    return (
        <>
            {data && (
                <div className="filter-box">
                    <FormControl
                        fullWidth={true}
                        size="small"
                        sx={{ minWidth: 160, width: "max-content", fontSize: "12px" }}
                    >
                        <InputLabel id="demo-simple-select-autowidth-label">Remote/On-Site</InputLabel>
                        <Select
                            fullWidth={true}
                            onChange={handleChange}
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            autoWidth
                            label="Remote/On-Site"
                        >
                            <MenuItem value="" sx={{ fontSize: "14px" }} size="small">
                                None
                            </MenuItem>
                            <MenuItem sx={{ fontSize: "14px" }} size="small" value="remote">
                                Remote
                            </MenuItem>
                            <MenuItem sx={{ fontSize: "14px" }} size="small" value="onsite">
                                On Site
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            )}
        </>
    );
};

export default OfficeModalFilter;
