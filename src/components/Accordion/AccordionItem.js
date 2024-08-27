import React from "react";

const AccordionItem = ({ title, description, isOpen, setIsOpen }) => {
  return (
    <div className="p-2 border border-black">
      <div
        className="font-bold bg-slate-200 flex justify-between cursor-pointer"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        {isOpen ? <span>⬆</span> : <span>⬇</span>}
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
};

export default AccordionItem;
