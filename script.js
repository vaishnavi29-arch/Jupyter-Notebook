function updateClock() {

  let now = new Date();

  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  
  hours = hours % 12;

  
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

 
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let dayName = days[now.getDay()];


  let currentTime = hours + ":" + minutes + ":" + seconds+" " +ampm;

  let currentDate =
    date + "/" + month + "/" + year;


  document.getElementById("clock").innerHTML =
    currentTime;

  document.getElementById("date").innerHTML =
    currentDate;

  document.getElementById("day").innerHTML =
    dayName;
}

setInterval(updateClock, 1000);


updateClock();