import React from "react";
import { DateRange } from "react-date-range";

interface childDatePickerProps {
  setDate: React.Dispatch<
    React.SetStateAction<{ startDate: Date; endDate: Date; key: string }[]>
  >;
  date: { startDate: Date; endDate: Date; key: string }[];
}

const DatePicker: React.FC<childDatePickerProps> = ({ setDate, date }) => {
  return (
    <DateRange
      months={2}
      ranges={date}
      direction="horizontal"
      onChange={(e) =>
        e.selection
          ? setDate([
              {
                startDate: e.selection.startDate || new Date(),
                endDate: e.selection.endDate || new Date(),
                key: "selection",
              },
            ])
          : setDate([])
      }
    />
  );
};

export default DatePicker;
