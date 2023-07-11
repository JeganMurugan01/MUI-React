import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Table from "@mui/material/Table"
export const TableList =()=>{

    return (
        <>
        <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            S.No
                        </TableCell>
                        <TableCell>
                            First Name
                        </TableCell>
                        <TableCell>
                            Second Name
                        </TableCell>
                        <TableCell>
                            gender
                        </TableCell>
                        <TableCell>
                            City Name
                        </TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>system</TableCell>
                        <TableCell>male</TableCell>
                        <TableCell>Chennai</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Management</TableCell>
                        <TableCell>system</TableCell>
                        <TableCell>male</TableCell>
                        <TableCell>Chennai</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>QA</TableCell>
                        <TableCell>checking</TableCell>
                        <TableCell>fmale</TableCell>
                        <TableCell>Chennai</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Super</TableCell>
                        <TableCell>admin</TableCell>
                        <TableCell>male</TableCell>
                        <TableCell>Chennai</TableCell>
                    </TableRow>
                </TableBody>
        </Table>
        </>
    )
}