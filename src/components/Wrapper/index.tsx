import styles from "./styles.module.css";
import { IoAdd } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { changeScreen } from "../../app/slices/member";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface IProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({ children }) => {
  const { currentScreen } = useAppSelector((state) => state.member);
  const dispatch = useAppDispatch();

  const wrapperIcon =
    currentScreen === "list" ? (
      <IoAdd fontSize={36} />
    ) : (
      <RxCross2 fontSize={36} />
    );

  const changeScreenHandler = () => {
    if (currentScreen === "list") {
      dispatch(changeScreen("add"));
    } else {
      dispatch(changeScreen("list"));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperIcon} onClick={changeScreenHandler}>
        {wrapperIcon}
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
