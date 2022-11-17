/* eslint-disable */
import styled from "styled-components";
import Recommends from "./Recommends";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  let recommends = [];
  let tems = [
    {
      id: 1,
      title: "Vector tangente",
      description:
        "un vector tangente es uno que es paralelo (o tangente) a una curva o una superficie en un punto dado. En la geometría diferencial de curvas, se definen en términos decurvas en Rn o en forma más general, en geometría diferencial de variables, como miembro del espacio tangente. La dirección de este vector es la misma que lapendiente de la línea tangente.",
      titleImg: "./images/vector-tangente.png",
      backgroundImg: "./images/vector-tangente.png",
      cardImg: "./images/vector-tangente.png",
      subTitle: "",
      type: "recommend",
    },
  ];

  return (
    <Container>
      <Recommends />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
