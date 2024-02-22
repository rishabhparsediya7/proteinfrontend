import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Utils/Button";
const LocationComponent = () => {
  const [location, setLocation] = useState({});
  const [landmark, setLandMark] = useState(false);
  const [street, setStreet] = useState(false);
  const [landmarkValue, setLandmarkValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const [address, setAddres] = useState({
    full_address_line: "",
  });

  const getLocationChange = async (lat, lon) => {
    const GEO_BASE_URL = import.meta.env.VITE_GEOCODING_API_URL;
    const api_key = import.meta.env.VITE_GEOCODING_API_KEY;
    const lati = location.latitude ? location.latitude : lat;
    const long = location.longitude ? location.longitude : lon;
    const api_url = `${GEO_BASE_URL}?q=${lati}%2c+${long}&key=${api_key}`;
    const response = await axios.get(api_url);
    if (response.status == 200) {
      setAddres({
        city: response.data.results[0].components.city,
        district: response.data.results[0].components.city_district,
        state: response.data.results[0].components.state,
        country: response.data.results[0].components.country,
        pincode: response.data.results[0].components.postcode,
        full_address_line: response.data.results[0].formatted,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        getLocationChange(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
      }
    );
  }, []);
  return (
    <div className="flex flex-col mb-2 py-4 gap-2 justify-between">
      <div className="flex align-middle my-auto">
        <p>
          <strong>Delivering to</strong>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex-1">
          <input
            type="text"
            className="rounded-md w-full bg-transparent text-white"
            onChange={(e) => setAddres(e.target.value)}
            value={address.full_address_line}
          />
        </div>
        <div className="flex gap-2 py-2">
          {!landmark && (
            <button
              onClick={() => setLandMark(true)}
              className="bg-orange-400 rounded-md p-1 text-[0.70rem]"
            >
              Add Landmark
            </button>
          )}
          {!street && (
            <button
              onClick={() => setStreet(true)}
              className="bg-orange-400 rounded-md p-1 text-[0.70rem]"
            >
              Add Street
            </button>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          {landmark && (
            <input
              type="text"
              placeholder="Landmark"
              value={landmarkValue}
              onChange={(e) => setLandmarkValue(e.target.value)}
              className="bg-transparent rounded-md p-1"
            />
          )}
          {street && (
            <input
              type="text"
              placeholder="Street"
              value={streetValue}
              onChange={(e) => setStreetValue(e.target.value)}
              className="bg-transparent rounded-md p-1"
            />
          )}
        </div>
      </div>
      <div className="flex md:w-full md:justify-center align-middle">
        <Button onClick={getLocationChange} title={"get current location"} />
      </div>
    </div>
  );
};

export default LocationComponent;
