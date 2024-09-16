import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from '@mui/system';

// Create a styled component to override default styles
const StyledDateCalendar = styled(DateCalendar)({
  '& .MuiPickersCalendarHeader-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '10px 0', 
     
  },
  '& .MuiPickersCalendarHeader-label': {
    fontSize: '1.4rem', 
    fontWeight: 'bold', 
    padding: '10px 0', 
     
  },

  '& .MuiTypography-root': {
    padding: ' 10px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '5px 10px',
  },
  '& .MuiPickersCalendarHeader-weekDayLabel': {
    fontSize: '1.2rem',
    marginBottom: '20px', 
  },
  '& .MuiPickersDay-root': {
    padding: '10px',
    fontSize: '1.1rem',
    margin: '5px 10px', 
  },

  '&.MuiDateCalendar-root': {
    maxHeight: '500px', 
    height: '450px', 
    overflow: 'hidden', 
  },
 
  '& .MuiPaper-root': {
    maxHeight: '500px',
    height: '450px',
    overflow: 'hidden',
  },
});

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDateCalendar
        sx={{
          width: '450px',
        }}
      />
    </LocalizationProvider>
  );
}
