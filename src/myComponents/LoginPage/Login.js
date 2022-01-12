import React, { useContext, useState } from 'react';
import formPic from '../../assets/img/login.jpg';
import { useNavigate } from 'react-router-dom';
import { setAuthState } from '../../App';

export default function Login() {
    const setAuth = useContext(setAuthState);
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const userEmail = "ahsan@gmail.com";
    const userPass = "password123";
    const submitForm = (e) => {
        e.preventDefault();
        if (email === userEmail && password === userPass) {
            setAuth(true);
            navigate('/tasks');
        } else {
            alert("Wrong username or password");
            setAuth(false);
        }
        console.log(email, password);
    }
    const showPassword = () => {
        let passField = document.querySelector('#password');
        let passIcon = document.getElementsByClassName('showPass')[0];
        if (passField.type === 'password') {
            passField.type = 'text';
            passIcon.classList.remove('fa-eye');
            passIcon.classList.add('fa-eye-slash');
        } else {
            passField.type = 'password';
            passIcon.classList.remove('fa-eye-slash');
            passIcon.classList.add('fa-eye');
        }
    }
    return (
        <>
            <section className="wrapper w-full h-screen flex items-center bg-indigo-500">
                <section className="formSec max-w-6xl w-full mx-auto py-12 bg-white rounded-2xl flex items-center justify-around">
                    <section className="leftSec w-5/12">
                        <img src={formPic} alt="formPicture" className='w-full'/>
                    </section>
                    <section className="rightSec w-5/12 flex flex-col items-start justify-around">
                        <form className='flex flex-col items-start justify-around w-full' onSubmit={submitForm}>
                            <h1 className='self-center text-2xl mb-8'>LOGIN</h1>
                            <div className="emailInput flex flex-col my-4 w-full border-b-2 border-black rounded-b-md">
                                <label htmlFor="email">Email: </label>
                                <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={(e) => setemail(e.target.value)} required placeholder='user@gmail.com' className='outline-none px-4 py-3 w-11/12'/>
                            </div>
                            <div className="passInput flex flex-col my-4 w-full border-b-2 border-black rounded-b-md">
                                <label htmlFor="password">Password: </label>
                                <div className="inputPass flex items-center justify-between">
                                    <input type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required id="password" placeholder='Password' className='outline-none px-4 py-3 w-11/12' />
                                    <i className="fa fa-eye mr-3 showPass" onClick={showPassword}></i>
                                </div>
                                </div>
                            <button type="submit" className='self-center my-6 border-black border-2 w-10/12 py-3 rounded-xl bg-red-500 text-white uppercase text-lg'>Login</button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}
