import { Box, Button, ButtonGroup, Container, Divider } from "@mui/material";

export const ButtonGrouping = () => {
    return (
        <>
            <Container sx={12} md={12} lg={12}>
            <Box>
                <ButtonGroup>
                    <Button variant="outlined" >Onclick</Button>
                    <Button variant="contained">Click </Button>
                    <Button>Click </Button>
                </ButtonGroup>
            </Box>
            <Divider/>
            </Container>
        </>
    );
};
