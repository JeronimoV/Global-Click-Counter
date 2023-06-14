"use client"

const { useState, useEffect } = require("react")
import {io} from "socket.io-client"
import styles from "./counter.module.css"

const Counter = () => {

    const [actualClicks, setActualClicks] = useState(null)
    const [actualSocket, setActualSocket] = useState(null)

    const getClicks = async() => {
        await fetch("https://global-click-counter-production.up.railway.app").then(response => response.json()).then(response => setActualClicks(response[0].amount))
    }

    useEffect(() => {
        getClicks()
    }, [])

    useEffect(() => {
        const socket = io("https://global-click-counter-production.up.railway.app")
        setActualSocket(socket)
        socket.on("newClick", (event) => {
            setActualClicks(event.amount)
        })
    }, [actualClicks])

    const sendClick = () => {
        actualSocket.emit("click")
    }

    if(actualClicks === null){
        return <p>Loading...</p>
    }

    return (
        <div className={styles.container}>
            <div className={styles.clickAmount}>
                <h3>{actualClicks}</h3>
            </div>
            <button onClick={sendClick}>Click Here</button>
        </div>
    )
}

export default Counter