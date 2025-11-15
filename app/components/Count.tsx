'use client'

import React, { useState } from 'react';

type CounterProps = {
  countBy?: number;
  color?: "red" | "blue" | "green";
};


export default function Counter(props: CounterProps) {
    const[count, setCount] = useState(0);
    const countBy = Number(props.countBy) || 1;

    const styles: Record<"red" | "blue" | "green", string> = {
    red: "bg-red-500 text-white px-3 py-1 rounded",
    blue: "bg-blue-500 text-white px-3 py-1 rounded",
    green: "bg-green-500 text-white px-3 py-1 rounded",
    };

    const color = props.color ?? "green";

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
                className={styles[color] + " px-20 py-10 text-2xl rounded-lg"}
                >
                +{countBy}
            </button>

        </div>
    );
}