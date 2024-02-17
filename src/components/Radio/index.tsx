import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
  const { memberForm } = useAppSelector((state) => state.member);
  const dispatch = useAppDispatch();

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value as MemberType);

    dispatch(
      memberFormChangeHandler({
        id: name,
        value,
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
        value={memberForm.role}
        required
        className={styles.radio_input}
        onChange={inputOnChangeHandler}
        checked={memberForm.role === value}
      />
    </div>
  );
};

export default Radio;
