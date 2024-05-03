import React from "react";
import JobCard from "./JobCard.jsx";

const JobCards = () => {
    const job = {};
    return (
        <section className="container">
            <div className="job-cards">
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </section>
    );
};

export default JobCards;
