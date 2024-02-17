import { useAppSelector } from "../../app/hooks";
import SingleMember from "./SingleMember";
import styles from "./styles.module.css";

const MembersList = () => {
  const { members } = useAppSelector((state) => state.member);

  return (
    <div className={styles.membersList}>
      {members.map((member, index) => (
        <SingleMember key={index} member={member} />
      ))}
    </div>
  );
};

export default MembersList;
