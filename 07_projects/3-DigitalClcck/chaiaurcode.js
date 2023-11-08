document.getElementById('clock');
// document.querySelector('#clock')

// To set Interval
setInterval(function (){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)