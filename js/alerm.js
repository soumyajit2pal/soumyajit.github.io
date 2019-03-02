function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    if(h==12)
    {
        session="PM"
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime,1000);
}
function popup()
{
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}
function hours()
{
    var hr=12;
    var select=document.getElementById("alrmhrs");
    for(i=1;i<=hr;i++)
    {
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
    minutes(); 
}
function minutes()
{
    var min=59;
    var select=document.getElementById("alrmmin");
    for(i=0;i<=min;i++)
    {
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
seconds();    
}
function seconds()
{
    var sec=59;
    var select=document.getElementById("alrmsec");

    for(i=0;i<=sec;i++)
    {
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
}
function addZero(time){
    return (time<10)?"0"+time:time;
}

function alarmset()
{
    var selectedhour=document.getElementById("alrmhrs").value;
    var selectedmin=document.getElementById("alrmmin").value;
    var selectedsec=document.getElementById("alrmsec").value;
    var selectedampm=document.getElementById("ampm").value;
    var alarmtime=addZero(selectedhour)+":"+addZero(selectedmin)+":"+addZero(selectedsec)+" "+selectedampm;
// console.log(alarmtime);
setInterval(function()
{
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session ="AM";
    
    if(h == 0){
        h = 12;
    }
    if(h==12)
    {
        session="PM"
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    if(alarmtime==time)
    {
        console.log("yes");
        popup();
    }
    else
    {
        console.log("no");
    }

},1000)
}
