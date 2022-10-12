import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, Tooltip, } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const chartsData = data.data;
    // console.log(chartsData);
    return (
        <div>
            <h2>statistics page</h2>
            {
                chartsData.map(chartData => console.log(chartData.total)
                    // <LineChart width={300} height={100} data={chartData}>
                    //     <Line type="monotone" dataKey={chartData.total} stroke="#8884d8" strokeWidth={2} />
                    //     <Tooltip />
                    // </LineChart>
                )
            }
        </div>
    );
};

export default Statistics;