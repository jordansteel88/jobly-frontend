import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCards from "../jobs/JobCards";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyDetaisl() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return "Loading...";

  return (
      <div className="CompanyDetail">
        <p className="display-4 mt-5 text-primary text-uppercase">{company.name}</p>
        <hr className="mx-5"></hr>
        <p className="mb-5 font-italic">{company.description}</p>
        <JobCards jobs={company.jobs} />
      </div>
  );
}

export default CompanyDetail;