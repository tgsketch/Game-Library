import styles from "./Button.module.css";

interface Props {
  text: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClick: () => void;
}

function Button({ text, color = "primary", onClick }: Props) {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
