import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";
import CustomTooltip from './CustomTooltip';

const CustomBarChart = ({ data }) => {

    //Function to alternate colors
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#875cf5" : "#cfbefb";
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-3 border border-white/40">
                    <p className="text-xs font-bold text-indigo-600 mb-1 tracking-tight">
                        {payload[0].payload.category || payload[0].payload.source || payload[0].payload.month}
                    </p>
                    <p className="text-sm font-medium text-slate-600">
                        Amount: <span className="text-sm font-extrabold text-slate-800"> ${payload[0].payload.amount}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-transparent mt-6">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey={data?.[0]?.month ? "month" : "category"} tick={{ fontSize: 13, fill: "#64748b", fontWeight: 500 }} stroke="none" dy={10} />
                    <YAxis tick={{ fontSize: 13, fill: "#64748b", fontWeight: 500 }} stroke="none" dx={-10} />
                    <Tooltip content={CustomTooltip} cursor={{ fill: '#f8fafc', opacity: 0.5 }} />
                    <Bar
                        dataKey="amount"
                        fill="#6366f1"
                        radius={[6, 6, 0, 0]}
                        activeDot={{ r: 8, fill: "#4f46e5" }}
                        activeStyle={{ fill: "#4f46e5" }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(index)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomBarChart