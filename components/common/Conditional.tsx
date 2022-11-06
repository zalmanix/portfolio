interface ConditionalProps {
  condition: boolean;
  trueRender: JSX.Element;
  falseRender?: JSX.Element;
}

export const Conditional = ({
  condition,
  trueRender,
  falseRender = null,
}: ConditionalProps) => {
  if (condition) return trueRender;
  return falseRender;
};
