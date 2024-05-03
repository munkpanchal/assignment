import React, { useState } from "react";

const JobCard = () => {
    return (
        <div className="job-card">
            <div className="job-card-wrapper">
                <small className="posted-date">⏳ Posted a day ago</small>
                <div className="job-header">
                    <img src="" className="logo" alt="logo" />
                    <div className="job-header-content">
                        <span className="company-name">Company name</span>
                        <span className="job-name">Job name</span>
                        <span className="job-location">Location</span>
                    </div>
                </div>
                <div className="job-payscale">
                    <p>
                        <strong>Estimated Salary:</strong> 10 - 20 LPA
                        <span> ⚠️</span>
                    </p>
                </div>
                <div className="about">
                    <h2>About Company</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate nam sunt! Sit, hic
                        illum eveniet, inventore nemo modi ratione, repudiandae fuga nisi natus voluptatibus.
                        Blanditiis, facere corrupti quidem distinctio eveniet ad obcaecati expedita dignissimos odio ut
                        nam vitae architecto id repellendus enim adipisci, omnis, minima placeat magni voluptas! Dolor
                        temporibus cumque rerum odio iure, facilis sit tempore corporis ducimus omnis recusandae dolores
                        quas quasi hic totam sequi quos obcaecati laboriosam impedit. Modi sapiente obcaecati, neque
                        quia reiciendis qui earum error, quasi sit voluptatibus explicabo nihil magnam laudantium id
                        eaque fugiat sunt ratione voluptatum tempore nostrum laborum minima blanditiis eius?
                    </p>

                    <span className="show-more">Show more</span>
                </div>
                <div className="experience">
                    <p>Minimum Experience</p>
                    <span>0 years</span>
                </div>
                <a href="#" target="_blank">
                    <button className="apply">⚡Easy Apply</button>
                </a>
            </div>
        </div>
    );
};

export default JobCard;
