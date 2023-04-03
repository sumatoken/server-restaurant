import React, { useEffect, useState } from 'react'

export default function robot() {
    const body = {
        //intent: "getMenu",
        intent: "placeOrder",
        orderName: "Omlette"
    }
    const [response, setResponse] = useState()
    useEffect(() => {
        fetch('api/robot', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
        
    }, [])
  return (
    <div><ul>
        <span className='font-bold'>TODO list</span>
        <li>JSON to YAML</li>
        </ul></div>
  )
}
