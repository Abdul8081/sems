// UserContext.js
import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

// Provide the context to child components
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
