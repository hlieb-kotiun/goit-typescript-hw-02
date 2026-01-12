import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { searchImagesByParams } from "../../unsplash-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import s from "./App.module.css";
import LoadMore from "../LoadMore/LoadMore";
import ImageModal from "../ImageModal/ImageModal";
// import Modal from "react-modal";

type Images = {
  id: string,

}

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImgId, setSelectedImgId] = useState<string | null>(null);

  console.log("images : ", images);

  useEffect(() => {
    if (query === "") {
      return;
    }
    const fetchImages = async(): Promise<void> => {
      try {
        setError(false);
        setLoader(true);

        const results = await searchImagesByParams(query, page);
        console.log(results.data.results);

        setImages((prev: ) => [...prev, ...results.data.results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleQuery = (userQuery: string) => {
    setImages([]);
    setPage(1);
    setQuery(userQuery);
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  // Modal toggle

  const openModal = (id: string): void => {
    setSelectedImgId(id);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <SearchBar setQuery={handleQuery} query={query} />
      <h2>Gallery</h2>
      {images.length === 0 ? (
        <p className={s.message}>There is no images yet!</p>
      ) : (
        <ImageGallery openModal={openModal} images={images} />
      )}
      {error && <p>Opss, something went wrong! Try again later</p>}

      {loader && <p>Loading...</p>}
      {images.length > 0 && <LoadMore handleLoadMore={handleLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          selectedImgId={selectedImgId}
          images={images}
        />
      )}
      {/* <button onClick={openModal}>Open Modal</button> */}
    </div>
  );
}

export default App;
