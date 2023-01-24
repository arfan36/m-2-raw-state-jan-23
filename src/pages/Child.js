import React, { useState } from 'react';

const Child = () => {

    const [count, set_count] = useState(0);

    return (
        <div>
            <div>
                <h1>{count}</h1>
                <div>
                    <button
                        onClick={() => set_count(count - 1)}
                    >
                        Decrement
                    </button>
                    <button
                        onClick={() => set_count((prvState) => prvState + 1)}
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Child;