import { useEffect, useState } from "react";

export const useMetaInfo = () => {
  const [info, setInfo] = useState<chrome.tabs.Tab>();
  const [loading, setLoading] = useState<boolean>(false);

  const getMetaInfo = async () => {
    setLoading(true);
    try {
      console.log("Getting meta info");
      const _info = await chrome.tabs.query({
        active: true,
        currentWindow: true,
        lastFocusedWindow: true
      });
      setInfo(_info[0]);
    } catch (err) {
      console.log({ err });
    }
    setLoading(false);
  };

  useEffect(() => {
    getMetaInfo();
  }, []);

  return {
    info,
    loading
  };
};
