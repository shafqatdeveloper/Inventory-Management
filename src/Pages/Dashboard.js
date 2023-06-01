import React from "react";
import Sidebar from "./Sidebar.js";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";
import DataTable from "react-data-table-component";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  RadialBar,
  RadialBarChart,
  AreaChart,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import { BiFilter } from "react-icons/bi";

const Dashboard = () => {
  // Products for Data Table
  const products = [
    {
      id: "2KD-3RR",
      name: "Air Jordan | Retro OG Chicago",
      price: 2300,
      size: `${38} | ${39} `,
      pairs: 20,
    },
    {
      id: "5PP-BFG",
      name: "Air Jordan | Retro OG Dubai",
      price: 4100,
      size: `${42} | ${44} `,
      pairs: 45,
    },
  ];
  //   Data Table Columns
  const Columns = [
    {
      name: "ID Number",
      selector: (row) => row.id,
      width: "120px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "300px",
    },
    {
      name: "Size",
      selector: (row) => row.size,
      sortable: true,
      width: "120px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      cell: (row) => <h1>${row.price}</h1>,
      sortable: true,
      width: "120px",
    },
    {
      name: "Pairs",
      selector: (row) => row.pairs,
      sortable: true,
      width: "120px",
    },
  ];
  //   Data For Line Chart
  const data = [
    {
      name: "A",
      uv: 5,
      pv: 10,
    },
    {
      name: "B",
      uv: 5,
      pv: 10,
    },
    {
      name: "C",
      uv: 5,
      pv: 10,
    },
    {
      name: "D",
      uv: 5,
      pv: 10,
    },
    {
      name: "E",
      uv: 5,
      pv: 10,
    },
    {
      name: "F",
      uv: 5,
      pv: 10,
    },
    {
      name: "G",
      uv: 5,
      pv: 10,
    },
    {
      name: "H",
      uv: 5,
      pv: 10,
    },
  ];
  //   Data For Pie Charts
  const pieData = [{ name: "Group A", value: [100, 20] }];
  const pieData1 = [{ name: "Group A", value: [100, 36] }];
  const pieData2 = [{ name: "Group A", value: [100, 46] }];

  //   Sales Data
  const Sales = [
    {
      name: "Mon",
      pv: 4000,
      uv: 1000,
    },
    {
      name: "Tue",
      pv: 3000,
      uv: 2000,
    },
    {
      name: "Wed",
      pv: 5000,
      uv: 1000,
    },
    {
      name: "Thu",
      pv: 4000,
      uv: 9000,
    },
    {
      name: "Fri",
      pv: 9000,
      uv: 2000,
    },
    {
      name: "Sat",
      pv: 7000,
      uv: 5000,
    },
    {
      name: "Sun",
      pv: 12000,
      uv: 4000,
    },
  ];
  //   Orders Data
  const Orders = [
    { name: "total", uv: 2000, fill: "#ffffff" },
    { name: "total", uv: 1600, fill: "#5e5e5e" },
    { name: "total", uv: 2000, fill: "#ffffff" },
    { name: "Delivered", uv: 1500, fill: "#c9c204" },
    { name: "total", uv: 2000, fill: "#ffffff" },
    { name: "total", uv: 1200, fill: "#5e5e5e" },
  ];

  //   Rounded Bars

  const RoundedBar1 = (props) => {
    const { x, y, width, height } = props;
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} ry={4} fill="#FFF36D" />
      </g>
    );
  };
  const RoundedBar2 = (props) => {
    const { x, y, width, height } = props;
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} ry={4} fill="#444444" />
      </g>
    );
  };
  //   Custom Styles for Data Table

  const customStyles = {
    rows: {
      style: {
        minHeight: "60px", // override the row height
        fontSize: "13px",
      },
    },
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "600",
      },
    },
    pagination: {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
      },
    },
  };
  return (
    <div className="ml-16 min-h-screen bg-gray-300">
      {/* SideBar */}
      <div>
        <Sidebar />
      </div>
      <div className="w-full gap-16 flex px-10">
        {/* Left Chart With Invite People Option */}
        <div>
          <div className="py-3 flex flex-col gap-5">
            {/* Upper Chart */}
            <div className="w-[20rem] px-5 py-5 bg-[#fff] relative rounded-3xl h-full flefx flex-col">
              <BsThreeDotsVertical
                size={18}
                className="absolute right-3 text-gray-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h1 className="text-sm pb-3 font-semibold text-gray-400">
                    Purchased
                  </h1>
                  <h1 className="text-3xl font-bold">
                    1500 <span className="text-sm font-normal">Pairs</span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm pb-3 font-semibold text-gray-400">
                    Available
                  </h1>
                  <h1 className="text-3xl font-bold">
                    3521 <span className="text-sm font-normal">Pairs</span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <h1 className="text-sm text-gray-400 font-semibold">
                  Salesprice
                </h1>
                <h1 className="text-3xl font-bold">
                  2000{" "}
                  <span className="text-xs text-gray-400 font-semibold">
                    23%
                  </span>
                </h1>
                <div>
                  <ResponsiveContainer width="100%" aspect={5}>
                    <BarChart
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <Tooltip />
                      <Bar dataKey="pv" shape={RoundedBar1} />
                      <Bar dataKey="uv" shape={RoundedBar2} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <h1 className="text-sm text-gray-400 font-semibold">Sales</h1>
                <h1 className="text-3xl font-bold">
                  760{" "}
                  <span className="text-xs text-gray-400 font-semibold">
                    41%
                  </span>
                </h1>
                <div clas>
                  <ResponsiveContainer width="100%" aspect={5}>
                    <BarChart
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <Tooltip />
                      <Bar dataKey="pv" shape={RoundedBar1} />
                      <Bar dataKey="uv" shape={RoundedBar2} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            {/* Invite People */}
            <div className="w-[20rem] rounded-3xl p-4 bg-gray-600 text-white">
              <TbMessageCircle
                className="bg-white/60 mb-2 text-black p-1 rounded-full"
                size={30}
              />
              <h1 className="text-lg font-semibold">Invite More People</h1>
              <h1 className="pb-1 text-sm">
                Invite More People and Get 30% Off
              </h1>
              <button className="px-7 rounded-xl my-2 bg-white text-gray-600 py-1.5">
                Invite Now
              </button>
            </div>
          </div>
        </div>
        {/* Right Side with Charts and Table */}
        <div className="py-3 w-full flex flex-col">
          {/* Name and Filters */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold">Hello John</h1>
              <h1 className="text-gray-500 ">Welcome Back</h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-black/80 flex items-center text-sm gap-1 text-[#fff] rounded-lg p-3">
                Add Items
                <RiShoppingBasketLine
                  className="bg-white text-black rounded-full p-0.5"
                  size={18}
                />
              </button>
              <div className="flex items-center gap-1">
                <h1 className="bg-white/70 px-9 py-2 rounded-l-lg">Filters</h1>
                <button className="bg-white/70 text-black px-2 py-2 rounded-r-lg">
                  <BiFilter size={24} />
                </button>
              </div>
            </div>
          </div>
          {/* Income, Expenses and Bonus Charts */}
          <div className="grid py-5 grid-cols-3 gap-10">
            <div className="relative flex rounded-xl p-2 bg-[#fff]">
              <BsThreeDotsVertical className="absolute text-gray-500 right-3" />
              <div>
                <h1 className="text-gray-400">Total Income</h1>
                <h1 className="text-2xl font-bold">4800K</h1>
                <h1 className="text-gray-400 text-xs pt-2">
                  During Last Month
                </h1>
              </div>
              <ResponsiveContainer
                className="absolute top-0 left-10"
                aspect={2.5}
              >
                <RadialBarChart innerRadius={50} barSize={7} data={pieData}>
                  <RadialBar
                    label={{
                      position: "center",
                      fill: "#b0b0b0",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                    background
                    dataKey="value"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="relative flex rounded-xl p-2 bg-[#fff]">
              <BsThreeDotsVertical className="absolute text-gray-500 right-3" />
              <div>
                <h1 className="text-gray-400">Total Expense</h1>
                <h1 className="text-2xl font-bold">7200K</h1>
                <h1 className="text-gray-400 text-xs pt-2">
                  During Last Month
                </h1>
              </div>
              <ResponsiveContainer
                className="absolute top-0 left-10"
                aspect={2.5}
              >
                <RadialBarChart innerRadius={50} barSize={7} data={pieData1}>
                  <RadialBar
                    label={{
                      position: "center",
                      fill: "#b0b0b0",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                    background
                    dataKey="value"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="relative flex rounded-xl p-2 bg-[#fff]">
              <BsThreeDotsVertical className="absolute text-gray-500 right-3" />
              <div>
                <h1 className="text-gray-400">Total Bonus</h1>
                <h1 className="text-2xl font-bold">5600K</h1>
                <h1 className="text-gray-400 text-xs pt-2">
                  During Last 5 Month
                </h1>
              </div>
              <ResponsiveContainer
                className="absolute top-0 left-10"
                aspect={2.5}
              >
                <RadialBarChart innerRadius={50} barSize={7} data={pieData2}>
                  <RadialBar
                    label={{
                      position: "center",
                      fill: "#b0b0b0",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                    background
                    dataKey="value"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Sales and Orders Charts */}
          <div className="grid grid-cols-3  gap-10">
            <div className="pr-5 pt-7 pb-1 rounded-xl relative col-span-2  bg-[#fff]">
              <BsThreeDotsVertical
                size={16}
                className="absolute right-2 top-2 text-gray-500"
              />
              <ResponsiveContainer aspect={3} width="100%" height="100%">
                <AreaChart
                  data={Sales}
                  margin={{
                    top: 10,
                    bottom: 0,
                  }}
                >
                  <XAxis axisLine={false} tickLine={false} dataKey="name" />
                  <YAxis
                    tickFormatter={(value) => `${value / 1000}K`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="3"
                    stroke="#FFF36D"
                    strokeWidth={5}
                    fill="#faf5ad"
                  />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#0e0e0e"
                    strokeWidth={5}
                    fill="#efefef"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="col-span-1 relative bg-white rounded-xl">
              <BsThreeDotsVertical
                size={15}
                className="absolute text-gray-500 right-3 top-3"
              />
              <ResponsiveContainer className="pt-10" aspect={2}>
                <RadialBarChart
                  innerRadius={34}
                  outerRadius={65}
                  data={Orders}
                  startAngle={0}
                  endAngle={180}
                >
                  <RadialBar
                    background
                    minAngle={15}
                    clockWise={true}
                    dataKey="uv"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              <h1 className="absolute bottom-[44%] text-gray-400 text-lg font-semibold left-[39%]">
                Orders
              </h1>
              <h1 className="absolute bottom-[15%]  text-black text-3xl font-bold tracking-normal left-[34%]">
                4500K
              </h1>
            </div>
          </div>
          {/* Data Table */}
          <div className="rounded-xl mt-6">
            <DataTable
              agination
              columns={Columns}
              data={products}
              selectableRows
              customStyles={customStyles}
            ></DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
