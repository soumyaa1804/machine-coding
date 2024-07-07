import React, { useEffect, useState } from "react";
import { data as dummyData } from "./dummyData";
import Accordion from "./Accordion";

const AccordionPanel = () => {
  const [expandedId, setExpandedId] = useState(-1);
  const [selectedItems, setSelectedItems] = useState({});
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleAccClick = (id) => {
    if (id === expandedId) {
      setExpandedId(-1);
    } else {
      setExpandedId(id);
    }
  };

  const handleToggle = (id) => {
    if (selectedItems[id]) {
      setSelectedItems({
        ...selectedItems,
        [id]: !selectedItems[id],
      });
    } else {
      setSelectedItems({
        ...selectedItems,
        [id]: true,
      });
    }
  };

  useEffect(() => {
    setDisableSubmit(
      dummyData.some(
        (item) =>
          !selectedItems.hasOwnProperty(item.id) ||
          selectedItems[item.id] === false
      )

      // Same logic using every

      // !dummyData.every(
      //   (item) =>
      //     selectedItems.hasOwnProperty(item.id) &&
      //     selectedItems[item.id] === true
      // )

      // Same logic using reduce

      // !dummyData.reduce(
      //   (acc, curr) => (acc = acc && selectedItems[curr.id]),
      //   true
      // )
    );
  }, [selectedItems]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "start",
          width: "70%",
          textAlign: "left",
          margin: "100px",
        }}
      >
        <h1>Flashcards revision</h1>

        {dummyData?.map((item) => (
          <Accordion
            key={item.id}
            selected={
              selectedItems.hasOwnProperty(item.id)
                ? selectedItems[item.id]
                : false
            }
            data={item}
            expandedId={expandedId}
            handleClick={handleAccClick}
            handleSelected={handleToggle}
            checked={selectedItems[item]}
          />
        ))}

        <button disabled={disableSubmit} type="submit">
          Done All
        </button>
      </div>
    </>
  );
};

export default AccordionPanel;
