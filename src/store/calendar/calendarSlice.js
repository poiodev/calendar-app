import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
      title: 'Cumpleaños del Poio',
      notes: 'Hay que comprar el pastel',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#c98feb',
      user: {
        _id: '123',
        name: 'Laura'
      }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvents: null
    },
    reducers: {
         increment: (state, /* action */)  => { 
            state.counter += 1 ;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions; 