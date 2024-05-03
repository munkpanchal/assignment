import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const LocationFilter = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const top10Films = [
        { title: "The Shawshank Redemption", year: 1994 },
        { title: "The Godfather", year: 1972 },
        { title: "The Godfather: Part II", year: 1974 },
        { title: "The Dark Knight", year: 2008 },
        { title: "12 Angry Men", year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: "Pulp Fiction", year: 1994 },
        {
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
        },
        { title: "The Good, the Bad and the Ugly", year: 1966 },
        { title: "Fight Club", year: 1999 },
    ];
    const handleChange = (event, newSelectedValues) => {
        console.log(newSelectedValues);
    };

    return (
        <>
            <div className="filter-box">
                <Autocomplete
                    fullWidth={true}
                    multiple
                    onChange={handleChange}
                    options={top10Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top10Films[5]]}
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
        </>
    );
};

export default LocationFilter;
