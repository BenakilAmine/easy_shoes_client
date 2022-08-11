import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export const CardCustom = styled(Card)`
  background: #fff;
  width: 30%;
  box-shadow: none;
  margin: 50px 0;
  img {
    width: 100%;
    margin: auto;
    z-index: 10;
  }
  .MuiCardContent-root {
    text-align: center;
  }
  .MuiTypography-h5 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .css-1uhwev9-MuiStack-root {
    text-align: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 250px;
  position: relative;
  button {
    display: none;
  }
  &:hover {
    background-color: black;
    z-index: 100;
    opacity: 0.2;
    button {
        background-color: red;
        display:inline-block;
        bottom: 130px;
        margin-left: 10px;
        color: white;
      a {
        color: white;
        text-decoration: none;
        padding: 5px;
      }      
    }
  }
`;
export const ButtonCustom = styled(Button)`


`;
