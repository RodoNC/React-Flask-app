// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StudentForm from "./StudentFormUpdate";

// EditStudent Component
const EditStudent = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	id: "",
	score: "",
});
const {idd} = useParams()

//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:5000/students/update-student/" +
		idd,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:5000/students/update-student/"
		+ idd
	)
	.then((res) => {
		const { name, id, score } = res.data;
		setFormValues({ name, id, score });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
