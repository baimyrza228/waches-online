let clock = ()=> {
    let date = new Date()
    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let month = ["jan","feb","mar","apr","may","jun","jul","Aug","sept","oct","nov","dec"]

    let time = "today is"+day+"-"+month[month_num]+" "+"hour- "+hours+":"+minutes+":"+seconds

    // console.log(time)

    let timer = document.getElementById('time_show').innerHTML=time
    
    setTimeout(() => {
        clock()
    }, 1000);
}

clock()
