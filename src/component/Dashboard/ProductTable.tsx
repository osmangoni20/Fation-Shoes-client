import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../shared/Modal";
import toast from "react-hot-toast";
import React from "react";

const ProductTable = ({ shoe, onDelete }) => {
  const [isOpen, setModel] = useState(false);
  const notify = (message) => toast(message);

  const isSubmit = () => {
    setModel(false);
  };

  const isClose = () => {
    setModel(false);
  };

  const HandleItemDelete = (id) => {
    setModel(true);
    const url = `https://fationshoe-server.vercel.app/product/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ isDeleted: true }),
    })
      .then((res) => res.json())
      .then(async () => {
        onDelete(id);
        notify("Delete Successfully Done");
      });
  };

  return (
    <div className="overflow-x-auto p-4">
      <Modal isOpen={isOpen} isClose={isClose} isSubmit={isSubmit}>
        <Modal.Header>Confirm Delete this product Information</Modal.Header>
        <div className="flex justify-center">
          <Modal.Submit>Yes</Modal.Submit>
        </div>
      </Modal>

      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-white text-sm">
          <tr>
            <th className="p-3">Sl.</th>
            <th className="p-3">Product Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Brand</th>
            <th className="p-3">Price</th>
            <th className="p-3">Image</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-200 text-sm">
          {shoe?.map((data, index) => {
            return (
              <tr
                key={data._id}
                className="border-b hover:bg-gray-700 transition duration-300"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{data?.pd_name}</td>
                <td className="p-3">{data?.pd_category}</td>
                <td className="p-3">{data?.pd_category}</td>
                <td className="p-3 text-[#4F87F4]">{data?.pd_price}</td>
                <td className="p-3">
                  <figure className="h-16 w-16 mx-auto">
                    <img
                      src={data?.pd_image}
                      alt="Shoes"
                      className="h-full w-full object-cover rounded"
                    />
                  </figure>
                </td>
                <td className="p-3">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to={`/product/${data?._id}`}>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
                        See Details
                      </button>
                    </Link>
                    <Link to={`edit/${data?._id}`}>
                      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => HandleItemDelete(data?._id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
