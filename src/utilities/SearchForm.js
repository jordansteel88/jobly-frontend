import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import "../auth/Form.css"

const SearchForm = ({ search }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(query);
    // setQuery(search(query));
    // setQuery("");
  }

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  }

  return (
    <div className="SearchForm mt-5">
      <Form className="SearchForm-form" onSubmit={handleSubmit}>
        <Input
          className="SearchForm-searchbar my-3"
          name="query"
          placeholder="Enter a query..."
          value={query}
          onChange={handleChange} 
        />
        <Button className="SearchForm-btn mb-5" color="primary" >Search</Button>
      </Form>
    </div>
  )
}

export default SearchForm;