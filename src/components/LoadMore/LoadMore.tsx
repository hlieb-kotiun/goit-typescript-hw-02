import { ReactElement } from "react";
import s from "./LoadMore.module.css";

type LoadMoreProps = {
  handleLoadMore: () => void;
};

const LoadMore = ({ handleLoadMore }: LoadMoreProps): ReactElement => {
  return (
    <button className={s.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
};
export default LoadMore;
