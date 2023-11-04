import React, { createContext, useContext, useState, useMemo } from "react";

type MemberContextProviderProps = {
  children: React.ReactNode;
};

type MemberData = {
  name: string;
  description: string;
  instrument: string;
  image: string;
  small_image: string;
  instagram: string;
  mail: string;
  whatsapp: string;
};

type MemberContextTypes = {
  memberCard: MemberData;
  setMemberCard: React.Dispatch<React.SetStateAction<MemberData>>;
};

export const MemberContext = createContext<MemberContextTypes | null>(null);

export default function MemberContextProvider({
  children,
}: MemberContextProviderProps) {
  const [memberCard, setMemberCard] = useState<MemberData>({
    name: "",
    description: "",
    instrument: "",
    image: "",
    small_image: "",
    instagram: "",
    mail: "",
    whatsapp: "",
  });

  const memberContextProviderValue = useMemo(
    () => ({
      memberCard,
      setMemberCard,
    }),
    [memberCard, setMemberCard]
  );

  return (
    <MemberContext.Provider value={memberContextProviderValue}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMemberContext() {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error(
      "useMemberContext must be used within a MemberContextProvider"
    );
  }
  return context;
}
