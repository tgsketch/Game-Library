import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styles from "./Like.module.css";

interface Props {
  size?: number;
  onClick: () => void;
}

const Like = ({ size = 24, onClick }: Props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => {
          setIsActive(!isActive);
          onClick();
        }}
      >
        {isActive ? (
          <BsHeart color="gray" size={size} />
        ) : (
          <BsHeartFill color="red" size={size} />
        )}
      </button>
    </>
  );
};

export default Like;
