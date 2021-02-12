import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./CompanyCard.css"
// import { Link } from "react-router-dom";
// import "./Homepage.css";
// import UserContext from "../auth/UserContext";

const CompanyCard = ({ name, handle, description, logoUrl }) => {
  return (
    <Link to={`/companies/${handle}`}>
      <div className="CompanyCard">
        <Card className="CompanyCard-card mb-3">
          {/* <CardImg top width="100%" 
                   src={logoUrl ? {logoUrl} : 'https://picsum.photos/50'} 
                   alt={name} /> */}
          <CardBody className="CompanyCard-body">
            <CardTitle tag="h2" className="card-title">
            {/* <Media left href="#">
              <Media object src="https://picsum.photos/50" alt="Generic placeholder image" />
            </Media> */}
              {name}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
            {/* <CardText tag="p">
              {description}
            </CardText> */}
          </CardBody>
        </Card>    
      </div>
    </Link>

  );}

export default CompanyCard;