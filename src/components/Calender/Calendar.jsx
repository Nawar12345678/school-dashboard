import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
export default function DateCalendarValue({ calenderBackgColor, buttonBackgColor ,borderStyle, selectedDateColor }) {
  const [value, setValue] = React.useState(dayjs('2023-10-11'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  sx={{
        '& .MuiDateCalendar-root': { bgcolor: calenderBackgColor },
        '& .MuiTouchRipple-root ': {display: 'none'},
        '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {color: selectedDateColor, bgcolor: buttonBackgColor},
        '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected:focus': {color: selectedDateColor},
        '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected:hover': {color: selectedDateColor},
        "& .MuiPickersDay-root.Mui-selected": {
            bgcolor: buttonBackgColor,
            border: borderStyle,
        },
      }} components={['DateCalendar']}>
        <DemoItem>
          <DateCalendar sx={{}} value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}