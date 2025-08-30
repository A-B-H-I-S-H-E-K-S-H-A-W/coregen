import { FeatureText } from "@/components/ui/FeatureText";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-bl from-background via-background to-primary/60 px-20">
        <div className="pt-28 max-w-4xl text-center mx-auto">
          <div>
            <FeatureText />
            <h1 className="h1">
              Bootstrap your website pages with{" "}
              <span className="text-primary">Coregen</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
