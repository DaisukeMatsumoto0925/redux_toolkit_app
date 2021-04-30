import React, { FC } from "react";
import styled from "@emotion/styled";

const EmotionComponent: React.FC = () => {
  interface ComponentProps {
    className?: string;
    label: boolean;
  }

  const Component: FC<ComponentProps> = ({ label, className }) => (
    <div className={className}>
      {label ? "true" : "false"}
      {console.log(label)}
    </div>
  );

  const StyledComponent0 = styled(Component)`
    color: ${({ label }) => (label === true ? "red" : "blue")};
  `;

  const StyledComponent1 = styled(Component)`
    color: ${({ label }) => (label === true ? "red" : "blue")};
  `;

  const isExpired = true;
  return (
    <div>
      1
      <StyledComponent0 label={isExpired} />
      2
      <StyledComponent1 label={false} />
    </div>
  );
};

export default EmotionComponent;
