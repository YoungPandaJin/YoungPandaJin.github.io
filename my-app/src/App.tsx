import React, { Suspense, useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import SiteRouter from "./Base/Router/SiteRouter";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloadImage = async (preLoadSrc: string[]) => {
    const promises = preLoadSrc.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    await Promise.all(promises);
    setLoading(false);
  }

  useEffect(() => {
    preloadImage(["https://github.com/YoungPandaJin.png"])
  }, []);

  return (
    <HashRouter>
      <Suspense fallback={null}>
        {loading ? <h1>Loading!</h1> : <SiteRouter/>}
      </Suspense>
    </HashRouter>
  );
}
