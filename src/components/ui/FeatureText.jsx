import { cn } from "@/lib/utils";
import { ArrowRightLeftIcon } from "lucide-react";

export function FeatureText() {
  return (
    <div className="z-10 flex pb-2 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border bg-foreground/10 text-base text-foreground transition-all ease-in hover:cursor-pointer dark:bg-background"
        )}
      >
        <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-foreground/70 hover:duration-300">
          <span>Introducing both frontend and backend scaffolding</span>
          <ArrowRightLeftIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}
