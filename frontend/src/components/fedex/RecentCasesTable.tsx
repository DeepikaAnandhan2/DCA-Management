import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
  Button,
} from "@mui/material";

const rows = [
  {
    id: "CASE-001",
    customer: "Rajesh Kumar Enterprises",
    amount: "₹245,000",
    days: 45,
    priority: "High",
    status: "Open",
    sla: "2024-01-15",
  },
  {
    id: "CASE-002",
    customer: "Chennai Logistics Pvt Ltd",
    amount: "₹189,500",
    days: 32,
    priority: "Medium",
    status: "Approved",
    sla: "2024-01-20",
  },
  {
    id: "CASE-003",
    customer: "Madurai Textiles Co",
    amount: "₹567,000",
    days: 60,
    priority: "High",
    status: "Assigned",
    sla: "2024-01-10",
  },
  {
    id: "CASE-004",
    customer: "Coimbatore Manufacturing",
    amount: "₹125,000",
    days: 15,
    priority: "Low",
    status: "Open",
    sla: "2024-02-01",
  },
  {
    id: "CASE-005",
    customer: "Salem Traders",
    amount: "₹89,000",
    days: 28,
    priority: "Medium",
    status: "Closed",
    sla: "2024-01-25",
  },
];

const priorityColor = {
  High: "error",
  Medium: "warning",
  Low: "success",
} as const;

const statusColor = {
  Open: "info",
  Approved: "success",
  Assigned: "secondary",
  Closed: "default",
} as const;

export default function RecentCasesTable() {
  return (
   <Paper
  elevation={0}
  sx={{
    mt: 3,
    width: "100%",
    borderRadius: 3,
    border: "1px solid #E5E7EB",
    backgroundColor: "#fff",
    overflow: "hidden",
  }}
>
      <Box
  px={3}
  py={2}
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  sx={{
    borderBottom: "1px solid #E5E7EB",
    background: "#FAFAFB",
  }}
>

        <Box>
          <Typography fontWeight={600}>
            Recent AI-Prioritized Cases
          </Typography>
          <Typography fontSize={13} color="text.secondary">
            Latest cases requiring attention
          </Typography>
        </Box>

        <Button variant="text" endIcon={<span>→</span>}>
          View All
        </Button>
      </Box>

      <TableContainer sx={{ overflowX: "auto" }}>

        <Table sx={{ width: "100%" }}>

        <TableHead sx={{ backgroundColor: "#F9FAFB" }}>
  <TableRow>
    {[
      "CASE ID",
      "CUSTOMER",
      "AMOUNT DUE",
      "OVERDUE DAYS",
      "AI PRIORITY",
      "STATUS",
      "SLA DUE",
    ].map((h) => (
      <TableCell
        key={h}
        sx={{
          fontSize: "12px",
          fontWeight: 700,
          color: "#6B7280",
          letterSpacing: "0.04em",
        }}
      >
        {h}
      </TableCell>
    ))}
  </TableRow>
</TableHead>


          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell sx={{ color: "#5b2db3", fontWeight: 600 }}>
                  {r.id}
                </TableCell>
                <TableCell>{r.customer}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{r.amount}</TableCell>

                <TableCell sx={{ color: r.days > 30 ? "red" : "inherit" }}>
                  {r.days} days
                </TableCell>

                <TableCell>
                  <Chip
                    label={r.priority}
                    color={priorityColor[r.priority]}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={r.status}
                    color={statusColor[r.status]}
                    size="small"
                    variant="soft"
                  />
                </TableCell>

                <TableCell>{r.sla}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
