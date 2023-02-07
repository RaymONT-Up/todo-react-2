import styles from "./Line.module.css";

const Line = props => {
  const classes = `${styles.line} ${!!props.className ? props.className : ""}`;

  return <div className={classes}></div>;
};
export default Line;
