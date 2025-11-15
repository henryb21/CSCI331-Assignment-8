'use client'

import React, { useState } from 'react';


export default function Counter(props) {
    const[count, setCount] = useState(0);
    const countBy = Number(props.countBy) || 1;

    const styles = {
        red: "bg-red-500 text-white px-3 py-1 rounded",
        blue: "bg-blue-500 text-white px-3 py-1 rounded",
        green: "bg-green-500 text-white px-3 py-1 rounded",
    };

    function handleIncrement(){
        setCount(prev => {
            const next = prev + countBy;
            return next > 10 ? 0 : next;
        });
    }
    return (
        <div>
            <p className="text-4xl font-bold text-center">Count: {count}</p>
            <button
                onClick={handleIncrement}
                className={(styles[props.color] || "bg-gray-300") + " px-20 py-10 text-2xl rounded-lg"}
                >
                +{countBy}
            </button>

        </div>
    );
}