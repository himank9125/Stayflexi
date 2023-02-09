import { useEffect, useState } from "react";
import "./App.css";
import Singlecard from "./Singlecard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
export const apiPrefix = "https://www.omdbapi.com/?apikey=7305e245&type=movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [inp, setInp] = useState("");
  const [search, setSearch] = useState("welcome");

  const sortingAss = () => {
    const arr = [...movies];
    arr.sort((a, b) => {
      return a.Year - b.Year;
    });
    setMovies(arr);
  };
  const sortingDsc = () => {
    const arr = [...movies];
    arr.sort((a, b) => {
      return b.Year - a.Year;
    });
    setMovies(arr);
  };

  const fetchMovies = () => {
    let url = `${apiPrefix}&s=${search}`;
    fetch(url)
      .then((elm) => elm.json())
      .then((elm) => {
        setMovies(elm.Search);
        console.log(elm.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, [search]);
  return (
    <div className="App">
      <div className="topnav">
        <div className="search-container">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              value={inp}
              onChange={(e) => {
                setInp(e.target.value);
              }}
            />
            <button
              className="searchbutton"
              onClick={() => {
                setSearch(inp);
              }}
            >
              <SearchIcon />
            </button>
          </div>

          <div className="buttons">
            <span onClick={sortingAss}>
              <KeyboardArrowUpIcon sx={{ fontSize: "40px" }} />
            </span>
            <span onClick={sortingDsc}>
              <KeyboardArrowDownIcon sx={{ fontSize: "40px" }} />
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="row">
        {movies?.map((elm, idx) => {
          return <Singlecard elm={elm} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default App;
