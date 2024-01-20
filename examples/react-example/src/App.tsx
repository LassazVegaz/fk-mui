import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { FMUITextField } from "fk-mui";

const genderOptions = ["Male", "Female"] as const;

const initialValues = {
  name: "",
  email: "",
  password: "",
  gender: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  gender: yup.string().oneOf(genderOptions, "Please select a gender"),
});

function App() {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        Formik 💜 MUI
      </Typography>

      <Box
        component="form"
        onSubmit={form.handleSubmit}
        mt={10}
        display="flex"
        flexDirection="column"
        gap={2}
        maxWidth={500}
        width="100%"
        mx="auto"
      >
        <FMUITextField form={form} name="name" label="Name" fullWidth />
        <FMUITextField form={form} name="email" label="Email" fullWidth />
        <FMUITextField
          form={form}
          name="password"
          label="Password"
          fullWidth
          type="password"
        />

        <FormControl fullWidth>
          <InputLabel id="gender-select-label">Age</InputLabel>
          <Select
            labelId="gender-select-label"
            label="Age"
            name="gender"
            value={form.values.gender}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={Boolean(form.touched.gender && form.errors.gender)}
          >
            {genderOptions.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </Select>
          {Boolean(form.touched.gender && form.errors.gender) && (
            <FormHelperText error>{form.errors.gender}</FormHelperText>
          )}
        </FormControl>

        <Button variant="outlined" type="submit" fullWidth sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default App;
