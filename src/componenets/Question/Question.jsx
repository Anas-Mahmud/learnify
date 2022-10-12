import React from 'react';
import { toast } from 'react-toastify';

const Question = ({ question }) => {
    console.log(question);
    const { correctAnswer, options } = question;
    const handleButton = (option) => {
        if (option === correctAnswer) {
            toast.success('Your answer is right', { autoClose: 1000 })

        } else {
            toast.warning('Your answer is wrong', { autoClose: 1000 })
        }
    }
    return (
        <div>
            <div className="max-w-6xl lg:mx-auto sm:mx-8 mb-10 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="p-6 space-y-8">
                    <div className="space-y-2 my-5">
                        <h2 className="text-3xl font-semibold tracking-wide mb-10">{question.question}</h2>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                            {
                                options.map(option =>
                                    <button onClick={() => handleButton(option)} className='bg-slate-500 py-5 rounded-md my-2'>
                                        <label><li className='list-none'> {option}</li></label>
                                    </button>)
                            }
                        </div>
                    </div>
                    {/* <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Correct Answer</button> */}
                </div>
            </div>
        </div>
    );
};

export default Question;