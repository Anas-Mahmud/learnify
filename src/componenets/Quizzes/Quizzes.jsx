import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizzes = () => {
    const data = useLoaderData();
    const quizzes = data.data;
    const { name, questions } = quizzes;
    return (
        <div>
            <h2 className='text-5xl font-bold my-10'>Quiz of {name}</h2>
            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default Quizzes;