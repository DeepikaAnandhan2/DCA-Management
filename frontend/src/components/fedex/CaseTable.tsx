import { cases } from "../../data/cases";
import { Table, TableHead, TableRow, TableCell, TableBody, Chip } from "@mui/material";

export default function CaseTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Case ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Priority</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {cases.map(c => (
          <TableRow key={c.id}>
            <TableCell>{c.id}</TableCell>
            <TableCell>{c.customer}</TableCell>
            <TableCell>₹{c.amount.toLocaleString()}</TableCell>
            <TableCell>
              <Chip label={c.priority} color={c.priority==="High"?"error":c.priority==="Medium"?"warning":"success"}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
