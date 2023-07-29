import { useCallback } from "react";
import { add as _add } from "lodash";

export default function useLodash() {
  const add = useCallback((a: number, b: number) => {
    return _add(a, b);
  }, []);

  return {
    add,
  };
}
