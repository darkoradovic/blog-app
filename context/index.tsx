"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import { Blog, BlogFormData } from "../utils/types";
import { initialBlogFormData } from "../utils";
import { Spinner } from "../components/Spinner";
import { usePathname, useRouter } from "next/navigation";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchResults: Blog[];
  setSearchResults: Dispatch<SetStateAction<Blog[]>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [formData, setFormData] = useState(initialBlogFormData);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Blog[]>([]);
  const pathname = usePathname();
  const router = useRouter();

  if (session === undefined) return <Spinner />;

  if (session === null && pathname === "/create") router.push("/");

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        formData,
        setFormData,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
