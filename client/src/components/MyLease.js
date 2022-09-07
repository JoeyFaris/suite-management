import React, { useEffect, useState } from "react";

export default function MyLease() {
    const  [lease, setLease] = useState([])

    useEffect(() => {
        fetch('/leases')
        .then((res) => res.json())
        .then((data) => setLease(data))
    }, [])

console.log(lease[0].pdf)
    return (
        <div class="absolute align-start ml-72 pl-20 py-20 w-10/12 pr-20 h-full bg-gray-200">
        <div class="mb-10 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Your Lease:</div>
        <div>{lease[0].pdf}</div>
</div>
    )
}