import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type InteractiveImageSelectedType = string | null;

export type InteractiveImageContextType = {
  selected: InteractiveImageSelectedType;
  setSelected: Dispatch<SetStateAction<InteractiveImageSelectedType>>;
};

const InteractiveImageContext = createContext<InteractiveImageContextType>({
  selected: null,
  setSelected: () => {},
});

export default InteractiveImageContext;

export const useInteractiveImageContext = () => {
  const context = useContext(InteractiveImageContext);

  if (!context) {
    throw new Error("useInteractiveImageContext must be used within a InteractiveImageContext provider");
  }

  return context;
};
