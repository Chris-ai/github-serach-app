"use client";

import { GithubUser } from "@/model/types";
import { getUser } from "@/service/user";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { DEFAULT_GITHUB_USERNAME } from "../api/users/route";

interface UserContextProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  githubUser?: GithubUser | null;
  setGithubUser: Dispatch<SetStateAction<GithubUser | null>>;
  isLoading: boolean;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  fetchUserByUsername: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
  username: "",
  setUsername: (): string => "",
  setGithubUser: (): void => {},
  isLoading: false,
  errorMessage: "",
  setErrorMessage: (): string => "",
  fetchUserByUsername: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  },
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [username, setUsername] = useState<string>(DEFAULT_GITHUB_USERNAME);
  const [githubUser, setGithubUser] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetchUserByUsername().then();
  }, []);

  const fetchUserByUsername = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const response = await getUser(username);
      if (response.status === 200) {
        const data = await response.data;
        setGithubUser(data.data);
      } else if (response.status === 404) {
        setErrorMessage("No results");
      } else {
        setErrorMessage("Unknown error");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        githubUser,
        setGithubUser,
        isLoading,
        errorMessage,
        setErrorMessage,
        fetchUserByUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
