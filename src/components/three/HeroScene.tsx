"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(
  () => import("./SceneCanvas").then((mod) => mod.SceneCanvas),
  { ssr: false, loading: () => <div className="absolute inset-0 -z-10 bg-background" /> }
);

export function HeroScene() {
  return <SceneCanvas />;
}
