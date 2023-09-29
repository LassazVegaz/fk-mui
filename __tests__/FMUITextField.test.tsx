import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { useFormik } from "formik";
import FMUITextField from "../src/FMUITextField/FMUITextField";

const ERROR_MESSAGE = "test is not valid";
const LABEL = "Test Field";

const TestOneComponent = () => {
	const form = useFormik({
		initialValues: {
			test: "",
		},
		validate: (values) => {
			const errors: Partial<typeof values> = {};

			if (values.test !== "test") {
				errors.test = ERROR_MESSAGE;
			}

			return errors;
		},
		onSubmit: () => {},
	});

	return <FMUITextField name="test" form={form} label={LABEL} />;
};

describe("FMUITextField", () => {
	it("renders the component", () => {
		const { getByLabelText } = render(<TestOneComponent />);

		const inputElement = getByLabelText(LABEL);
		expect(inputElement).toBeDefined();
	});

	it("shows an error message when there is an error", () => {
		const { getByLabelText, getByText } = render(<TestOneComponent />);

		const inputElement = getByLabelText(LABEL);
		act(() => {
			fireEvent.change(inputElement, { target: { value: "not test" } });
			fireEvent.blur(inputElement);
		});

		const errorMessage = getByText(ERROR_MESSAGE);
		expect(errorMessage).toBeDefined();
	});
});
