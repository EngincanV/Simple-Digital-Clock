function showTime(){
    //this four variable contains my time stuffs
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timePart = "AM";
    
    if(hour == 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        timePart = "PM";
    }
    /* I used the ternory operator for better readability instead of if statement 
     * Ternory Operator Usage => statement ? true : false
     */  
    hour = hour < 10 ? hour = "0" + hour : hour;
    minute = minute < 10 ? minute = "0" + minute : minute;
    second = second < 10 ? second = "0" + second : second;
    
    var time = hour + " : " + minute + " : " + second + " " + timePart;
    
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}
setInterval(showTime, 1000); //for non-stop time increase