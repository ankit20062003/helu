import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Proposal from "@/components/Proposal";
import { ScreenCaptureProvider } from "@/components/ScreenCaptureContext";

export default function Home() {
  return (
    <ScreenCaptureProvider>
      <main>
        <Hero />
        <Timeline />
        <Proposal />
      </main>
    </ScreenCaptureProvider>
  );
}
