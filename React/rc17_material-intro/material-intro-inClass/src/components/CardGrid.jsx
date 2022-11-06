import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
// Meterialdaki Grid elementini kullanmak için import ettiik 
import data from "../data";
//☝ verimiz datada oldugu için burada da kullanmk istediğimiz için buraya import ediyoruz ilk önce.
// sOnrada render etcez yani ekrana bascaz bunun içinde iterasyon lazım 
//! 👇 Burada ki amacımız bootstrap daki card yapılarını material da nasıl yaparız onu görücez 
export default function CardGrid() {
  return (
    <>
      <Typography variant="h4" color="error" align="center" mt={4} mb={4}>
        CARD And Grid
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Burada da import ettiğimiz grid yapısını kullandık bu grid yapısı container olan*/}
        {data.map((card) => {
          // ☝ jsx içerisinde bir statemnt yazmak istiyorsak süslü içinde kullanıyorduk bu yüzden süslü içine aldık .
          //! datanın içinde dolasıcagımızdan {data.map} dedik.sonrasında da arrow func inimizi kullanıyoruz 
          const { id, text, img, name } = card;
          // ☝ datanın içinde kullanacak olduklarımızı buraya cektim ekranda bunları görmek istiyorum diye dest yaparak 
          return (
            // ☝ benim yaptıgım arrow func return u
            <Grid item xs={12} sm={6} md={4} key={id}>
              {/* col-row mantıgı için xs12 diyerek  her bir resim tek tek alt alta görünsün dedik.
              sm 6 da resim ikişerli görünsün dedik.
              md ekranda yani geniş medium ekranda resimler 3 tane görünsün dedik  */}
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={img}
                    alt="img" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
