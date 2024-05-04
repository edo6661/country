export const baseTransition = {
  transition: {
    duration: 0.3,
  },
};
export const baseVarAppear = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const baseVarProps = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const baseAllProps = {
  variants: baseVarAppear,
  ...baseVarProps,
  ...baseTransition,
};

export const resultVars = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

export const resultAllProps = {
  variants: resultVars,
  ...baseVarProps,
};
