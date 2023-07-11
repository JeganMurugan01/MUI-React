import { Avatar } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';import { deepOrange } from "@mui/material/colors";

export const avatar = () => {
    // <FolderIcon />
    //variant="square"
    return (
        <>
            <Avatar sx={{ bgcolor: deepOrange[500], mt: 5, ml: 3 }} alt="Aemy Sharp" src="/broken-image.jpg"   > <FolderIcon /></Avatar>
        </>
    );
};
