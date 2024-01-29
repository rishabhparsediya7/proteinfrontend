import React, { useEffect, useState } from "react";
import axios from "axios";
import { categories } from "../../Constants/constant";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [productNameData, setProductNameData] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleNameSelect = (event) => {
    setName(event.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWaiting(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("image", image);
    formData.append("category", category);
    const response = await axios.post(
      "http://localhost:8000/admin/categories",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status == 200) {
      setWaiting(false);
      setName("");
      setCategory("");
      setPrice(0);
      setStock(0);
      setImage(null);
    }
  };

  useEffect(() => {
    const updateProductNames = () => {
      let keyArray = Object.keys(categories);
      setCategoryArray(keyArray);
      setProductNameData(() => {
        return keyArray.map((key) => categories[key]).flat();
      });
    };
    updateProductNames();
  }, []);
  return (
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Product name
        </label>
        <select
          id="name"
          value={name}
          onChange={handleNameSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Select a Product Name
          </option>
          {productNameData.map((e, index) => (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Price
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="5500"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="stock"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Stock Available
        </label>
        <input
          type="texte"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="10"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Category
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategory}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Select a Product Category
          </option>
          {categoryArray.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="user_avatar"
        >
          Chose product image
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="file"
          onChange={handleChange}
          type="file"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {waiting ? (
          <div className="loader animate-spin ease-linear rounded-full border-4 border-t-4 border-white-700 h-6 w-6 m-auto"></div>
        ) : (
          <div>Submit</div>
        )}
      </button>
    </form>
  );
};

export default AddProduct;
// categoryArray.map((v) => {
//   categories[v].map((e) => {
//     if (e.name == name) {
//       category = v;
//       return;
//     }
//   });
// });
// let endTime = performance.now();
// let executionTime = endTime - startTime;
// console.log(`Function execution time: ${executionTime} milliseconds`);

//     let category = "";
// let categoryArray = Object.keys(categories);
// let startTime = performance.now();
