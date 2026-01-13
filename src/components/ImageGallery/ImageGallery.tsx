import { ReactElement } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Images } from "../types";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Images[];
  openModal: (id: string) => void;
};

const ImageGallery = ({
  images,
  openModal,
}: ImageGalleryProps): ReactElement => {
  return (
    <ul className={s.list}>
      {images.map((item) => {
        return (
          <li className={s.item} key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
