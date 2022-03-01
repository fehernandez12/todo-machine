import React from "react";
import { Children } from "react/cjs/react.production.min";

function TodoHeader({children}) {
  return (
    <header>
      {children}
    </header>
  );
}

export { TodoHeader };