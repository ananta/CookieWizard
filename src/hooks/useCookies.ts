import { useEffect, useState } from "react";
import { classifyCookie } from "../features/classify";
import { createFEInput } from "../features/extraction";

export const useCookies = ({ domain }: { domain: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cookies, setCookies] = useState<chrome.cookies.Cookie[]>();

  const getCookiesInfo = async () => {
    setLoading(true);
    try {
      const cookies = await chrome.cookies.getAll({
        domain: domain.replace("www.", "")
      });
      let output = [];
      console.log("Classifying");
      setCookies(cookies);
      cookies.map(async cookie => {
        const feature = createFEInput(cookie);
        let lab = await classifyCookie(cookie, feature);
        console.log({ lab });
      });
    } catch (err) {
      console.log("something went wrong");
      console.log({ err });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (domain) getCookiesInfo();
  }, [domain]);

  return { cookies, loading };
};
