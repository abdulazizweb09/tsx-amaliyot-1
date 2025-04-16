import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
interface Value {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

function Home() {
    let [data, setData] = useState<Value[]>([])
    
    useEffect(function() {
        axios.get(`https://dummyjson.com/product`)
            .then(response => {
            if (response.status === 200) {
                setData(response.data.products)
            }
            })
            .catch(err => {
            console.log(err);
        })
    },[])
  return (
    <Box>
          <Navbar />
          <Box>
              {data.length > 0 && data.map((value, index) => {
                  return (
                    <Box key={index}>
                      <Box>{value.title}</Box>
                      <Box>{value.img}</Box>
                      <Box>{value.id}</Box>
                      <Box>{value.price}</Box>
                    </Box>
                  );
              })}
          </Box>
    </Box>
  );
}

export default Home;
