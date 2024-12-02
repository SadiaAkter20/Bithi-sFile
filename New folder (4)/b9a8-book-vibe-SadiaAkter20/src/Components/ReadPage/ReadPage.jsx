import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const ReadPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-44">
      <ComposedChart
        width={1300}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="bookName" scale="band" />
        <YAxis />
        <Tooltip />
        <Area></Area>
        <Bar dataKey="totalPages" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="totalPages" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default ReadPage;
