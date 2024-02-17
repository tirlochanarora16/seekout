import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Member } from "../../types/member";
import { memberFormChangeHandler } from "../../app/slices/member";
import styles from "./styles.module.css";

interface IProps {
  type: string;
  placeholder: string;
  id: keyof Member;

  required: boolean;
}

const Input: React.FC<IProps> = ({ type, placeholder, id, required }) => {
  const dispatch = useAppDispatch();
  const { memberForm } = useAppSelector((state) => state.member);

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (id === "phone" && (isNaN(+value) || value.trim().length > 10)) {
      e.preventDefault();
      return;
    }
    dispatch(
      memberFormChangeHandler({
        id,
        value,
      })
    );
  };

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={memberForm[id]}
      onChange={inputOnChangeHandler}
      className={styles.input}
    />
  );
};

export default Input;
