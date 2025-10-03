'use client'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './data-calendar.css'

import { ptBR } from 'date-fns/locale';

import { Task } from "../types";
import { addMonths, format, getDay, parse, startOfWeek, subMonths } from 'date-fns';
import { useState } from 'react';
import { EventCard } from './event-card';
import { CustomToolbar } from './custom-toolbar';

const locales = {
  'pt-BR': ptBR
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

interface DataCalendarProps {
  data: Task[]
}

export function DataCalendar ({ data }: DataCalendarProps) {
  const [value, setValue] = useState(
    data.length > 0 ? new Date(data[0].dueDate) : new Date()
  )
  const events = data.map(task => ({
    start: new Date(task.dueDate),
    end: new Date(task.dueDate),
    title: task.name,
    project: task.project,
    assignee: task.assignee,
    status: task.status,
    id: task.id
  }))

  console.log({ events })

  const handleNavigate = (action: 'PREV' | 'NEXT' | 'TODAY') => {
    if (action === 'PREV') {
      setValue(subMonths(value, 1))
    } else if (action === 'NEXT') {
      setValue(addMonths(value, 1))
    } else if (action === 'TODAY') {
      setValue(new Date())
    }
  }

  return (
    <Calendar 
      localizer={localizer}
      date={value}
      events={events}
      views={['month']}
      defaultView='month'
      toolbar
      showAllEvents
      className='h-full'
      max={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      formats={{
        weekdayFormat: (date, culture, localizer) => localizer?.format(date, 'EEEE', culture) ?? ''
      }}
      components={{
        eventWrapper: ({ event }) => (
          <EventCard event={event} />
        ),
        toolbar: () => (
          <CustomToolbar date={value} onNavigate={handleNavigate} />
        )
      }}
    />
  );
}