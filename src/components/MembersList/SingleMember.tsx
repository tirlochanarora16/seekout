import { useAppDispatch } from "../../app/hooks";
import { changeScreen, setFormData } from "../../app/slices/member";
import { Member, MemberType } from "../../types/member";
import styles from "./styles.module.css";
import { FaRegCircleUser } from "react-icons/fa6";

interface IProps {
  member: Member;
  id: number;
}

const SingleMember: React.FC<IProps> = ({ member, id }) => {
  const dispatch = useAppDispatch();

  const { firstName, lastName, role, email, phone } = member;

  const fullName = `${firstName} ${lastName} ${
    role === MemberType.ADMIN ? "(Admin)" : ""
  }`;

  const changeScreenHandler = () => {
    dispatch(changeScreen("edit"));
    dispatch(setFormData(member));
  };

  return (
    <div className={styles.singleMember} onClick={changeScreenHandler}>
      <FaRegCircleUser size={46} />
      <div className={styles.singleMember_info}>
        <p className={styles.singleMember_name}>{fullName}</p>
        <p className={styles.singleMember_phone}>{phone}</p>
        <p className={styles.singleMember_email}>{email}</p>
      </div>
    </div>
  );
};

export default SingleMember;
