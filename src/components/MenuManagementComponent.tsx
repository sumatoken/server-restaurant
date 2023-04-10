import { trpc } from '@/utils/trpc'
import React, { useEffect, useState } from 'react'
interface menu {
    plate: string
    ingredients: string
    price: string
}
export default function MenuManagementComponent() {
    const menu = trpc.menu.getAll.useQuery()
    const createMenu = trpc.menu.addRecord.useMutation({
        onSuccess: () => {
            menu.refetch();
            setFormData({ plate: "", ingredients: "", price: "" });
        },
        onMutate: () => {
            console.log("mute")
        }
    })
    const [formData, setFormData] = useState({
        plate: "",
        ingredients: "",
        price: "",
    })
    const handleSubmit = async () => {
        createMenu.mutate(formData)
        console.log(formData)
    }
    return (
        <div className='flex flex-col gap-4'>
            <form action="">
                <div className="mb-2 flex flex-row items-center align-center justify-center">
                    <label
                        htmlFor=""
                        className=" bg-gray-200 border p-2.5 whitespace-nowrap w-fit rounded-tl rounded-bl border-gray-200  h-full text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Plat
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-br-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.plate}
                        required
                        onChange={e => setFormData({ ...formData, plate: e.target.value })}
                    />
                </div>
                <div className="mb-2 flex flex-row items-center align-center justify-center">
                    <label
                        htmlFor=""
                        className=" bg-gray-200 border p-2.5 whitespace-nowrap w-fit rounded-tl rounded-bl border-gray-200  h-full text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Ingredientes Principales
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-br-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.ingredients}
                        required
                        onChange={e => setFormData({ ...formData, ingredients: e.target.value })}
                    />
                </div>
                <div className="mb-2 flex flex-row items-center align-center justify-center">
                    <label
                        htmlFor=""
                        className=" bg-gray-200 border p-2.5 whitespace-nowrap w-fit rounded-tl rounded-bl border-gray-200  h-full text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Prix
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-br-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.price}
                        required
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                    />
                </div>
                <button
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                    type="button"
                    onClick={e => handleSubmit()}

                >
                    Enregistrer
                </button>
            </form>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Plat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ingredients
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.data?.map((el, key) =>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={key}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {el.plate}
                                </th>
                                <td className="px-6 py-4">
                                    {el.ingredients}
                                </td>
                                <td className="px-6 py-4">
                                    {el.price}DH
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
