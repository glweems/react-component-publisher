import React from "react";

interface ExampleProps {
  msg: string;
}

const Example: React.FC<ExampleProps> = ({ msg }) => {
  return <div>{msg}</div>;
};

Example.displayName = "Example";

export default Example;
