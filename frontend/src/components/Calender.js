import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());

    return (
        <div style={{
            padding: " 0px 80px"
        }}>
            
            <Calendar 
                onChange={onChange}
                value={value}
               
                
            />
        </div>
    );
}