import React from "react";
import styles from "./accordion.module.css";

const Accordion = (props) => {
  const { data, expandedId, handleClick, handleSelected, checked } = props;

  const handleChange = (data) => {
    handleSelected(data);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.query} onClick={() => handleClick(data.id)}>
        <input
          type="checkbox"
          checked={checked}
          onClick={(e) => e.stopPropagation()}
          onChange={() => {
            handleChange(data.id);
          }}
        />
        <p>{data?.query}</p>
      </div>
      <div className={expandedId !== data?.id && styles.disable}>
        <p>{data?.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
