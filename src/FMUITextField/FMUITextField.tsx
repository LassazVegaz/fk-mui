import { useEffect, useMemo } from "react";
import { TextField, type TextFieldProps } from "@mui/material";
import { type FormikProps } from "formik";

/**
 * Props of `FMUITextField`
 * @template T Type of formik form values
 */
export type FMUITextFieldProps<T> = TextFieldProps & {
	/** Formik form */
	form: FormikProps<T>;
	/** Name of the field. This should be a key from form values */
	name: string & keyof T;
};

/**
 * MUI TextField with Formik integration. `name` and `form` are required.
 */
const FMUITextField = <T,>(props: FMUITextFieldProps<T>) => {
	const { name, form, ...rest } = props;

	const error = useMemo(() => {
		const hasError = form.touched[name] && Boolean(form.errors[name]);
		return {
			hasError,
			message: hasError ? form.errors[name]!.toString() : null,
		};
	}, [form.errors, form.touched, name]);

	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<TextField
			name={name}
			onChange={form.handleChange}
			onBlur={form.handleBlur}
			value={form.values[name]}
			error={error.hasError}
			helperText={error.message}
			{...rest}
		/>
	);
};

export default FMUITextField;
