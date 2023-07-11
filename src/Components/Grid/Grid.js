import React from "react";
import "./Style.css";
import { Grid, Paper } from "@mui/material";
export const Layout = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6} sx={{w:24}}></Grid>
                <Grid item md={6}></Grid>
                <Grid item md={6}></Grid>

                <button className="danger">click</button>
                <Grid item md={6}></Grid>
            </Grid>
        </>
    );
};
