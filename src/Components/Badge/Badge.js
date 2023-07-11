import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const badge = () => {
    // variant="dot"
    // anchorOrigin={{
    // vertical: 'top',
    // horizontal: 'right',
    //   }}
    var count=14

    return (
        <Badge
            badgeContent={count}
            sx={{ mt: 2, ml: 25 }}
            color={"secondary"}
            invisible={false}
            showZero
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
        >
            <MailIcon></MailIcon>
        </Badge>
    );
};
