import React, { useEffect, useRef, useMemo } from "react";
import "./style.css";
const ContextMenu = ({ open, onClose, triggerElement, children }) => {
  const menuContainerRef = useRef(null);

  // get position of the menu
  const menuPosition = useMemo(() => {
    if (triggerElement) {
      const rects = triggerElement?.getBoundingClientRect();
      return { left: rects.left, top: rects.bottom };
    }
    return { left: 0, top: 0 };
  }, [triggerElement]);

  const handleClick = (e) => {
    if (
      menuContainerRef.current &&
      !menuContainerRef.current?.contains(e.target) &&
      e.target !== triggerElement
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    open && (
      <div
        ref={menuContainerRef}
        style={{
          position: "fixed",
          ...menuPosition,
          paddingTop: "8px",
        }}
      >
        <div className="menu__context border--gray elevated">{children}</div>
      </div>
    )
  );
};

const ContextMenuItem = ({ children, className = "" }) => {
  return <div className={`menu__context-item ${className}`}>{children}</div>;
};

export { ContextMenu, ContextMenuItem };
