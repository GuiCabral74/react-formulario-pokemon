import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

export const Column = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 400px;
  height: 60vh;
  justify-content: center;
  align-items: center;
  background: #e3c510;
  text-align: center;
  margin: 0 auto;
  border: 15px solid #285eb2;
  border-radius: 25px;
`;

export const Btn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #000;
  background: linear-gradient(to bottom, #f00 50%, #fff 50%);
  cursor: pointer;
  color: #fff;
  margin-top: 50px;
  &:after {
    content: "";
    display: block;
    width: 90px;
    border: 3px solid black;
    position: relative;
    top: -16px;
    left: -8px;
  }
  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border: 3px solid #000;
    background: #fff;
    border-radius: 50%;
    position: relative;
    right: -35px;
    bottom: -10px;
    z-index: 1;
  }
  `

export const Divicao = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
export const Wrapper = styled.div`

  background: #e3c510;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`