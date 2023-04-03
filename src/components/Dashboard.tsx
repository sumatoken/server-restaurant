import React, { useEffect, useState } from 'react'

interface Orders {
    id: number
    orders: {
        id: number
        plate: string
        tableId: number
    }[]
}

export default function Dashboard() {
    const [tables, setTables] = useState<Orders[]>([])
    useEffect(() => {
        fetch('api/orders')
        .then(res => res.json())
        .then(data => setTables(data))
        console.log(tables)
    }, [])
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Table
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Order
                        </th>
                       
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {tables!.map((el, key) =>
                           el.orders.map((el, key) => (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {el.tableId}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {el.plate}
                            </th>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                           ))
                        )}

                    </tbody>
            </table>
        </div>

    )
}
