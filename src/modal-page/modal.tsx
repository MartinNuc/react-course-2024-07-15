import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: PropsWithChildren) {

  return createPortal((
      <div style={{
        position: "fixed",
         padding: '20px',
         top: '50%',
         left: '50%',
         border: '1px solid black',
         background: 'white' 
      }}>
        {children}
      </div>
    ), document.body);
  }