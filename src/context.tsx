import React, { createContext, useContext, useCallback, useState, useRef } from "react";
// import { ConfirmModal } from 'components/UI/ConfirmModal';
import { IUser } from "./types";

interface IAppContext {
  user: IUser;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const useAppContext = () => {
  return useContext(AppContext) as IAppContext;
};

export function AppContextProvider({ children, user }: { children: React.ReactNode; user: IUser }) {
  const value = { user };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
