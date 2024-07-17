import { useRef } from "react";
import { Modal, ModalApi } from "./modal"

export const ModalPage = () => {

  const modalRef = useRef<ModalApi | null>(null);

  return <div>
    <button onClick={() => modalRef.current?.open()}>Open modal</button>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis neque tempora voluptatem autem. Esse eum maxime officiis minima expedita laboriosam molestiae at voluptas error deserunt aliquid amet, dignissimos quae sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consectetur nihil veniam voluptatibus rerum minus molestiae in numquam voluptas assumenda, perspiciatis voluptatum ratione similique obcaecati nisi. Explicabo animi consequatur architecto!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis neque tempora voluptatem autem. Esse eum maxime officiis minima expedita laboriosam molestiae at voluptas error deserunt aliquid amet, dignissimos quae sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consectetur nihil veniam voluptatibus rerum minus molestiae in numquam voluptas assumenda, perspiciatis voluptatum ratione similique obcaecati nisi. Explicabo animi consequatur architecto!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis neque tempora voluptatem autem. Esse eum maxime officiis minima expedita laboriosam molestiae at voluptas error deserunt aliquid amet, dignissimos quae sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consectetur nihil veniam voluptatibus rerum minus molestiae in numquam voluptas assumenda, perspiciatis voluptatum ratione similique obcaecati nisi. Explicabo animi consequatur architecto!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis neque tempora voluptatem autem. Esse eum maxime officiis minima expedita laboriosam molestiae at voluptas error deserunt aliquid amet, dignissimos quae sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consectetur nihil veniam voluptatibus rerum minus molestiae in numquam voluptas assumenda, perspiciatis voluptatum ratione similique obcaecati nisi. Explicabo animi consequatur architecto!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis neque tempora voluptatem autem. Esse eum maxime officiis minima expedita laboriosam molestiae at voluptas error deserunt aliquid amet, dignissimos quae sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consectetur nihil veniam voluptatibus rerum minus molestiae in numquam voluptas assumenda, perspiciatis voluptatum ratione similique obcaecati nisi. Explicabo animi consequatur architecto!
    <Modal ref={modalRef}>
      <h1>Hello</h1>
      <p>I am modal</p>
    </Modal>

  </div>
}