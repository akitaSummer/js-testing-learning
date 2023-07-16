import { useState, useEffect, useCallback } from "react";

export default function (inputName: string) {
  const [error, setError] = useState<Error>();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchName = useCallback(async () => {
    try {
      const response = await fetch(`/api/name/${inputName}`);

      if (!response.ok) {
        return setError(new Error("Failed to fetch movies"));
      }

      const data = await response.json();
      setName(data.name);
    } catch (err) {
      setError(new Error("Failed to fetch movies"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchName();
  }, []);

  return { name, error, isLoading };
}
