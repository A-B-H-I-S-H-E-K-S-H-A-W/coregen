"use client";
import { FeatureText } from "@/components/ui/FeatureText";
import { Button } from "@/components/ui/button";
import { ResizableContainer } from "@/components/ResizeableContainer";
import { blocks } from "@/data/blocks";

export default function Home() {
  return (
    <section className="min-h-screen bg-background md:px-20 px-2 py-10">
      <div className="pt-24 md:max-w-4xl w-full text-center mx-auto">
        <FeatureText />
        <h1 className="h1">
          Bootstrap your website and backend together with Coregen
        </h1>
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="p">
            A full-stack generator that lets developers instantly scaffold
            landing pages and backend APIs through a simple CLI — build
            beautiful frontends and powerful backends with ease.
          </p>
        </div>
        <div className="mt-8">
          <Button>Get Started</Button>
          <Button variant="ghost">View Services</Button>
        </div>
      </div>
      <div className="mt-12">
        {blocks.map(({ id, command, title }) => (
          <ResizableContainer key={id} command={command} title={title}>
            <div className="h-[80vh] w-full overflow-hidden bg-background">
              <iframe
                src="/hero-1"
                className="h-full w-full border-0"
                title="Responsive Preview"
              />
            </div>
          </ResizableContainer>
        ))}
      </div>
    </section>
  );
}
