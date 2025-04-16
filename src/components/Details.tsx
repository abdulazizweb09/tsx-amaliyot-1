import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
interface Data{
     title: string;
 description: string;
 price: number;
 brand: string;
 category: string;
 thumbnail: string;
 rating: number;
 stock: number;
}
function Details() {
  let [data, setData] = useState<Data|null>(null);
  let id = useParams().id;
  console.log(id);
  useEffect(
    function () {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          if (response.status == 200) {
            return setData(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [id]
  );
  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        {data && (
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              p: 3,
              gap: 4,
              borderRadius: 4,
              boxShadow: "none",
              bgcolor: "background.paper",
            }}
          >
            <CardMedia
              component="img"
              image={data.thumbnail}
              sx={{
                width: { xs: "100%", md: 350 },
                height: "auto",
                borderRadius: 3,
                boxShadow: 2,
                objectFit: "cover",
              }}
            />

            <CardContent sx={{ flex: 1, p: 0 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {data.title}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {data.description}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography fontWeight={500}>Brend:</Typography>
                  <Typography>{data.brand}</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography fontWeight={500}>Kategoriya:</Typography>
                  <Typography>{data.category}</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography fontWeight={500}>Narxi:</Typography>
                  <Typography sx={{ color: "green" }}>${data.price}</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography fontWeight={500}>Reyting:</Typography>
                  <Typography>{data.rating} ⭐</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography fontWeight={500}>Omborda:</Typography>
                  <Typography>{data.stock} dona</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}

export default Details;
