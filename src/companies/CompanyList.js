import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../utilities/SearchForm";
import "./CompanyList.css";


const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  const search = async (name) => {
    let companies = await JoblyApi.getCompanies(name); 
    setCompanies(companies); 
  }

  useEffect(function loadCompanies() {
    search();
  }, []);

  if (!companies) return "Loading..."

  return (
    <div className="CompanyList">
      <SearchForm search={search} />
      {companies.length ?
       (
         <div className="CompanyList-list">
           {companies.map(company => (
             <CompanyCard
                key={company.handle}
                name={company.name}
                handle={company.handle}
                description={company.description}
                logoUrl={company.logoUrl}
             />  
           ))}
         </div>
       ) : (
         <h3>No results, try adjusting your query.</h3>
       )}
    </div>
  );
}

export default CompanyList;