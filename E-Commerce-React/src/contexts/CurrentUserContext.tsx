import React, { createContext, useContext, useState } from "react";

const currentUserContext = createContext({});
const CurrentUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("Current-User") as string) || null
  );

  return (
    <currentUserContext.Provider value={currentUser}>
      {children}
    </currentUserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentUser = () => useContext(currentUserContext);

export default CurrentUserProvider;
