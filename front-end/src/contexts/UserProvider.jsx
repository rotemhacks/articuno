import React from "react";
import { ActiveUser } from "./contexts";

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState();

  return (
    <ActiveUser.Provider value={{ user, setUser }}>
      {children}
    </ActiveUser.Provider>
  );
};

export default UserProvider;
