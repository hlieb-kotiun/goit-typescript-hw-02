import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { FcLike } from "react-icons/fc";
import { IoIosCreate } from "react-icons/io";
import { Images } from "../types";
import { ReactElement } from "react";

type ImageModalProps = {
  closeModal: () => void;
  modalIsOpen: boolean;
  selectedImgId: string | null;
  images: Images[];
};

type Content = {
  [key: string]: string;
};

type Overlay = {
  [key: string]: string;
};

type CustomStyles = {
  content: Content;
  overlay: Overlay;
};

const ImageModal = ({
  closeModal,
  modalIsOpen,
  selectedImgId,
  images,
}: ImageModalProps): ReactElement => {
  Modal.setAppElement("#root");

  const customStyles: CustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  const selectedImage: Images | undefined =
    images && images.find((item) => item.id === selectedImgId);

  const time: Date | undefined =
    selectedImage && new Date(selectedImage.created_at);

  const month: number | undefined = time && time.getMonth();
  const year: number | undefined = time && time.getFullYear();

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          className={s.img}
          src={selectedImage?.urls.regular}
          alt={selectedImage?.alt_description}
        />
        <div className={s.info}>
          <p className={s.txt}>
            <FcLike /> {selectedImage?.likes}
          </p>
          <p className={s.txt}>
            <IoIosCreate /> at {`${month}.${year}`}
          </p>
        </div>
      </Modal>
      ;
    </div>
  );
};
export default ImageModal;
