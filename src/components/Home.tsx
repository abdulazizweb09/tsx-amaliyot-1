import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Value } from "./Interface";


function Home() {
    let [data, setData] = useState<Value[]>([]);
    let navigate=useNavigate()

        function details(id:number) {
            navigate(`/details/${id}`);
        }
  useEffect(function () {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {data.map((value) => (
              <Card
                  onClick={()=>{details(value.id)}}
              key={value.id}
              sx={{
                width: 250,
                borderRadius: 3,
                boxShadow: 3,
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={value.thumbnail}
                alt={value.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${value.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
