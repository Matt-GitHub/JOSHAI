import "../App.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import { Dispatch } from "react";

interface IRoverProps {
  value: any;
  setValue: Dispatch<any>;
}

function DatePicker({ value, setValue }: IRoverProps) {
  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      const newDate = format(new Date(newValue), "yyyy/MM/dd");
      setValue(newDate);
    }
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Select Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DatePicker;
