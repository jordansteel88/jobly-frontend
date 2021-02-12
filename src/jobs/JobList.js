import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCards from "./JobCards";
import SearchForm from "../utilities/SearchForm";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  const search = async (title) => {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  useEffect(function getJobs() {
    search();
  }, []);

  if (!jobs) return "Loading..."

  return (
    <div className="JobList">
      <SearchForm search={search} />
      {jobs.length ?
       (
         <div className="JobList-list">
           <JobCards jobs={jobs}/>
         </div>
       ) : (
         <h3>No results, try adjusting your query.</h3>
       )}
    </div>
  );
}

export default JobList;