import styles from "./Input.module.css"

export const Input = ({ label, id, name, children }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label}>{children}</label>
      <div>
        <input id={id} name={name} required />
      </div>
    </div>
  );
};
