import { PiArrowsDownUp } from "react-icons/pi";
import type { Order, SortKey } from "@/types/zenn";
import type { SortAreaProps } from "./SortArea";
import SortOrderButton from "./SortOrderButton";
import SortArea from "./SortArea";
import styles from "./index.module.scss";

type SortProps = {
  handleOrder: () => void;
  order: Order;
  sortKey: SortKey;
  className?: string;
} & SortAreaProps;

const Sort = ({
  handleSelectArea,
  isSelectAreaOpen,
  sortSelectAreaRef,
  handleSort,
  handleOrder,
  order,
  sortKey,
  className,
}: SortProps) => {
  return (
    <div className={`${styles["c-sort"]} ${className || ""}`}>
      <div className={`${styles["c-sort-select"]}`} onClick={handleSelectArea}>
        <div
          className={`${styles["c-sort-select__label"]} ${
            isSelectAreaOpen && styles["c-sort-select__label--active"]
          }`}
        >
          並び替え
          <PiArrowsDownUp
            className={`${styles["c-sort-select__label-icon"]}`}
          />
        </div>
        <SortArea
          handleSelectArea={handleSelectArea}
          isSelectAreaOpen={isSelectAreaOpen}
          sortSelectAreaRef={sortSelectAreaRef}
          handleSort={handleSort}
          sortKey={sortKey}
        />
      </div>
      <SortOrderButton onClick={handleOrder} order={order} />
    </div>
  );
};

export default Sort;
