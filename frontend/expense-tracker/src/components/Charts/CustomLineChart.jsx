import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({ data }) => {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-3 border border-white/40">
                    <p className="text-xs font-bold text-indigo-600 mb-1 tracking-tight">
                        {payload[0].payload.date || payload[0].payload.category || payload[0].payload.month}
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
                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey={data?.[0]?.date ? "date" : "category"}
                        tick={{ fontSize: 13, fill: "#64748b", fontWeight: 500 }}
                        stroke="none"
                        dy={10}
                    />
                    <YAxis
                        tick={{ fontSize: 13, fill: "#64748b", fontWeight: 500 }}
                        stroke="none"
                        dx={-10}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '5 5' }} />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#6366f1"
                        strokeWidth={4}
                        dot={{ r: 5, fill: "#6366f1", strokeWidth: 2, stroke: "#fff" }}
                        activeDot={{ r: 8, fill: "#6366f1", stroke: "#fff", strokeWidth: 3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomLineChart;
