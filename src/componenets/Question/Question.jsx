import React from 'react';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2'

const Question = ({ question }) => {
    const { correctAnswer, options } = question;
    // console.log(correctAnswer);
    const handleButton = (option) => {
        if (option === correctAnswer) {
            toast.success('Your answer is right')
        } else {
            toast.error('Your answer is wrong')
        }
    }
    const eyeClick = (correctAnswer) => {
        Swal.fire({
            title: `The answer is: <br /> ${correctAnswer}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    return (
        <div>
            <div className="max-w-6xl lg:mx-auto sm:mx-8 mb-10 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="p-6 space-y-8 relative">
                    <div className="space-y-2 my-5 mx-24">
                        <h2 className="text-3xl font-semibold tracking-wide mb-10">{question.question}</h2>
                        <p className='absolute top-8 right-10'>
                            <button onClick={() => eyeClick(correctAnswer)}><FaEye className='text-3xl'></FaEye></button>
                        </p>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {
                                options.map(option =>
                                    <button onClick={() => handleButton(option)} className='bg-slate-500 py-5 rounded-md my-5'>
                                        <label><li className='list-none'> {option}</li></label>
                                    </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Question;