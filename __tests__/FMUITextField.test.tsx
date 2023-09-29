import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useFormik } from "formik";
import FMUITextField from "../src/FMUITextField/FMUITextField";

const TestOneComponent = () => {
	const form = useFormik({
		initialValues: {
			test: "",
		},
		validate: (values) => {
			const errors: Partial<typeof values> = {};

			if (values.test !== "test") {
				errors.test = "test is not valid";
			}

			return errors;
		},
		onSubmit: () => {},
	});

	return <FMUITextField name="test" form={form} label="Test Field" />;
};

describe("FMUITextField", () => {
	it("renders the component", () => {
		const { getByLabelText } = render(<TestOneComponent />);

		const inputElement = getByLabelText("Test Field");
		expect(inputElement).toBeDefined();
	});

	it("shows an error message when there is an error", () => {
		const { getByLabelText, getByText } = render(<TestOneComponent />);

		const inputElement = getByLabelText("Test Field");
		fireEvent.change(inputElement, { target: { value: "test" } });
		fireEvent.blur(inputElement);

		const errorMessage = getByText("test is not valid");
		expect(errorMessage).toBeDefined();
	});
});
