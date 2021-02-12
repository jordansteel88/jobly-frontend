import React from "react";
import JobCard from "./JobCard";

const JobCards = ({ jobs }) => {
  return (
    <div className="JobCards">
      {jobs.map(job => (
         <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
         /> 
      ))}
    </div>
  );
}

export default JobCards;