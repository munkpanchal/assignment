import React, { useState } from "react";
import Modal from "./Modal.jsx";

const JobCard = (job) => {
    let jobData = job.data;
    const [modal, setModal] = useState(false);
    return (
        <div className="job-card">
            <Modal openModal={modal} data={job.data} closeModal={() => setModal(false)} />
            <div className="job-card-wrapper">
                <small className="posted-date">⏳ Posted a day ago</small>
                <div className="job-header">
                    <img src={jobData?.logoUrl} className="logo" alt="logo" />
                    <div className="job-header-content">
                        <span className="company-name">{jobData.companyName ?? "RemoteStar"}</span>
                        <span className="job-name">{jobData.jobRole}</span>
                        <span className="job-location">{jobData?.location}</span>
                    </div>
                </div>
                <div className="job-payscale">
                    <p>
                        <strong>Estimated Salary:</strong> {jobData.minJdSalary}
                        {jobData.maxJdSalary && jobData.minJdSalary ? " - " : ""}
                        {jobData?.maxJdSalary} LPA
                        <span> ⚠️</span>
                    </p>
                </div>
                <div className="about">
                    <h2>About Company</h2>
                    <p>{jobData.jobDetailsFromCompany}</p>

                    <span className="show-more" onClick={() => setModal(true)}>
                        Show more
                    </span>
                </div>
                <div className="experience">
                    <p>Minimum Experience</p>
                    <span>
                        {jobData.maxExp || jobData.mixExp
                            ? `${jobData.mixExp ? jobData.mixExp : ""} ${
                                  jobData.mixExp && jobData.maxExp ? "-" : ""
                              }  ${jobData?.maxExp} `
                            : "0"}{" "}
                        years
                    </span>
                </div>
                <a href={jobData?.jdLink} target="_blank">
                    <button className="apply">⚡Easy Apply</button>
                </a>
            </div>
        </div>
    );
};

export default JobCard;
