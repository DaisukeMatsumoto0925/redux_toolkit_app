import React, { FC } from "react";
import styled from "@emotion/styled";

const EmotionComponent: React.FC = () => {
  interface ComponentProps {
    className?: string;
    label: boolean;
  }

  const Component: FC<ComponentProps> = ({ label, className }) => (
    <div className={className}>{label ? "true" : "false"}</div>
  );

  const StyledComponent0 = styled(Component)`
    color: ${({ label }) => (label ? "red" : "green")};
  `;

  const StyledComponent1 = styled(Component)({
    color: "red",
  });

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
