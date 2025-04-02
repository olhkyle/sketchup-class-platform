import { useState } from "react";
import useIsMountedRef from "./useIsMountedRef";
import { Loading } from "@/components";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const ref = useIsMountedRef();

  const startTransition = async <T>(promise: Promise<T>): Promise<T> => {
    try {
      setIsLoading(true);
      const data = await promise;
      return data;
    } finally {
      if (ref.isMounted) {
        setIsLoading(false);
      }
    }
  };

  return { startTransition, isLoading, Loading };
};

export default useLoading;
