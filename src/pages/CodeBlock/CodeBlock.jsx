import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Highlight from "react-highlight";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import parse from "html-react-parser";
import styles from "./styles.module.css";
import { BasicAccordion } from "../../components/BasicAccordion/BasicAccordion";
import { MultiLineTextField } from "../../components/TextField/MultiLineTextField";
import { CodeBoard } from "../../components/CodeBoard/CodeBoard";
import { Box } from "@mui/material";
import io from "socket.io-client";

export const CodeBlock = () => {
  hljs.registerLanguage("javascript", javascript);
  const { id } = useParams();
  const [codeBlock, setCodeBlock] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [isMentor, setIsMentor] = useState(false);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCodeBlock = async () => {
      try {
        const response = await axios.get(
          `https://moveoback.up.railway.app/codeblocks/${id}`
        );
        setCodeBlock(response.data);
      } catch (error) {
        console.error("Error fetching code block:", error);
      }
    };

    fetchCodeBlock();
  }, []);

  const handleCount = (count) => {
    console.log(isMentor, count);
    if (!isMentor && count === 1) {
      setIsMentor(true);
    }
    console.log("count from serverSocket", count);
  };
  useEffect(() => {
    const newSocket = io("https://moveoback.up.railway.app/", {
      reconnectionDelay: 1000,
      reconnection: true,
      reconnectionAttemps: 10,
      transports: ["websocket"],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false,
    });

    
    newSocket.on("count", (count) => {
      handleCount(count);
    });
    newSocket.on("message", (msg) => {
      if(!isMentor) setMessage(msg);
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        {isMentor ? <h1>Mentor</h1> : <h1>Student</h1>}
        <h1>{codeBlock.title}</h1>
        <img
          src={codeBlock.image_url}
          alt="code block"
          style={{ width: "10%", borderRadius: "20px" }}
        ></img>
        <div className={styles["code-block"]}>
          <p>
            <h1>Description:</h1> {codeBlock.description}
          </p>
          <p>
            <h1>Your task is:</h1> {codeBlock.task}
          </p>
          <Box sx={{ width: "100%" }}>
            {codeBlock.code && (
              <CodeBoard
                setIsCorrect={setIsCorrect}
                solution={codeBlock.code}
                readOnly={isMentor}
                socket={socket}
                defaultValue={message}
                setMessage={setMessage}
              />
            )}
          </Box>
          {isCorrect && (
            <div className={styles["correct"]}>
              <h1>Correct!!!</h1>
            </div>
          )}
          <div style={{ width: "100%" }}>
            <BasicAccordion title="Answer - but first try yourself">
              <Highlight className="javascript">{codeBlock.code}</Highlight>
            </BasicAccordion>
          </div>
        </div>
      </div>
    </>
  );
};
