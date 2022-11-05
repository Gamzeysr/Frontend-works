import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        {/* burdada maxWidth metodu ile container ımı medium  a kadar büyüt demiş oldum  */}
        {/* Yani aslında boostrapda mediaquery i burada sekil verirtirdim. */}
        <Typography
          variant="h4"
          //☝ yazıyı h4 kalınlıgında yaptı.
          component="h6"
          // yazının kesndisi h6 elementi oluyor component=h6 diyerek 
          align="center"
          //☝ bu align ilede yazıyı ortaladık.
          mt={4}
          // mt ile yazıya margin-top propu verdik .yazıyı yukarıdan biraz daha açmış oldu.
          color="error"
        //☝ kırmızı renk veriyor 
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          // ☝ yazıları iki yana yaslattık 
          mt={4}
          sx={{
            backgroundColor: "lightgreen",
            color: "#eee",
            fontSize: "1.4rem",
          }}
        // Bu sekilde sx ile backgorund resngi color rengi bir cok sey verebiliriz.
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          aspernatur et placeat ab aliquid, consectetur perspiciatis numquam
          voluptates nulla quisquam!
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          debitis quo omnis porro labore a consequuntur beatae quam assumenda
          dicta explicabo nam illo nemo, provident, veniam aliquid aut tenetur
          accusamus?
        </Typography>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            // width: "50%",
            // justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
