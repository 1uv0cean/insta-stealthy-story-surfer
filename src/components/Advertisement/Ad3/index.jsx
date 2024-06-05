import { useEffect } from "react";

const Ad3 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <ins
      className="kakao_ad_area"
      style={{ display: "none" }}
      data-ad-unit="DAN-2KeyvR3yqq5odSH1"
      data-ad-width="700"
      data-ad-height="250"
    ></ins>
  );
};

export default Ad3;
