setInterval(()=>{
    let today = new Date();
    let day = today.getDay()
    let month =today.getMonth()
    let year = today.getFullYear()
    let date = today.getDate()
    let hour =(today.getHours()<10?'0':'') +today.getHours()
    let miniut =(today.getMinutes()<10?'0':'') +today.getMinutes()
    let second = (today.getSeconds()<10?'0':'') +today.getSeconds()
    let daylist =["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
        daylist = daylist[day]
    let months = [
        "Jan", "Feb", "Mar", "April", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    months =months[month]
    let prepend =(hour>=12)?'PM':'AM'
    hour = (hour>=12)?hour-12:hour
    if(hour===0 && prepend==='PM'){
        if(miniut===0 && second===0){
            hour=12
            prepend = 'Noon'
        }else{
            hour=12
            prepend= 'PM'
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }
    document.getElementById('clock').innerText =`${hour} : ${miniut} : ${second} ${prepend}
    ${daylist} ${date} ${months} ${year}`
},1000)