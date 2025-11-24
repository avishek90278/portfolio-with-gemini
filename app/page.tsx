import Scene from "@/components/Canvas/Scene";
import Overlay from "@/components/UI/Overlay";
import Header from "@/components/UI/Header";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Header />
      <div className="fixed inset-0 z-[-1]">
        <Scene />
      </div>
      <Overlay />
    </main>
  );
}
