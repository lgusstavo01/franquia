import { Clients } from "./components/Clients/Clients";
import { Hero } from "./components/Hero/Hero";
import { Info } from "./components/info/Info";
import { Publico } from "./components/Publico/Publico";
import { Socios } from "./components/Socios/Socios";
import { Training } from "./components/Training/Training";
import { Why } from "./components/Why/Why";

export function App() {
  return (
    <div>
      <Hero />
      <Info />
      <Socios />
      <Publico />
      <Why />
      <Training />
      <Clients />
    </div>
  );
}
