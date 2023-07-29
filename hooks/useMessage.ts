import { useCallback } from "react";
import { message } from "antd";

export default function useMessage() {
  const info = useCallback((msg: string) => {
    message.info(msg);
  }, []);

  return {
    info,
  };
}
