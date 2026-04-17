import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Context } from '../../Context/ContextProvider';

const Stats = () => {
    const { frindg } = useContext(Context);
    const callCount = frindg.filter(
        (friend) => friend.actionType === 'Call'
    ).length;

    const textCount = frindg.filter(
        (friend) => friend.actionType === 'Text'
    ).length;

    const videoCount = frindg.filter(
        (friend) => friend.actionType === 'Video'
    ).length;
    console.log(frindg.length);
   
    const data = [
        { name: 'Call', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },
    ];
    return (
        <div className='container'>
            <h1 className='text-5xl font-bold mt-10'>Friendship Analytics</h1>
            <div className=" bg-white p-5 rounded-lg shadow-md my-10">
                <p>By Interaction Type</p>
                {
                    frindg.length > 0 ? (
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: '30px auto' }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    ) : (
                            <div className="text-center py-10">
                                <h3 className='text-gray-500 text-5xl'>No recent Analytics Data</h3>
                            </div>
                    )

                }
                
            </div>
        </div>
    );
};

export default Stats;