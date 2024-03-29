import { trpc } from '@/utils/trpc'
import React, { useEffect, useState } from 'react'
import Table from './Table'

export default function OrdersManagement() {
    const tables = trpc.tables.getAllOrders.useQuery({ default: false }, {
        refetchOnWindowFocus: false,
        trpc: { ssr: false },
        cacheTime: 0,
        refetchInterval: 2000,
    }
    )
    return (
        <div className="flex flex-row flex-wrap gap-6">
            {tables.data && tables.data.map((table, key) => (
                <Table orders={table.orders} />
            ))}
        </div>
    )
}
