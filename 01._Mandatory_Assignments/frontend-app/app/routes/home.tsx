import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music Reviewer" },
    { name: "Review aritsts etc", content: "Welcome to your music reviewer!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
