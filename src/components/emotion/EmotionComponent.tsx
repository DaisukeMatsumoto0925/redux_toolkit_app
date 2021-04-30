import React, { FC } from "react";
import styled from "@emotion/styled";

const EmotionComponent: React.FC = () => {
  interface ComponentProps {
    className?: string;
    label: string;
  }

  const Component: FC<ComponentProps> = ({ label, className }) => (
    <div className={className}>{label}</div>
  );

  const StyledComponent0 = styled(Component)`
    color: ${(props) => (label === "Important" ? "red" : "green")};
  `;

  const StyledComponent1 = styled(Component)({
    color: "red",
  });

  const App = () => (
    <div>
      <StyledComponent0 label="Important" />
      <StyledComponent1 label="Yea! No need to re-type this label prop." />
    </div>
  );

  return <div></div>;
};

export default EmotionComponent;
