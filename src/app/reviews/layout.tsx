import React, { ReactNode } from "react";

// the child is the page file
function ReviewLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="flex">
        <p>nav 1</p>
        <p>nav 1</p>
      </nav>
      {children}
    </div>
  );
}

export default ReviewLayout;
