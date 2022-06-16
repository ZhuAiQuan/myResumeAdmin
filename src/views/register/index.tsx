import React, { useEffect, useRef } from "react";
import bg from "@/assets/images/bg.jpg";
// @ts-ignore
import RaindropFX from "utils/rainy.js";
import "./index.less";

export default function Register() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  function init() {
    const cv = canvas.current as HTMLCanvasElement;
    const rect = cv.getBoundingClientRect();
    cv.width = rect.width;
    cv.height = rect.height;

    const raindropFx = new RaindropFX({
      canvas: canvas.current,
      background: bg,
    });

    window.onresize = () => {
      const rect = cv.getBoundingClientRect();
      raindropFx.resize(rect.width, rect.height);
    };
    raindropFx.start();
    return raindropFx
  }
  useEffect(() => {
    const raindrop = init();
    return () => {
      raindrop.stop()
    }
  }, []);
  return (
    <div className="register">
      <canvas ref={canvas}></canvas>
    </div>
  );
}
