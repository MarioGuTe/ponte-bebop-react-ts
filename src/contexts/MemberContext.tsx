/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import { createContext, useContext, useState } from "react";

export const MemberContext = createContext<unknown | undefined>(undefined);

const MemberContextProvider = ({ children }) => {
  const [memberCard, setMemberCard] = useState({
    member: {
      name: "",
      description: "",
      instrument: "",
      image: "",
      small_image: "",
      instagram: "",
      mail: "",
      whatsapp: "",
    },
  });

  return (
    <MemberContext.Provider value={{ memberCard, setMemberCard }}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberContextProvider;

export function useMemberContext() {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error(
      "useMemberContext must be used within a MemberContextProvider"
    );
  }
  return context;
}
