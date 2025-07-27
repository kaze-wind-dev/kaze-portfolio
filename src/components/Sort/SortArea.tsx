import { MdClose } from "react-icons/md";
import type { SortKey } from "@/types/zenn";
import styles from "./index.module.scss";

export type SelectAreaOption = {
  label: string;
  value: SortKey;
};
const selectAreaOptions: SelectAreaOption[] = [
  {
    label: "投稿順",
    value: "published_at",
  },
  {
    label: "いいね数",
    value: "liked_count",
  },
];

export interface SortAreaProps {
  handleSelectArea: (e: React.MouseEvent) => void;
  isSelectAreaOpen: boolean;
  sortSelectAreaRef: React.RefObject<HTMLDivElement | null>;
  handleSort: (value: SortKey) => void;
  sortKey: SortKey;
}

const SortArea = ({
  handleSelectArea,
  isSelectAreaOpen,
  sortSelectAreaRef,
  handleSort,
  sortKey,
}: SortAreaProps) => {
  return (
    <div
      className={`${styles["c-sort-select__area"]} ${
        isSelectAreaOpen && styles["c-sort-select__area--active"]
      }`}
      ref={sortSelectAreaRef}
    >
      <button
        className={`${styles["c-sort__close-button"]}`}
        onClick={handleSelectArea}
      >
        <MdClose className={`${styles["c-sort__close-button__icon"]}`} />
      </button>
      {selectAreaOptions.map((options) => {
        return (
          <div
            className={`${styles["c-sort-select__item"]} ${
              options.value === sortKey &&
              styles["c-sort-select__item--current"]
            }`}
            key={options.value}
            onClick={() => {
              handleSort(options.value);
            }}
          >
            {options.label}
          </div>
        );
      })}
    </div>
  );
};

export default SortArea;
