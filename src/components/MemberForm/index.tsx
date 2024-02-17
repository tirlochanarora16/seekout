import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addMember,
  changeScreen,
  deleteMember,
  resetFormData,
  updateMember,
} from "../../app/slices/member";
import { MemberType } from "../../types/member";
import Input from "../Input";
import Radio from "../Radio";
import styles from "./styles.module.css";

const MemberForm = () => {
  const dispatch = useAppDispatch();
  const { currentScreen, memberForm } = useAppSelector((state) => state.member);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentScreen === "add") {
      dispatch(addMember(memberForm));
    } else if (currentScreen === "edit") {
      dispatch(updateMember(memberForm));
    }
    dispatch(changeScreen("list"));
  };

  const deleteMemberHandler = () => {
    dispatch(deleteMember());
    dispatch(changeScreen("list"));
  };

  // clearing form data when component umounts
  useEffect(() => {
    return () => {
      dispatch(resetFormData());
    };
  }, []);

  return (
    <div className={styles.memberForm}>
      <form onSubmit={formSubmitHandler}>
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
        <Input
          id="phone"
          type="text"
          placeholder="Enter phone"
          required={true}
        />
        <p className={styles.memberForm_title}>Role</p>
        <Radio
          value={MemberType.REGULAR}
          name="role"
          id="regular"
          label="Regular - Can't delete members"
        />
        <Radio
          value={MemberType.ADMIN}
          name="role"
          id="admin"
          label="Admin - Can delete members"
        />
        <div className={styles.memberForm_buttons_container}>
          {currentScreen === "edit" ? (
            <button
              type="button"
              className={`${styles.memberForm_btn} ${styles.memberForm_btn_delete}`}
              onClick={deleteMemberHandler}
            >
              Delete
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="submit"
            className={`${styles.memberForm_btn} ${styles.memberForm_btn_save}`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
