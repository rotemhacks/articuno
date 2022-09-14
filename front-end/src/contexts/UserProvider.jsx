import axios from "../utils/axiosClient";
import React from "react";
import { ActiveUser } from "./contexts";

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const getUserOnLoad = async () => {
      const user = await axios.get("/login");
      if (user.data) setUser(user.data);
    };
    getUserOnLoad();
  }, []);

  return (
    <ActiveUser.Provider value={{ user, setUser }}>
      {children}
    </ActiveUser.Provider>
  );
};

export default UserProvider;
