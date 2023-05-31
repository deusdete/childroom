import { createContext, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

interface AuthProviderProps {
  children?: ReactNode;
}

const initialAuth: Session = {
  expires: "",
};

export interface AuthContextValue {
  user: Session;
  isInitialized: boolean;
  isAuthenticated: string;
}

const AuthContext = createContext<AuthContextValue>({
  user: initialAuth,
  isInitialized: false,
  isAuthenticated: "unauthenticated",
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<Session>(initialAuth);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const { data, status } = useSession();

  const initialize = async (): Promise<void> => {
    console.log("initialize");
    try {
      console.log("session", { data, status });
      if (status === "authenticated") {
        setIsAuthenticated(status);
        setUser(data);
      } else {
        setIsInitialized(false);
      }
    } catch (err) {
      console.error(err);
      setIsInitialized(false);
    }

    setIsInitialized(true);
  };

  useEffect(() => {
    initialize();
  }, [status]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isInitialized,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
