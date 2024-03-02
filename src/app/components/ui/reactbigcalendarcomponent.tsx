"use client"
import React, { Children, useMemo, useState, useCallback } from 'react'
import { Calendar as BigCalendar, Views, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'
import myEventsList from './reactbigcalendarpartials/events'
const djLocalizer = dayjsLocalizer(dayjs)

dayjs.extend(timezone)


const ColoredDateCellWrapper = ({ children }: { children: React.ReactElement<any, string | React.JSXElementConstructor<any>> }) =>
    React.cloneElement(Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })


type IDateRange = Date[] | { start: Date, end: Date }

function Reactbigcalendarcomponent() {
    const [myEvents, setEvents] = useState(myEventsList)
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Event name')
            if (title) {
                setEvents((prev) => [...prev, { start, end, title }])
            }
        },
        [setEvents]
    )

    const handleSelectEvent = useCallback(
        (event) => window.alert(event.title),
        [])

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2015, 3, 12),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    )

    return (
        <div>
            <div className="height600">
                <BigCalendar
                    defaultDate={defaultDate}
                    defaultView={Views.WEEK}
                    events={myEvents}
                    date={currentDate}
                    localizer={djLocalizer}
                    onSelectEvent={handleSelectEvent}
                    onSelectSlot={handleSelectSlot}
                    selectable
                    onRangeChange={(date) => setCurrentDate(date)}
                    scrollToTime={scrollToTime}
                />
            </div>
        </div>
    )
}

export default Reactbigcalendarcomponent