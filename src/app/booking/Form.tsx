"use client";
// use client because datepicker uses web browser APIs
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";

/*
ใช้ Form component ทั้งจาก HTML element ด้วย Tailwind CSS Styling และ MUI ในการสร้าง
แบบฟอร์มส าหรับการจองวัคซีน ประกอบด้วย
- ชื่อ และ นามสกุล
- รหัสประจ าตัวประชาชน
- โรงพยาบาล โดยเลือกจาก 3 ตัวเลือก Chulalongkorn Hospital, Rajavithi Hospital, Thammasat
University Hospital
- วันที่ต้องการรับวัคซีน
 */
const Form = () => {
  const [hospital, setHospital] = useState("");
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-4">
        <FormControl fullWidth>
          <TextField required label="ชื่อจริง" id="outlined-required" />
        </FormControl>
        <FormControl fullWidth>
          <TextField required id="outlined-required" label="บัตรประชาชน" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="hospital-label">เลือกโรงพยาบาล</InputLabel>
          <Select
            labelId="hospital-label"
            name="hospital"
            id="hospital-selector"
            label="กรุณาเลือกโรงพยาบาล"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <MenuItem value="Hospital-Chula"> โรงพยาบาลจุฬาลงกรณ์ </MenuItem>
            <MenuItem value="Hospital-Rajavithi"> โรงพยาบาลราชวิถี </MenuItem>
            <MenuItem value="Hospital-Thammasat">โรงพยาบาลธรรมศาสตร์</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="วันที่ต้องการรับวัคซีน" format="DD.MM.YYYY" />
          </LocalizationProvider>
        </FormControl>

        <Button variant="contained" color="primary">
          ยืนยันการจอง
        </Button>
      </form>
    </div>
  );
};

export default Form;
