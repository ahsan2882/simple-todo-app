import React from 'react';
import Header from '../CommonElements/Header';
import HeroCss from './Hero.module.css';
import heroImg from '../../assets/img/heroImg.jpg'

export default function Hero() {
    return (
        <>
            <Header />
            <section className={`${HeroCss.container1} flex items-center justify-between my-20`}>
                <section className="w-7/12">
                    <h1 className='text-7xl font-bold tracking-widest text-indigo-700'>TASKER</h1>
                    <p className='text-2xl tracking-tighter leading-10'>Organize your tasks the way you want!</p>
                    <p className='text-xl font-light mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat porro praesentium omnis molestias vero sunt assumenda animi accusantium modi facilis possimus dolores, magnam cum, corrupti deserunt molestiae eos, ratione dolorem?</p>
                </section>
                <section>
                    <img src={heroImg} alt="list of todos" className='h-72 object-cover'/>
                </section>
            </section>
        </>
    )
}