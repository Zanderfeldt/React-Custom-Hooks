import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = (initialState = true) => {
  const [isFacingUp, setIsFacingUp] = useState(initialState);
  const flip = () => {
    setIsFacingUp(flipped => !flipped);
  }

  return [isFacingUp, flip]
}

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async (name = "") => {
    const response = await axios.get(`${url}${name}`);
    setData(data => [...data, {...response.data, id: uuid()}]);
  }

  return [data, fetchData]
}


export {useFlip, useAxios};