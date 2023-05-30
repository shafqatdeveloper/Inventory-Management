import React from "react";
import Sidebar from "./Sidebar.js";
import pic1 from "../Assets/bgPic.png";
import pic2 from "../Assets/image.jpg";
import pic3 from "../Assets/pic.jpg";
import pic4 from "../Assets/skinCare.jpg";
import { CgSortAz } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { GrMoreVertical } from "react-icons/gr";
import DataTable from "react-data-table-component";
import "../App.css";
const ManageProducts = () => {
  const products = [
    {
      name: "Face Wash with multiple benifits",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash with multiple benifits",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Face Wash",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic1,
    },
    {
      name: "Whitening Cream",
      category: "Skin Care",
      sku: "JQ-B441",
      quantity: 4,
      cost: 15,
      price: 21,
      status: "Active",
      image: pic2,
    },
    {
      name: "Soap",
      category: "Skin Care",
      sku: "JQ-1271",
      quantity: 53,
      cost: 12,
      price: 17,
      status: "Active",
      image: pic3,
    },
    {
      name: "Sanitizer",
      category: "Skin Care",
      sku: "JQ-1241",
      quantity: 10,
      cost: 32,
      price: 41,
      status: "Active",
      image: pic4,
    },
  ];

  const Column = [
    {
      name: "Product",
      selector: (row) => row.image,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.image}
            alt="Product"
            className="w-12 h-12 rounded-full border-[1px] border-gray-400"
          />
          <h1>{row.name}</h1>
        </div>
      ),
      width: "280px",
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      width: "180px",
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
      width: "180px",
    },
    {
      name: "Cost",
      selector: (row) => row.cost,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-5">
          <button>
            <MdOutlineEdit size={25} />
          </button>
          <button>
            <GrMoreVertical size={25} />
          </button>
        </div>
      ),
    },
  ];

  //   Setting Font Size for Small Devices

  const customStylesSmallDevice = {
    rows: {
      style: {
        fontSize: "13px", // Font size for small devices
        minHeight: "60px",
      },
    },
  };
  const isSmallDevice = window.innerWidth <= 768;
  const customStyles = {
    rows: {
      style: {
        minHeight: "69px", // override the row height
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

  const selectedCustomStyles = isSmallDevice
    ? customStylesSmallDevice
    : customStyles;

  return (
    <div className="ml-16 bg-white">
      {/* Displaying Sidebar */}
      <div>
        <Sidebar />
      </div>
      <div>
        {/* Header and Profile Pic */}
        <div className="w-full px-1 sm:px-7 flex my-3 border-b-[1px] pb-2 border-b-gray-400 justify-between">
          <h1 className="text-lg pt-2 font-semibold">Manage Products</h1>
          <img
            src={pic1}
            className="w-12 rounded-full border-[1px] border-blue-300 h-12"
            alt=""
          />
        </div>
        {/* Search Input and Add Product & Create Category Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between px-1 sm:px-4 md:px-5 my-2 ">
          <div className="flex border-[1px] border-gray-400 rounded-xl w-full sm:w-96 px-2  py-1.5 items-center gap-3">
            <AiOutlineSearch />
            <input
              type="text"
              className="border-none outline-none focus:outline-none "
              placeholder="Search Products"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="border-[1px] text-sm uppercase p-2 border-black rounded-xl">
              Create Category
            </button>
            <button className="border-[1px] p-2 text-sm border-black bg-black text-white uppercase rounded-xl">
              Add New Product
            </button>
          </div>
        </div>

        {/* Custom Filters */}

        <div className="flex px-1 sm:px-4 md:px-5 mt-4 mb-7 sm:gap-10 items-center gap-2">
          <CgSortAz className="" size={29} />
          <select
            name="status"
            className="border-[1px] border-gray-600 rounded-xl py-2 px-6 bg-black text-white "
            id="status"
          >
            <option value="Active">Active</option>
            <option value="Active">Pending</option>
          </select>
          <select
            name="status"
            className="border-[1px] border-gray-600 rounded-xl py-2 px-6 outline-none focus:outline-none bg-slate-100 text-gray-700"
            id="status"
          >
            <option value="">Category</option>
            <option value="Active">Skin</option>
            <option value="Active">****</option>
            <option value="Active">****</option>
            <option value="Active">****</option>
            <option value="Active">****</option>
            <option value="Active">****</option>
          </select>
          <select
            name="status"
            className="border-[1px] border-gray-600 outline-none focus:outline-none rounded-xl py-2 px-10 bg-slate-100 text-gray-700 "
            id="status"
          >
            <option value="">Price</option>
            <option value="100">$100</option>
            <option value="100">$100</option>
            <option value="100">$100</option>
            <option value="100">$100</option>
            <option value="100">$100</option>
            <option value="100">$100</option>
          </select>
        </div>

        {/* Displaying Data Table */}
        <div className="px-2 sm:px-3 md:px-5">
          <DataTable
            pagination
            columns={Column}
            data={products}
            selectableRows
            customStyles={selectedCustomStyles}
          ></DataTable>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
