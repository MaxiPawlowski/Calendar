import { getHours, getMinutes } from 'date-fns';

export const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September", 
  "October",
  "November",
  "December"
];

export const compareDates = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth();

export const daysInMonth = ({ month, year }) => new Date(year, month, 0).getDate();

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const dateToCalendar = date => ({
  year: date.getFullYear(),
  month: date.getMonth()+1,
})

export const parseTime = date => {
  const minutes = getMinutes(date).toString();
  const hours = getHours(date).toString();
  return `${hours.length === 1 ? '0' + hours : hours}:${minutes.length === 1 ? '0' + minutes : minutes}`;
}

export const firstDateOfCalendar = date => new Date(`${date.month}/1/${date.year}`)
export const lastDateOfCalendar = date => new Date(`${date.month}/${daysInMonth(date)}/${date.year}`)