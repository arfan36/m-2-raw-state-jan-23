import React from 'react';

const Child = ({ count, set_count }) => {

    return (
        <div>
            <div className='w-full max-w-xl mb-10 bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md'>
                <div className='bg-white rounded-md p-10'>
                    <h1 className='text-center text-gray-400'>Child</h1>
                    <h1>{count}</h1>
                    <div>
                        <button
                            onClick={() => set_count(count - 1)}
                            className='bg-purple-200 p-2 m-2 rounded-md'
                        >
                            Decrement
                        </button>
                        <button
                            onClick={() => set_count((prvState) => prvState + 1)}
                            className='bg-sky-200 p-2 m-2 rounded-md'
                        >
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Child;