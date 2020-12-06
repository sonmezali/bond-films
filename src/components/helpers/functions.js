//converting original date format to 'yyyy-MM-dd
export const formatDate = (date) => {
  let day = date.getDate() + "";
  let month = date.getMonth() + 1 + "";
  let year = date.getFullYear() + "";

  const checkZero = (data) => {
    if (data.length === 1) {
      data = "0" + data;
    }
    return data;
  };
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);

  return `${year}-${month}-${day}`;
};

//converting original date format to "dd Month yyyy"
export const formatDateToString = (date) => {
  let monthNames = [
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
    "December",
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let monthName = monthNames[monthIndex];
  let year = date.getFullYear();

  return `${day} ${monthName} ${year}`;
};

// changing date format which comes from date-picker
export const handleOnChangeDate = (date, formatMethod, properState) => {
  const value = date.target.valueAsDate;
  const formattedDate = formatMethod(value);
  properState(formattedDate);
};

//navigation page to expected path
export const handlePushHistory = (path, history) => {
  history.push(path);
};


