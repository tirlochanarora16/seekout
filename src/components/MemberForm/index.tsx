import Input from "../Input";
import styles from "./styles.module.css";

const MemberForm = () => {
  return (
    <div className={styles.memberForm}>
      <p className={styles.memberForm_title}>Info</p>
      <Input
        id="firstName"
        type="text"
        placeholder="Enter First name"
        required={true}
      />
      <Input
        id="lastName"
        type="text"
        placeholder="Enter Last name"
        required={true}
      />
      <Input
        id="email"
        type="email"
        placeholder="Enter E-mail"
        required={true}
      />
      <Input id="phone" type="text" placeholder="Enter phone" required={true} />
      <p className={styles.memberForm_title}>Role</p>
    </div>
  );
};

export default MemberForm;
