import { ReactElement } from "react";
import { Images } from "../types";
import s from "./ImageCard.module.css";

type ImageCardProps = {
  item: Images;
  openModal: (id: string) => void;
};

const ImageCard = ({ openModal, item }: ImageCardProps): ReactElement => {
  return (
    <div>
      <img
        onClick={() => openModal(item.id)}
        className={s.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};
export default ImageCard;
