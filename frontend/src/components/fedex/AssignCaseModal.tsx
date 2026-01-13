import { Dialog, DialogTitle, DialogContent, MenuItem, Select, Button } from "@mui/material";
import { useState } from "react";
import { cases } from "../../data/cases";

export default function AssignCaseModal({ open, onClose, dca }: any) {
  const [selected, setSelected] = useState("");

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Assign Case to {dca.name}</DialogTitle>
      <DialogContent>
        <Select fullWidth value={selected} onChange={e => setSelected(e.target.value)}>
          {cases.map(c => (
            <MenuItem key={c.id} value={c.id}>{c.id} - {c.customer}</MenuItem>
          ))}
        </Select>

        <Button sx={{ mt: 2 }} variant="contained" onClick={onClose}>
          Assign
        </Button>
      </DialogContent>
    </Dialog>
  );
}
