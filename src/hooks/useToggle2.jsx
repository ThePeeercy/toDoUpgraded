import React, { useState } from "react";

function useToggle2() {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return {
    show,
    toggle,
  };
}

export default useToggle2;
