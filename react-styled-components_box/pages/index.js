import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack="black" />
    </div>
  );
}

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;};

  background-color: ${(props) =>
    props.$isBlack === "black" && "black"};
`;


// .box-with-classname:hover {
//   background-color: red;
// }

// .box-with-classname--black {
//   background-color: black;
// }
