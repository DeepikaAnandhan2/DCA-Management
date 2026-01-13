import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Typography,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const rows = [
  {
    caseId: "CASE-001",
    invoice: "INV-2024-001234",
    customer: "Rajesh Kumar Enterprises",
    amount: "₹245,000",
    days: 45,
    priority: "High",
    status: "Open",
    region: "Chennai",
    sla: "2024-01-15",
  },
  {
    caseId: "CASE-002",
    invoice: "INV-2024-001235",
    customer: "Chennai Logistics Pvt Ltd",
    amount: "₹189,500",
    days: 32,
    priority: "Medium",
    status: "Approved",
    region: "Chennai",
    sla: "2024-01-20",
  },
  {
    caseId: "CASE-003",
    invoice: "INV-2024-001236",
    customer: "Madurai Textiles Co",
    amount: "₹567,000",
    days: 60,
    priority: "High",
    status: "Assigned",
    region: "Tamil Nadu",
    sla: "2024-01-10",
  },
  {
    caseId: "CASE-004",
    invoice: "INV-2024-001237",
    customer: "Coimbatore Manufacturing",
    amount: "₹125,000",
    days: 15,
    priority: "Low",
    status: "Open",
    region: "Tamil Nadu",
    sla: "2024-02-01",
  },
  {
    caseId: "CASE-005",
    invoice: "INV-2024-001238",
    customer: "Salem Traders",
    amount: "₹89,000",
    days: 28,
    priority: "Medium",
    status: "Closed",
    region: "Tamil Nadu",
    sla: "2024-01-25",
  },
  {
    caseId: "CASE-006",
    invoice: "INV-2024-001239",
    customer: "Vellore Industries",
    amount: "₹310,000",
    days: 55,
    priority: "High",
    status: "Assigned",
    region: "Tamil Nadu",
    sla: "2024-01-08",
  },
];

const priorityStyle = {
  High: { bgcolor: "#fdecea", color: "#d32f2f" },
  Medium: { bgcolor: "#fff4e5", color: "#ef6c00" },
  Low: { bgcolor: "#e8f5e9", color: "#2e7d32" },
};

const statusStyle = {
  Open: { bgcolor: "#e3f2fd", color: "#1565c0" },
  Approved: { bgcolor: "#e8f5e9", color: "#2e7d32" },
  Assigned: { bgcolor: "#ede7f6", color: "#6a1b9a" },
  Closed: { bgcolor: "#f5f5f5", color: "#424242" },
};

export default function CaseTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {[
              "CASE ID",
              "INVOICE ID",
              "CUSTOMER NAME",
              "AMOUNT DUE",
              "OVERDUE DAYS",
              "AI PRIORITY",
              "STATUS",
              "REGION",
              "SLA DUE DATE",
              "ACTIONS",
            ].map((h) => (
              <TableCell key={h}>
                <Typography fontSize={13} fontWeight={600} color="text.secondary">
                  {h}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.caseId}>
              <TableCell sx={{ color: "#5b2db3", fontWeight: 600 }}>
                {r.caseId}
              </TableCell>

              <TableCell>{r.invoice}</TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                {r.customer}
              </TableCell>

              <TableCell sx={{ fontWeight: 600 }}>
                {r.amount}
              </TableCell>

              <TableCell sx={{ color: r.days > 30 ? "red" : "inherit" }}>
                {r.days} days
              </TableCell>

              <TableCell>
                <Chip
                  label={r.priority}
                  size="small"
                  sx={priorityStyle[r.priority as keyof typeof priorityStyle]}
                />
              </TableCell>

              <TableCell>
                <Chip
                  label={r.status}
                  size="small"
                  sx={statusStyle[r.status as keyof typeof statusStyle]}
                />
              </TableCell>

              <TableCell>{r.region}</TableCell>
              <TableCell>{r.sla}</TableCell>

              <TableCell>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography p={2} fontSize={13} color="text.secondary">
        Showing 6 of 6 cases
      </Typography>
    </TableContainer>
  );
}
