import React, { Fragment, useEffect, useState } from "react";
import JobCard from "./JobCard.jsx";
import { updateJobs } from "../redux/slices/jobSlice.js";
import { useDispatch, useSelector } from "react-redux";

const JobCards = () => {
    const state = useSelector((state) => state.jobReducer);
    const { data, pending, filters } = state;
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch();

    let locations = data?.map((val) => val.location.toLowerCase());
    locations = new Set(locations);
    locations = [...locations];
    const applyFilters = (job) => {
        if (filters.location.length > 0 && !filters.location.includes(job.location.toLowerCase())) {
            return false;
        }

        if (filters.isRemote) {
            if (job.location !== "remote") {
                return false;
            } else {
                return true;
            }
        }
        if (!filters.isRemote) {
            if (job.location === "remote") {
                return false;
            }
        }
        if (filters.minExperience && job.minExp < Number(filters.minExperience)) {
            return false;
        }

        return true;
    };

    const filteredData = data.filter(applyFilters);

    useEffect(() => {
        dispatch(updateJobs(offset));
    }, [offset]);

    return (
        <section className="container">
            <div className="job-cards">
                {filteredData?.map((job, idx) => (
                    <Fragment key={idx}>
                        <JobCard data={job} />
                    </Fragment>
                ))}
            </div>
            {pending && "Loading.."}
        </section>
    );
};

export default JobCards;
