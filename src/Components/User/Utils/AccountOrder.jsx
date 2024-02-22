import React from "react";

const AccountOrder = () => {
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const getOrders = async () => {
      const response = await axios.post(`${baseUrl}/user/getUserOrders`, {
        email: localStorage.getItem("email"),
      });
      if (response.status === 200) {
        setOrders(response.data.orders);
      } else if (response.status === 404) {
        setErrors("Orders not found");
      }
    };

    if (localStorage.getItem("access_token")) {
      getOrders();
    }
  }, []);
  console.log(orders);
  const getUserStatus = () => {
    if (!localStorage.getItem("access_token")) {
      return <h1>You should be logged in to see your orders!</h1>;
    }
  };
  return <div>AccountOrder</div>;
};

export default AccountOrder;
