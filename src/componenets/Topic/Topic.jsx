import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Topic = () => {
    const data = useLoaderData();
    const topics = data.data;
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 m-20'>
            {
                topics.map(topic => <TopicCard
                    key={topic.id}
                    topic={topic}
                ></TopicCard>)
            }
        </div>
    );
};

export default Topic;