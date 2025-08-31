import { AnimatedSpan, Terminal, TypingAnimation } from "../other/Terminal";

export function TerminalCard() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Terminal>
        <TypingAnimation className={"dark:text-foreground text-background"}>
          &gt; npx coregen@latest init fullstack
        </TypingAnimation>

        <AnimatedSpan className="text-green-500">
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Setting up Next.js & Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Writing components.json.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Configuring frontend & globals.css.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Initializing backend Express + API routes.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Setting up database with Prisma & migrations.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500">
          <span>ℹ Updated files:</span>
          <span className="pl-2">- lib/utils.ts</span>
          <span className="pl-2">- server/index.ts</span>
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground">
          Success! Fullstack project initialization completed.
        </TypingAnimation>

        <TypingAnimation className="text-muted-foreground">
          Run: npm run dev
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
