import React, { useContext, useEffect, useState} from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import "./JobCard.css"
import UserContext from "../auth/UserContext";

const JobCard = ({ id, title, salary, equity, companyName }) => {
  const { hasApplied, apply } = useContext(UserContext)
  const [applied, setApplied] = useState();

  useEffect(function updateApplied() {
    setApplied(hasApplied(id));
  }, [id, hasApplied]);

  const handleApply = async (evt) => {
    if (hasApplied(id)) return;
    apply(id);
    setApplied(true);
  }

  return (
    <div className="JobCard">
      <Card className="JobCard-card mb-3">
        <CardBody className="JobCard-body">
          <CardTitle tag="h4" className="card-title text-primary ">{title}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">{companyName}</CardSubtitle>
          <CardText>
              Salary: {salary} <br></br>
              Equity: {equity} <br></br>
          </CardText>
          <Button color="primary" className="mt-2" onClick={handleApply} disabled={applied}>
            {applied ? "Applied" : "Apply"}
          </Button>
        </CardBody>
      </Card>    
    </div>
  );
}

export default JobCard;