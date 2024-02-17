import { useAppDispatch } from "../../app/hooks";
import { memberFormChangeHandler } from "../../app/slices/member";
import { MemberFormData, MemberType } from "../../types/member";
import styles from "./styles.module.css";

interface IProps {
  id: string;
  label: string;
  name: string;
  value: MemberType;
}

const Radio: React.FC<IProps> = ({ id, label, name, value }) => {
  const dispatch = useAppDispatch();

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      memberFormChangeHandler({
        id,
        value: e.target.value,
      } as MemberFormData)
    );
  };

  return (
    <div className={styles.radio}>
      <label htmlFor={id} className={styles.radio_label}>
        {label}
      </label>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        required
        className={styles.radio_input}
        onChange={inputOnChangeHandler}
      />
    </div>
  );
};

export default Radio;
