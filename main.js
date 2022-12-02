setInterval(() => {
    const clock = document.querySelector('.display');

    let time = new Date()
    let hr = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let day = 'AM'
    if (hr > 12) {
        day = 'PM'
        hr = hr - 12;
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    if (hr < 10) {
        hr = '0' + hr
    }

    if (min < 10) {
        min = '0' + min
    }

    clock.textContent = `${hr}:${min}:${sec} ${day}`
})