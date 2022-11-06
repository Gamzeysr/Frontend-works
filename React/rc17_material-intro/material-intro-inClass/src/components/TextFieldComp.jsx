import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <Container>
        <Typography variant="h4" color="secondary.dark" align="center" mt={4}>
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          {/* ☝Burada ki text-align center i submit butonu ortalansın diye verdik yani ortak olan divimize verdik bi nevi. */}
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            //☝ email butonu sayfa boyu kaplasın diye fullWidth metodunu kullanduk.Yani container ne kadarsa %100 ü kadar kapa dedik.
            error={error}
            //☝ Buradaki error propsu yukarıda tanımladıgım const [error,setError] = useState() e baglı olarak calısıcak 
            helperText={error && "Incorrect email format"}
          // helper text de e diyoruz ki error varsa error true ise bize Incorret email format hata mesajı verdir.
          // Yukarıda ki useState true false durumuna göre şekil alıyor.
          />
          <TextField
            margin="normal"
            id="password"
            label="Pasword"
            placeholder="Enter your password"
            fullWidth
            error={error}
            helperText={error && "Incorrect password"}
          />

          <Button
            variant="contained"
            lr
            sx={{ mt: 3, backgroundColor: "secondary.dark" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
