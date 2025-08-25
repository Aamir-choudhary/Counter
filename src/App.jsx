import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  return (
    <Body>
      <Form>
        <div className="reload">
          <ReplayIcon onClick={() => setcount(0)} />
        </div>
        <Counter>
          <h1>{count}</h1>
        </Counter>
        <div className="btn">
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => setcount(count + 1)}>
              +
            </Button>
            <Button
              variant="contained"
              onClick={() => setcount(count > 0 ? count - 1 : 0)}
            >
              -
            </Button>
          </Stack>
        </div>
      </Form>
    </Body>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #fbfbf1; */
  background-image: url("images/Background3.png");

  background-repeat: no-repeat; /* repeat na ho */
  background-size: cover; /* pura area cover kare */
  background-position: center;

  height: 100vh;

  width: 100vw;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  width: 320px;
  box-shadow: 0 12px 19px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  border-radius: 15px;
  .btn {
    padding-top: 30px;
    height: 100px;
  }
  .btn Button {
    width: 140px;
    height: 60px;
    font-weight: bold;
    font-size: 24px;
    background-color: #f2f2f2;
    color: black;
  }
  .reload {
    display: flex;
    padding-left: 270px;
    padding-bottom: 10px;
    cursor: pointer;
  }
`;
const Counter = styled.div`
  display: flex;
  background: linear-gradient(
    to right,
    rgba(253, 230, 90, 100%),
    rgba(204, 254, 87, 100%)
  );
  box-shadow: 0 12px 19px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  h1 {
    font-size: 64px;
  }
  &:hover {
    background: linear-gradient(to right, #fdfd96, #b6ff6d);
  }
`;
