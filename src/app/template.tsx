import type { ReactNode } from "react";

// Re-mounts on every navigation, so each page gets the enter animation.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
