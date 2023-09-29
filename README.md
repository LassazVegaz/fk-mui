# Typesafe Formik + MUI library

    [![npm version](https://badge.fury.io/js/formikmui.svg)](https://badge.fury.io/js/formikmui)
    [![npm downloads](https://img.shields.io/npm/dm/formikmui.svg)](https://www.npmjs.com/package/formikmui)
    [![npm bundle size](https://img.shields.io/bundlephobia/min/formikmui)](https://www.npmjs.com/package/formikmui)
    [![GitHub license](https://img.shields.io/github/license/abhishekraj272/formikmui)]

- [Formik](https://formik.org/) is a form library for React

- [MUI](https://mui.com/) is a library of React components

Both of these libraries are very popular and widely used in the React community. There are many places where we have to use both of these libraries together. This library is a collection of components that are built using both of these libraries (for now only TextField component is available 🙂).

## Installation

```bash
npm install formikmui
yarn add formikmui
pnpm add formikmui
```

## Available components

- FMUITextField - MUI TextField integrated with Formik

### FMUITextField

This is a wrapper around MUI TextField component integrated with Formik. It has all the props that are available in MUI TextField component with two more props:

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

If you want to add a new component, I love to hear from you. Please open an issue first to discuss what you want to add.
