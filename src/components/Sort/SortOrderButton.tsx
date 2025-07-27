import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import type { Order } from "@/types/zenn";
import styles from "./index.module.scss";

type SortOrderButtonProps = {
  onClick: () => void;
  order: Order;
};

const SortOrderButton = ({ onClick, order }: SortOrderButtonProps) => {
  return (
    <button
      className={`${styles["c-sort__order-button"]}`}
      onClick={onClick}
      aria-label={order === "desc" ? "降順に切り替える" : "昇順に切り替える"}
    >
      {order === "desc" ? "降順" : "昇順"}
      <HiOutlineArrowNarrowDown
        className={`${styles["c-sort__order-button__icon"]} ${
          order === "asc" && styles["c-sort__order-button__icon--asc"]
        }`}
      />
    </button>
  );
};

export default SortOrderButton;
