import React from "react";
import { CgMoreVertical } from "react-icons/cg";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight, FaCompressArrowsAlt } from "react-icons/fa";

function History() {
  return (
    <div className="bg-[#202020] w-full h-screen text-gray-200 p-4 flex flex-col rounded-lg">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-5">
        {/* Title and Compress Button */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg sm:text-[18px] font-semibold">
            Credit History
          </h3>
          <button>
            <FaCompressArrowsAlt />
          </button>
        </div>

        {/* Entries Per Page and Button */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="bg-[#20744A] gap-1 px-2 py-1 rounded-md flex items-center">
            <RiFileExcel2Line className="w-3 h-3" /> Export Data
          </button>

          <div className="flex items-center gap-2">
            <p className="hidden sm:block text-sm">Entries/Page</p>
            <select className="bg-black text-white text-sm rounded-md px-2 py-1">
              <option>10</option>
              <option>50</option>
              <option>100</option>
              <option>500</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden sm:flex text-white text-[14px] border-b border-gray-600 pb-3">
        <div className="flex w-full">
          <span className="w-1/5 text-left">Name</span>
          <span className="w-1/5 text-center">Amount</span>
          <span className="w-1/5 text-center">Date</span>
          <span className="w-1/5 text-center">Remark</span>
          <span className="w-1/5 text-center">Room</span>
          <span className="w-1/5 text-center mr-7">Hostel</span>
          <span className="w-1/5 ">Contact No.</span>
        </div>
      </div>

      {/* Table Data (Scrollable Section) */}
      <div className="flex-1 h-0 overflow-y-auto no-scrollbar">
        {Array(30)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#000000] flex flex-wrap sm:flex-nowrap items-center p-3 mb-2 rounded-lg"
            >
              {/* Mobile View */}
              <div className="sm:hidden w-full text-[14px]">
                <div className="relative">
                  <button className="absolute top-0 right-0">
                    <CgMoreVertical />
                  </button>
                </div>
                <p>
                  <span className="text-sm">Name: </span>Ramakant Sharma
                </p>
                <p className="text-cyan-400">
                  <span className="text-sm text-white">Amount: </span>₹ 1,56,000
                </p>
                <p>
                  <span className="text-sm">Date: </span>12 Feb 2023
                </p>
                <p>
                  <span className="text-sm">Remark: </span>Fees
                </p>
                <p>
                  <span className="text-sm">Fees: </span>112
                </p>
                <p>
                  <span className="text-sm">Room: </span>H1
                </p>
                <p>
                  <span className="text-sm">Contact No.: </span>+91 5234564545
                </p>
              </div>

              {/* Desktop View */}
              <div className="hidden sm:flex w-full items-center text-[14px]">
                <p className="w-1/5 text-left">Ramakant Sharma</p>
                <p className="w-1/5 text-center text-cyan-400">₹ 1,56,000</p>
                <p className="w-1/5 text-center">12 Feb 2023</p>
                <p className="w-1/5 text-center">Fees</p>
                <p className="w-1/5 text-center">112</p>
                <p className="w-1/5 text-center">H1</p>
                <p className="w-1/5 text-center">+91 5234564545</p>

                <button className="ml-3">
                  <CgMoreVertical className="text-white" />
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Section */}
      <div className="flex flex-wrap justify-center items-center mt-[25px] text-[13px] space-x-2 md:space-x-4">
        <FaArrowLeft className="mt-1 sm:inline" />
        <span className="sm:inline">prev</span>

        {/* Page Numbers */}
        <span className="bg-[#000000] text-white px-2 py-1 rounded">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span className="hidden sm:inline">5</span>
        <span className="sm:inline">...........</span>
        <span className="sm:inline">97</span>
        <span className="sm:inline">98</span>
        <span className="sm:inline">99</span>
        <span className="sm:inline">100</span>

        <span>Next</span>
        <FaArrowRight className="mt-1 sm:inline" />
      </div>
    </div>
  );
}

export default History;
