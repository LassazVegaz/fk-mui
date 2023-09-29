import React, { useMemo } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormikProps } from "formik";

export type FMUITextFieldProps<T> = TextFieldProps & {
	form: FormikProps<T>;
	name: string & keyof T;
};

const FMUITextField = <T,>(props: FMUITextFieldProps<T>) => {
	const { name, form, ...rest } = props;

	const error = useMemo(() => {
		const hasError = form.touched[name] && Boolean(form.errors[name]);
		return {
			hasError,
			message: hasError ? form.errors[name]!.toString() : null,
		};
	}, [form.errors, form.touched, name]);

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
