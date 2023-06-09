// function to add suffix to day of the month
const addDateSuffix = (date) => {
	let dateStr = date.toString();
  
	// get last char of date string
	const lastChar = dateStr.charAt(dateStr.length - 1);
  
	if (lastChar === "1" && dateStr !== "11") {
	  dateStr = `${dateStr}st`;
	} else if (lastChar === "2" && dateStr !== "12") {
	  dateStr = `${dateStr}nd`;
	} else if (lastChar === "3" && dateStr !== "13") {
	  dateStr = `${dateStr}rd`;
	} else {
	  dateStr = `${dateStr}th`;
	}
  
	return dateStr;
  };
  
  // main function to format a timestamp
  module.exports = (
	timestamp,
	{ monthLength = "short", dateSuffix = true } = {}
  ) => {
	let months;
  
	// check monthLength option and set months accordingly
	if (monthLength === "short") {
	  months = {
		0: "Jan",
		1: "Feb",
		2: "Mar",
		3: "Apr",
		4: "May",
		5: "Jun",
		6: "Jul",
		7: "Aug",
		8: "Sep",
		9: "Oct",
		10: "Nov",
		11: "Dec",
	  };
	} else {
	  months = {
		0: "January",
		1: "February",
		2: "March",
		3: "April",
		4: "May",
		5: "June",
		6: "July",
		7: "August",
		8: "September",
		9: "October",
		10: "November",
		11: "December",
	  };
	}
  
	// create a new date object using the provided timestamp
	const dateObj = new Date(timestamp);
	// get the formatted month string from the months object
	const formattedMonth = months[dateObj.getMonth()];
  
	let dayOfMonth;
  
	// check dateSuffix option and format day of the month accordingly
	if (dateSuffix) {
	  dayOfMonth = addDateSuffix(dateObj.getDate());
	} else {
	  dayOfMonth = dateObj.getDate();
	}
  
	// get the year from the date object
	const year = dateObj.getFullYear();
	let hour;
  
	// check if time is in 24-hour format and adjust if necessary
	if (dateObj.getHours > 12) {
	  hour = Math.floor(dateObj.getHours() / 2);
	} else {
	  hour = dateObj.getHours();
	}
  
	// if hour is 0, set it to 12 for 12:00 in the morning
	if (hour === 0) {
	  hour = 12;
	}
  
	// get minutes from the date object
	const minutes = dateObj.getMinutes();
  
	// set AM or PM time period
	let periodOfDay;
	if (dateObj.getHours() >= 12) {
	  periodOfDay = "pm";
	} else {
	  periodOfDay = "am";
	}
  
	// create formatted timestamp string and return it
	const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
	return formattedTimeStamp;
  };
  