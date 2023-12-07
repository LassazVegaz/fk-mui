# Typesafe Formik + MUI library

<div align="center">
    <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" alt="formik" width="200px" height="200px" />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://camo.githubusercontent.com/306dedb9426f1d93a981d305a0a18164932ece8dca4d5fd820b1d3c36625b218/68747470733a2f2f6d75692e636f6d2f7374617469632f6c6f676f2e737667" alt="mui" width="200px" height="200px" />
</div>
<br />
<br />

- [Formik](https://formik.org/) is a form library for React

- [MUI](https://mui.com/) is a React UI library

<br />

Both of these libraries are very popular and widely used in the React community. There are many places where we have to use both of these libraries together. This library (fk-mui) is a collection of components that are built using both of these libraries to reduce the boilerplate code and make the development process faster 🏎️ (for now only the TextField component is available 🙂).

## Installation

If you are using npm

```bash
npm install fk-mui
```

If you are using yarn

```bash
yarn add fk-mui
```

If you are using pnpm

```bash
pnpm add fk-mui
```

## Available components

- FMUITextField - MUI TextField integrated with Formik

### FMUITextField

This is a wrapper around the MUI TextField component integrated with Formik. It has all the props that are available in the MUI TextField component with two more props:

- name: string - name of the field
- form: Formk form

`name` should be a key of values of `form`. Seat belts are on 🚗. If you are using TypeScript, it will give you an error if you pass a name that is not in the form.  
This component will automatically populate `onChange`, `onBlur`, `value`, `error` and `helperText` for you. You don't have to do anything. Just pass the `name` and `form` props and you are good to go.

#### Example

```tsx
import { useFormik } from "formik";
import { FMUITextField } from "formikmui";

const MyForm = () => {
  const form = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <FMUITextField
        name="name"
        form={form}
        label="Name"
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </form>
  );
};
```

## SSR

These components do not support Server Side Rendering because they need client interactivity. For example, the `FMUITextField` component needs to show errors dynamically when user changes the text input. It needs JavaScript in client side to do that.  
These components are marked with `"use client"` and they will be rendered on client side.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you want to add a new component, I love to hear from you 💖. Please open an issue first to discuss what you want to add.
