import React, { useState } from "react";
import "./editprofile.css";
import axios from "axios";
const EditProfile = ({ user }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setErrors] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const userId = localStorage.getItem("userid");
    try {
      const response = await axios.put(`${BASE_URL}/user/updateUser`, {
        userId: userId,
        name: fullName,
        address: address,
        country: country,
        state: state,
        city: city,
        zipcode: zipcode,
      });
      if (response.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setErrors(error.message);
    }
  };
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="bg-[#413e3e52] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-xl text-white uppercase tracking-wider">
              Personal Details
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="h-10 bg-transparent border mt-1 rounded px-4 w-full bg-gray-50"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border bg-transparent mt-1 rounded px-4 w-full bg-gray-50"
                    value={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    contentEditable={false}
                  />
                </div>

                <div className="md:col-span-3">
                  <label htmlFor="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border bg-transparent mt-1 rounded px-4 w-full bg-gray-50"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder=""
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border bg-transparent mt-1 rounded px-4 w-full bg-gray-50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder=""
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="country">Country / region</label>
                  <div className="h-10 bg-transparent flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="px-4 appearance-none outline-none text-white w-full bg-transparent"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="state">State / province</label>
                  <div className="h-10 bg-transparent flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      className="px-4 appearance-none outline-none text-white w-full bg-transparent"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="transition-all bg-transparent flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
