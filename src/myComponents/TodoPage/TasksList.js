import React, { useEffect, useState } from 'react';
import todoItems, { sortArray } from './TodoItems';

export default function TasksList() {
    const [todoArray, setTodoArray] = useState(sortArray(todoItems));
    const deleteTask = (ind) => {
        let arr = [...todoArray];
        arr.splice(ind, 1);
        setTodoArray(sortArray(arr));
    }
    const toggleStarTask = (ind) => {
        let arr = [...todoArray];
        arr[ind].starred = !arr[ind].starred;
        setTodoArray(sortArray(arr));
    }
    return (
        <>
            <section className="max-w-4xl p-12 mx-auto flex flex-col items-center">
                <h1 className='text-2xl font-bold text-center mb-12'>Your Todo List</h1>
                <section className="w-full py-8 flex flex-col">
                    <section className="mx-4 mb-4 pr-4 flex items-center justify-end">
                        <button className='flex items-center p-2 rounded-2xl border border-transparent hover:border-black'>Add new task&nbsp;&nbsp;<i className="fas fa-plus"></i></button>
                    </section>
                    {todoArray.map((item, index) => {
                        return (
                            <div key={index} className='border-2 border-black my-2 mx-4 px-6 py-4 flex items-center justify-between'>
                                <div className="flex items-center">
                                    <h1 className='ml-2'>{item.title}</h1>
                                </div>
                                <div className='flex items-center justify-evenly w-36'>
                                    <i className={item.urgency === "high" ? "fas fa-exclamation-triangle text-red-600" : (item.urgency === "medium" ? "fas fa-exclamation-triangle text-orange-500" : "fas fa-exclamation-triangle text-transparent")}></i>
                                    <button><i className={item.status === "In Progress" ? "far fa-check-circle" : "fas fa-check-circle text-green-600"}></i></button>
                                    <button onClick={() => toggleStarTask(index)}><i className={item.starred ? "fas fa-star text-yellow-400" : "far fa-star"}></i></button>
                                    <button onClick={() => deleteTask(index)}><i className="far fa-trash-alt text-red-600"></i></button>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        </>
    )
}
