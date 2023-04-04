import { trpc } from '@/utils/trpc'
import React, { useEffect, useState } from 'react'
import Table from './Table'

export default function OrdersManagement() {
    const tables = trpc.tables.getAllOrders.useQuery()
    return (
        <>
            {
                tables.data && tables.data.map((table, key) => (
                    <div className="flex flex-col flex-wrap gap-6">
                        <Table orders={table.orders} />
                    </div>
                ))
            }
        </>
    )
}
