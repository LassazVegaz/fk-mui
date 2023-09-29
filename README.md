# Typesafe Formik + MUI library

<div align="center">
    <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" alt="formik" width="200px" height="200px" />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://camo.githubusercontent.com/306dedb9426f1d93a981d305a0a18164932ece8dca4d5fd820b1d3c36625b218/68747470733a2f2f6d75692e636f6d2f7374617469632f6c6f676f2e737667" alt="mui" width="200px" height="200px" />    
</div>

- [Formik](https://formik.org/) is a form library for React

- [MUI](https://mui.com/) is a library of React components

Both of these libraries are very popular and widely used in the React community. There are many places where we have to use both of these libraries together. This library is a collection of components that are built using both of these libraries (for now only the TextField component is available 🙂).

## Installation

```bash
npm install formikmui
yarn add formikmui
pnpm add formikmui
```

## Available components

- FMUITextField - MUI TextField integrated with Formik

### FMUITextField

This is a wrapper around the MUI TextField component integrated with Formik. It has all the props that are available in the MUI TextField component with two more props:

- name: string - name of the field
- form: Formk form

`name` should be a key of values of `form`

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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you want to add a new component, I love to hear from you 💖. Please open an issue first to discuss what you want to add.
