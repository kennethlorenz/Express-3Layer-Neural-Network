import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ParametersForm = (props) => {
  const [state, setState] = useState({
    sepallength: 0.0,
    sepalwidth: 0.0,
    petallength: 0.0,
    petalwidth: 0.0,
    epoch: 100,
    lr: 0.06,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/results",
      state,
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>What do you want to test?</h1>
      <Form className="register-form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Sepal Length</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Sepal Length"
            name="sepallength"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Evaluate
        </Button>
      </Form>
    </div>
  );
};
export default ParametersForm;
