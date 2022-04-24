import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Rquired"),
	id: Yup.number()
	.positive("Invalid id number")
	.integer("Invalid id number")
	.required("Rquired"),
	score: Yup.number()
	.positive("Invalid score")
	.integer("Invalid score")
	.required("Rquired"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<b> name </b>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<b> id </b>
			<Field name="id" type="number"
				className="form-control" />
			<ErrorMessage
			name="id"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<b> score </b>
			<Field name="score" type="number"
				className="form-control" />
			<ErrorMessage
			name="score"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
