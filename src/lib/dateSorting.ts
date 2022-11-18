import type { MonthData, YearData } from "../data/pictures";
import { Month } from "../data/pictures";
import type { EntryReturn } from "./sanity";

export const sortIntoYears = (entries: EntryReturn[]): YearData[] => {
  const years: YearData[] = [];
  let currentYear: YearData = {
    year: new Date(entries[0].date).getFullYear(),
    months: [],
  };
  let currentMonth: MonthData = {
    dates: [],
    month: Object.values(Month)[new Date(entries[0].date).getMonth()],
  };
  entries.forEach(entry => {
    const year = new Date(entry.date).getFullYear();
    const month = Object.values(Month)[new Date(entry.date).getMonth()];
    if (!currentYear || currentYear.year !== year) {
      currentYear.months.push(currentMonth);
      currentMonth = {
        month,
        dates: [],
      };
      if (currentYear) {
        years.push(currentYear);
      }
      currentYear = {
        year,
        months: [],
      };
    }
    if (!currentMonth || currentMonth.month !== month) {
      if (currentMonth) {
        currentYear.months.push(currentMonth);
      }
      currentMonth = {
        month,
        dates: [],
      };
    }
    currentMonth.dates.push(entry);
  });
  if (currentYear) {
    if (currentMonth) {
      currentYear.months.push(currentMonth);
    }
    years.push(currentYear);
  }
  return years;
};
