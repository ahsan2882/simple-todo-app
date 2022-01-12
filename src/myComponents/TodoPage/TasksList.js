import React from 'react';
import items from './TodoItems';

export default function TasksList() {
    return (
        <>
            <section className="listWrapper max-w-4xl p-12 mx-auto bg-gray-400 flex flex-col items-center">
                <h1 className='text-2xl font-bold text-center mb-12'>Your Todo List</h1>
                <section className="listSec w-full bg-white py-8">
                    {items.filter((itemD) => itemD.status === "In Progress").map((item, index) => {
                        return (
                            <div key={index} className='border-2 border-black my-2 mx-4 px-6 py-4'>
                                <h1>{item.title}</h1>
                            </div>
                        )
                    })}
                </section>
            </section>
        </>
    )
}
