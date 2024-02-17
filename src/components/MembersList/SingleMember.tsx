import { Member, MemberType } from "../../types/member";
import styles from "./styles.module.css";
import { FaRegCircleUser } from "react-icons/fa6";

interface IProps {
  member: Member;
}

const SingleMember: React.FC<IProps> = ({ member }) => {
  const { firstName, lastName, role, email, phone } = member;

  const fullName = `${firstName} ${lastName} ${
    role === MemberType.ADMIN ? "(Admin)" : ""
  }`;

  return (
    <div className={styles.singleMember}>
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
