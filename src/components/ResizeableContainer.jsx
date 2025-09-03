import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function ResizableContainer({
  children,
  title = "Page",
  command = "npx coregen@latest",
}) {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Top bar with copy button */}
      <div className="h-12 w-full border rounded-t-lg flex items-center justify-between text-sm px-5 bg-muted">
        <p>{title}</p>
        <div className="flex items-center gap-4">
          <p className="text-sm font-mono">{command}</p>
          <Button onClick={handleCopy} size="sm" variant="outline">
            {isCopy ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Resizable preview */}
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-b-lg border md:min-w-[350px] max-w-full"
      >
        <ResizablePanel defaultSize={97} minSize={25}>
          <div className="h-[80vh] w-full overflow-hidden bg-background">
            <div className="h-full w-full overflow-y-auto">
              <div className="min-h-full">{children}</div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={3}></ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
