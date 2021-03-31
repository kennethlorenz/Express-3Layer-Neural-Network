import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ParametersForm = (props) => {
  const [state, setState] = useState({
    sepalLength: 0.0,
    sepalWidth: 0.0,
    petalLength: 0.0,
    petalWidth: 0.0,
    epoch: 0.0,
    lr: 0.0,
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
            name="sepalLength"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Sepal Width</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Sepal Width"
            name="sepalWidth"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Petal Length</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Petal Length"
            name="petalLength"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Petal Width</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Petal Width"
            name="petalWidth"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Epoch</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Epoch"
            name="epoch"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Learning Rate</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Learning Rate"
            name="lr"
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
