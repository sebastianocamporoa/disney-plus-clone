import styled from "styled-components";
import { useState } from "react";

//titulos
import title1 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/title1.png";
import title2 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/title2.png";
import title3 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/title3.png";
import title4 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/title4.png";
import title5 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/title5.png";
import title6 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/title6.png";

//ejercicios
import temOne from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/vector-tangente.png";
import curva from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/long-curva-1.png";
import curva2 from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/long-curva-2.png";
import IFV from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/IFV.png";
import I3D from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/I3D.png";
import IFVSinLimite from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/IFV-sin-limite.png";
import intMult from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/integrales-multiples.png";

//formulas
import formula_long_curva from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/formula-long-curva.png";
import formulaVectTang from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/formula-vect-tang.png";
import formulaIFV from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/formula-IFV.png";
import formulaInt3Dim from "/Users/sebastianocamporoa/Documents/calc2/galery/src/components/images/formula-integrales-3-dimensiones.png";

//mui
import { Box } from "@material-ui/core";

const Recommends = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [current, setCurrent] = useState(null);

  let tems = [
    {
      id: 1,
      title: "Vector tangente",
      description:
        "un vector tangente es uno que es paralelo (o tangente) a una curva o una superficie en un punto dado. En la geometría diferencial de curvas, se definen en términos decurvas en Rn o en forma más general, en geometría diferencial de variables, como miembro del espacio tangente. La dirección de este vector es la misma que lapendiente de la línea tangente.",
      titleImg: temOne,
      secondtitleImg: null,
      formula: formulaVectTang,
      backgroundImg: temOne,
      cardImg: title1,
      subTitle: "Vector tangente",
      type: "recommend",
    },
    {
      id: 2,
      title: "Longitud de la curva",
      description:
        "La longitud de la curva es la distancia que se recorre a través de una curva, se puede imaginar la longitud de la curva como una cuerda que se estira y se mide la longitud, pero en este caso al ser un arco se debe medir por medio una integral con limites definidos. para medir la longitud de una curva es como si separamos la curva en diminutos segmentos a los que se les realiza el teorema de Pitágoras y luego se suma. Pero con integrales esto se puede hacer más sencillo.",
      titleImg: curva,
      secondtitleImg: curva2,
      formula: formula_long_curva,
      backgroundImg: curva,
      cardImg: title2,
      subTitle: "Longitud de la curva",
      type: "recommend",
    },
    {
      id: 3,
      title: "integrales de funciones vectoriales",
      description:
        "El concepto de Campo Vectorial se introduce tratando de describir la posición y el movimiento de una partícula que forma parte de un fluido. Un ejemplo de campo vectorial define las velocidades de un fluido incompresible que se encuentra dentro de una cavidad cuadrada cuya pared superior se desplaza, provocando el movimiento del líquido confinado. Se presentan los conceptos de Divergencia y Rotacional, que se aplican a diversos campos vectoriales, entre ellos, un dipolo magnético, e incluso se considera un campo vectorial en cinco dimensiones.",
      titleImg: IFV,
      secondtitleImg: IFVSinLimite,
      formula: formulaIFV,
      backgroundImg: IFV,
      cardImg: title3,
      subTitle: "Integrales de funciones vectoriales",
      type: "recommend",
    },
    {
      id: 4,
      title: "Integrales en 3 dimensiones",
      description:
        "Las integrales triples son el análogo de las integrales dobles para tres dimensiones. Son una herramienta para sumar infinitas cantidades infinitesimales asociadas con puntos de una región tridimensional.",
      titleImg: I3D,
      secondtitleImg: null,
      formula: formulaInt3Dim,
      backgroundImg: I3D,
      cardImg: title4,
      subTitle: "Integral de 3 dimensiones",
      type: "recommend",
    },
    {
      id: 5,
      title: "Integral multiple",
      description:
        "En principio, el cálculo de una integral múltiple (en varias variables) se reduce a ir calculando integrales de una variable en el orden especificado. El diferencial nos informa acerca del nombre de la variable con respecto a la que debemos integrar y su posición indica el orden de integración, correspondiendo los diferenciales más interiores a las integrales que hay que calcular primero.",
      titleImg: intMult,
      secondtitleImg: null,
      backgroundImg: intMult,
      cardImg: title5,
      subTitle: "Integral multiple",
      type: "recommend",
    },
    // {
    //   id: 6,
    //   title: "Derivada de 3 variables",
    //   description:
    //     "En matemáticas, la derivada parcial de una función de varias variables es la derivada con respecto a cada una de esas variables manteniendo las otras como constantes. Las derivadas parciales son usadas en cálculo vectorial y geometría diferencial.",
    //   titleImg: temOne,
    //   backgroundImg: temOne,
    //   cardImg: title6,
    //   subTitle: "Derivada de 3 variables",
    //   type: "recommend",
    // },
  ];
  return (
    <>
      {!showDetail && (
        <Container>
          <h3>Temas calculo multivariado</h3>
          <Content>
            {tems &&
              tems.map((tem, key) => (
                <Wrap key={key}>
                  {tem.id}
                  <div
                    onClick={() => {
                      setShowDetail(tem.id);
                      setCurrent(tem);
                    }}
                  >
                    <img src={tem.cardImg} alt={tem.title} />
                  </div>
                </Wrap>
              ))}
          </Content>
        </Container>
      )}

      {
        <ContainerDetail>
          <Box display={"flex"}>
            {/* <Background>
              <img
                alt={current?.detail ? current?.detail : ""}
                src={current?.backgroundImg ? current?.backgroundImg : ""}
              />
            </Background> */}
            <Box>
              <ImageTitle>
                <img
                  style={{ width: "100%" }}
                  alt={current?.detail ? current?.detail : ""}
                  src={current?.titleImg ? current?.titleImg : ""}
                />
                {current?.secondtitleImg != null ? (
                  <img
                    style={{ width: "100%" }}
                    alt={current?.detail ? current?.detail : ""}
                    src={current?.secondtitleImg ? current?.secondtitleImg : ""}
                  />
                ) : (
                  ""
                )}
              </ImageTitle>
            </Box>
            <Box pl={5}>
              <ContentMeta>
                <SubTitle>
                  {current?.subTitle ? current?.subTitle : ""}
                  <Description>
                    {current?.description ? current.description : ""}
                    {current?.formula != null ? (
                      <>
                        <Box display={"flex"} p={3}>
                          Formula:
                        </Box>
                        <Box>
                          <img
                            style={{ width: "70%" }}
                            src={current?.formula}
                            alt={"formula"}
                          ></img>
                        </Box>
                      </>
                    ) : (
                      ""
                    )}
                  </Description>
                </SubTitle>
              </ContentMeta>
            </Box>
          </Box>
        </ContainerDetail>
      }
    </>
  );
};

//styles first screen
const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

//styles detail screen

const ContainerDetail = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  //height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  border-radius: "10px";
  img {
    max-width: 800px;
    min-width: 200px;
    width: 35vw;
    border-radius: "10px";
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  transition-duration: 0.2s;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
    transition-duration: 0.2s;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgba(100, 100, 100, 0.8);
    transition-duration: 0.2s;
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 45px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Recommends;
