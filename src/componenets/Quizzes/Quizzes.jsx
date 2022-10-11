import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizzes = () => {
    const data = useLoaderData();
    const quizzes = data.data;
    console.log(quizzes);
    return (
        <div>
            <h3>quiz page</h3>
        </div>
    );
};

export default Quizzes;