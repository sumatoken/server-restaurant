import Layout from '@/components/Layout'
import OrdersManagement from '@/components/OrdersManagement'
import Head from 'next/head'
import React from 'react'

export default function orders() {
    return (
        <>
            <Head>
                <title>Orders | Restau</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <OrdersManagement />
            </Layout></>
    )
}
