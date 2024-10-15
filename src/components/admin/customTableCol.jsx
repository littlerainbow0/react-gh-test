// src/components/CustomTable.jsx
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
} from "@nextui-org/react";
import { capitalize } from "./utils";

const CustomTable = ({ data }) => {
    // NextUI: 需要用TableHeader指定列數，很嚴謹不設header做不出來
    return (
        <Table>
            <TableHeader>
                <TableColumn>常見問題</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((elem, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <strong>{elem.q}</strong><br />
                            {elem.a}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CustomTable;
