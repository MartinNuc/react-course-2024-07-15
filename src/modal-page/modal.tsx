import { forwardRef, PropsWithChildren, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

export type ModalApi = {
  open: () => void;
  close: () => void;
}

export const Modal = forwardRef<ModalApi, PropsWithChildren>(function Modal({ children }: PropsWithChildren, ref) {

  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false)
  }), []);

  if (!isVisible) { return null; }

  return createPortal((
      <div style={{
        position: "fixed",
         padding: '20px',
         top: '50%',
         left: '50%',
         border: '1px solid black',
         background: 'white' 
      }}>
        <button onClick={() => setVisible(false)}>X</button>
        {children}
      </div>
    ), document.body);
  });