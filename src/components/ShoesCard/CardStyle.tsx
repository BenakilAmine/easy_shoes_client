import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export const CardCustom = styled(Card)`
  background: #fff;
  box-shadow: none;
  margin: 10px 0;
  button {
    display: none;
  }
  &:hover {
    background-color: black;
    opacity: 0.2;
    height: 295px;
    button {
        display:inline-block;
        bottom: 160px;
        margin-left: 10px;
        color: black;
        background-color: green;
        opacity: 1 !important;
        z-index: 1000;
      a {
        color: white;
        text-decoration: none;
        padding: 5px;
        z-index: 1000;
      }      
    }
  }
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
  padding: 10px 0;
  
`;
export const ButtonCustom = styled(Button)`


`;
