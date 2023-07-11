import { Box, Button, Container, TextField } from "@mui/material";

export const Text = () => {
    return (
        <>
            <Container >
                <Box sx={{ ms: 2, mt: 3 }}>
                    <TextField error label="Email" placeholder="Please enter Email id" variant="filled" />
                </Box>
                <Button variant="contained" sx={{ mt: 2 }}>
                    Click
                </Button>
            </Container>
        </>
    );
};
