import { useState } from 'react'
import happyCanImage from '../assets/happycanday.jpg'
export default function HappyCanDay() {
    const [countdown, setCountdown] = useState("");
    let happyCanDate = new Date("Aug 31, 2024 00:00:00");
    let time = happyCanDate.getTime()
    const now = new Date().getTime();
    let distance = time - now;
    //change to next year if happy can day has passed
    while (distance < 0) {
        let addYear = happyCanDate.getFullYear()
        let date = addYear + 1
        happyCanDate.setFullYear(date)
        time = happyCanDate.getTime()
        distance = time - now;
    }

    setInterval(function(){
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

    }, 1000)

    return <>
        <h1>Countdown to Happy Can Day!</h1>
        <img src={happyCanImage} className="logo" alt="Happy Can Day!" />
        <h3>{countdown}</h3>
    </>
}
