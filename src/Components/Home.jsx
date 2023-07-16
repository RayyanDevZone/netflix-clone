import React, { useEffect, useState } from "react";
import "./Home.scss";
import Row from "./Row";
import axios from "axios";
import { Link } from "react-router-dom";

const apikey = "29120d675aee6b84fe0293d1546e688a";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowplaying = "now_playing";
const popular = "popular";
const toprated = "top_rated";

const Home = () => {
  const [upcming, setupcming] = useState([]);
  const [nwplng, setnwplng] = useState([]);
  const [pplr, setpplr] = useState([]);
  const [tpr, settpr] = useState([]);
  const [genre, setgenre] = useState([]);
  useEffect(() => {
    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setupcming(results);
    };
    fetchupcoming();

    const fetchnowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`);
      setnwplng(results);
    };
    fetchnowplaying();

    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setpplr(results);
    };
    fetchpopular();

    const fetchtoprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${toprated}?api_key=${apikey}`);
      settpr(results);
    };
    fetchtoprated();

    const fetchgetallgenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
      setgenre(genres);
    };
    fetchgetallgenre();
  }, []);
  return (
    <section className="Home">
      <div
        className="banner"
        style={{
          backgroundImage: pplr[0]
            ? `url(${`${imgurl}/${pplr[0].poster_path}`})`
            : "rgb(16,16,16)",
        }}
      >
        {pplr[0] && <h1>{pplr[0].original_title}</h1>}
        {pplr[0] && <p>{pplr[0].overview}</p>}
        <div id="al">
        <button> ▶ Play</button>
        <button>My List  </button>
        </div>
      </div>
      <Row title={"Upcoming"} arr={upcming} imgurl={imgurl} />
      <Row title={"Now Playing"} arr={nwplng} imgurl={imgurl} />
      <Row title={"Popular"} arr={pplr} imgurl={imgurl} />
      <Row title={"Top Rated"} arr={tpr} imgurl={imgurl} />

      <div className="genrebox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Home;
