import { Box, Button, Container, TextField, Typography } from "@mui/material";

function App() {
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
				mt={10}
				component="form"
				display="flex"
				flexDirection="column"
				gap={2}
				maxWidth={500}
				width="100%"
				mx="auto"
			>
				<TextField label="Name" fullWidth />
				<TextField label="Email" fullWidth />
				<TextField label="Password" fullWidth />

				<Button
					variant="outlined"
					type="submit"
					fullWidth
					sx={{ mt: 3 }}
				>
					Submit
				</Button>
			</Box>
		</Container>
	);
}

export default App;
