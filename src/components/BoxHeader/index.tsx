import styles from "./styles.module.css";

interface IProps {
  title: string;
  subtitle: string;
}

const BoxHeader: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.box}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default BoxHeader;
