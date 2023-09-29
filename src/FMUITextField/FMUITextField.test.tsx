import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Formik } from "formik";
import FMUITextField from "./FMUITextField";

describe("FMUITextField", () => {
	it("renders the component", () => {
		const { getByLabelText } = render(
			<Formik initialValues={{}} onSubmit={() => {}}>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<FMUITextField
						name="test"
						form={{
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
						}}
						label="Test Field"
					/>
				)}
			</Formik>
		);

		const inputElement = getByLabelText("Test Field");
		expect(inputElement).toBeInTheDocument();
	});

	it("updates the value when changed", () => {
		const { getByLabelText } = render(
			<Formik initialValues={{}} onSubmit={() => {}}>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<FMUITextField
						name="test"
						form={{
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
						}}
						label="Test Field"
					/>
				)}
			</Formik>
		);

		const inputElement = getByLabelText("Test Field");
		fireEvent.change(inputElement, { target: { value: "test value" } });
		expect(inputElement.value).toBe("test value");
	});

	it("shows an error message when there is an error", () => {
		const { getByText } = render(
			<Formik initialValues={{}} onSubmit={() => {}}>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<FMUITextField
						name="test"
						form={{
							values,
							errors: { test: "Test error" },
							touched,
							handleChange,
							handleBlur,
						}}
						label="Test Field"
					/>
				)}
			</Formik>
		);

		const errorMessage = getByText("Test error");
		expect(errorMessage).toBeInTheDocument();
	});
});
