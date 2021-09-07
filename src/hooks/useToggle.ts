import { useState } from "react";

export const useToggle = (initialState: any) => {
  const [isToggled, setToggle] = useState(initialState);
  const toggle = () => setToggle((prevState: any) => !prevState);
  // return [isToggled, toggle];
  return { isToggled, setToggle, toggle };
};
