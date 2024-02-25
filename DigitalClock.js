//Set clock to 24 hour format by default
let twelveHour = false;

//Get full date & time and display it
function displayTime(){
  const dateTime = new Date()
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  document.getElementById("clock").innerHTML = new Intl.DateTimeFormat('en-US', { timeStyle: 'long', hour12: twelveHour, }).format(dateTime);
  document.getElementById("date").innerHTML = weekday[dateTime.getDay()] + ", " + month[dateTime.getMonth()] + " " + dateTime.getDate() + " " + dateTime.getFullYear()
}

//Run function & set timer to update every second
displayTime()
setInterval(displayTime, 1000)
    
//Function to switch between 12 hour and 24 hour clock formats
document.getElementById("formatChangeBtn").addEventListener("click", ()=>{
  clearInterval(interval);
  twelveHour = !twelveHour;
  var interval = setInterval(displayTime, 1000) 
  var btnTxt = document.getElementById("formatChangeBtn")

  if(btnTxt.innerText == "Switch to Standard Time Format") {
    btnTxt.innerText = "Switch to Military Time Format"
  }
  else {
    btnTxt.innerText = "Switch to Standard Time Format"
  }

})