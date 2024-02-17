import styles from "./styles.module.css";

interface IProps {
  title: string;
  subtitle: string;
}

const BoxHeader: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.box}>
      <h1 className={styles.box_title}>{title}</h1>
      <h3 className={styles.box_subtitle}>{subtitle}</h3>
    </div>
  );
};

export default BoxHeader;
