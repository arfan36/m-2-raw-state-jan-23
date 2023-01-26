import React, { useReducer } from 'react';

const Counter = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        console.log(action);
        if (action.type === "INCREMENT") {
            return state + 1;
        } else if (action.type === "DECREMENT") {
            return state - 1;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div className='w-full max-w-xl mb-10 bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md'>
                <div className='bg-white rounded-md p-10'>
                    <h1>{state}</h1>
                    <div>
                        <button
                            className='bg-purple-200 p-2 m-2 rounded-md'
                            onClick={() => dispatch({ type: "DECREMENT" })}
                        >
                            Decrement
                        </button>
                        <button
                            className='bg-sky-200 p-2 m-2 rounded-md'
                            onClick={() => dispatch({ type: "INCREMENT" })}
                        >
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;