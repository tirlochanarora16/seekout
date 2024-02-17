import styles from "./styles.module.css";
import { IoAdd } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface IProps {
  children: React.ReactNode;
  wrapperAction: "add" | "close";
  wrapperActionHandler: () => void;
}

const Wrapper: React.FC<IProps> = ({
  children,
  wrapperAction,
  wrapperActionHandler,
}) => {
  const wrapperIcon =
    wrapperAction === "add" ? (
      <IoAdd fontSize={36} />
    ) : (
      <RxCross2 fontSize={36} />
    );

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.wrapperIcon}
        onClick={wrapperActionHandler}
        title={wrapperAction}
      >
        {wrapperIcon}
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
