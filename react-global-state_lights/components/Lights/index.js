import styled from "styled-components";
import Light from "../Light";
import { v4 as uuidv4 } from 'uuid';


const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ onToggle, isOn }) {

  return (
    <StyledLights>
      {isOn.map((light) => {
        return <li key={uuidv4()}>
          <Light  name={light.room} onToggle={onToggle} id={light.id} isOn={light.isOn}/>
        </li>
      })}
    </StyledLights>
  );
}
