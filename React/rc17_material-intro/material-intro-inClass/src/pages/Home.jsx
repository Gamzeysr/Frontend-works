import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
import MakeStylesComp from "../components/MakeStylesComp";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#21a415",
        light: "#51f346",
        dark: "#46630c",
      },
      secondary: {
        main: teal[500],
        // ☝Burada da secondry rengi defaultu yesil ama ben onu mavi olarak değiştirdim 
      },
    },
  });
  // Burada renkleri tanımlayıp başka yerlerde kullanabilirz ☝ 
  // renk paletini de bulmak için material ui den  pallette yazdık oraya bakarak yaptık bunu☝
  return (
    // tanımladıgım rengi kullanabilmek için buThemeProvider theme={theme} deyip sarmallıyoruz 
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
      <MakeStylesComp />
    </ThemeProvider>
  );
};

export default Home;
