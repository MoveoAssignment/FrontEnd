import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export const CodeBlock = () => {
  const {id} = useParams();
  const [codeBlock, setCodeBlock] = useState({})
  useEffect(() => {
    const fetch = async () => {
      const code = await axios.get(`http://localhost:6969/codeblocks/${id}`);
      setCodeBlock(code.data);
    };
    fetch();
  }, []);
  return (
    <div>CodeBlock : {codeBlock.title}</div>
  )
}
