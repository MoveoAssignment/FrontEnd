import React, { useEffect, useState } from "react";
import CodeBlockCard from "../../components/CodeBlockCard/CodeBlockCard";
import axios from "axios";
import styles from "./styles.module.css";
export const Lobby = () => {
  const [codeBlocks, setCodeBlocks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const codes = await axios.get("http://localhost:6969/codeblocks");
      setCodeBlocks(codes.data);
    };
    fetch();
  }, []);
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles['title']}><h2>Choose code block</h2></div>
        <div className={styles["codeBlocks-container"]}>
          {codeBlocks.map((codeBlock) => {
            return (
              <CodeBlockCard
                key={codeBlock._id}
                title={codeBlock.title}
                code={codeBlock.code}
                image_url={codeBlock.image_url}
                description={codeBlock.description}
                _id={codeBlock._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
