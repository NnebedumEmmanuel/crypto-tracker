import { makeStyles } from "@material-ui/core";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

//components
import Header from "./component/Header"


//!SECTION Pages ROUTES
import Homepage from "./pages/Homepage"
import CoinPage from "./pages/CoinPage"



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  
  return (
   <BrowserRouter>
   <div className={classes.App}>
    <Header />
    <Routes>
      <Route  path="/" element={<Homepage/>} />
      <Route path="/CoinPage" element={<CoinPage/>} />
    </Routes>
   
   </div>

   </BrowserRouter>
  );
}

export default App;