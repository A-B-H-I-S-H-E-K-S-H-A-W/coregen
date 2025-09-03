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
    <>
      <div className="h-12 w-full border rounded-t-lg flex items-center justify-between text-sm px-5">
        <div className="">
          <p>{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm">{command}</p>
          </div>
          <div>
            <Button onClick={handleCopy} size={"sm"}>
              {isCopy ? <Check /> : <Copy />}
            </Button>
          </div>
        </div>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-full rounded-b-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={95}>{children}</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={5}></ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
