"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import { BlogFormData } from "../utils/types";
import { initialBlogFormData } from "../utils";
import { Spinner } from "../components/Spinner";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [formData, setFormData] = useState(initialBlogFormData);

  if (session === undefined) return <Spinner />;

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, formData, setFormData }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
