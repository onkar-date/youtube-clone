import moment from "moment";

const useTimePassed = (time) => {
  const publishTime = moment(time);
  const today = moment();

  const yearsPassed = Math.abs(publishTime.diff(today, "year"));
  today.add(yearsPassed, "years");
  const monthsPassed = Math.abs(publishTime.diff(today, "months"));
  today.add(monthsPassed, "months");
  const daysPassed = Math.abs(publishTime.diff(today, "days"));
  if (yearsPassed) {
    return `${yearsPassed} years ago`;
  } else if (monthsPassed) {
    return `${monthsPassed} months ago`;
  } else if (daysPassed) {
    return `${daysPassed} days ago`;
  } else {
    return `just now`;
  }
};

export default useTimePassed;
