import { useEffect } from "react";

const Ad2 = () => {
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
      data-ad-unit="DAN-6zOP2xI7Ou3QIPS2"
      data-ad-width="728"
      data-ad-height="90"
    ></ins>
  );
};

export default Ad2;
