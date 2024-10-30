import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../calender.css";

const MyCalendar = () => {
  const [value, setValue] = useState(new Date());

  const dayName = value.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const monthName = value.toLocaleDateString("en-US", {
    month: "long",
  });

  const formattedDate = value.toLocaleDateString("en-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full">
      <h1 className="text-3xl nameDay">{dayName},</h1>
      <h1 className="md:text-xl lg:text-4xl font-semibold mb-4">{formattedDate}</h1>
      <Calendar
        onChange={""}
        value={value}
        className="xl:pt-4 w-[100%] bg-white rounded-md font-[Inter] font-semibold"
        tileClassName={({ date, view }) => "rounded-sm p-2 xl:p-4 "}
        nextLabel={null}
        prevLabel={null}
        next2Label={null}
        prev2Label={null}
        formatMonthYear={(locale, date) => (
          <span className="lg:text-xl font-bold text-slate-600">
            {date.toLocaleDateString(locale, { month: "long" })}
          </span>
        )}
      />
    </div>
  );
};

export default MyCalendar;
