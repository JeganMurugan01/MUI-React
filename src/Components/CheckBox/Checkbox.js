import React from "react";
import { useState } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox, FormControlLabel } from "@mui/material";
export const Checkdemo = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setChecked(e?.target?.checked);
        console.log(e?.target?.checked);
    };

    return (
        <>
            <FormControlLabel control={<Checkbox defaultChecked   icon={<BookmarkBorderIcon/> }/>} label="Option 1" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Option 2" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Option 3" />
            {/* <Checkbox  defaultChecked>label</Checkbox> */}
        </>
    );
};
