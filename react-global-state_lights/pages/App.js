import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState([
    { id: 1, room: "Living Room", isOn: false },
    { id: 2, room: "Kitchen", isOn: false },
    { id: 3, room: "Bedroom", isOn: false },
    { id: 4, room: "Bathroom", isOn: false },
    { id: 5, room: "Garage", isOn: false },
    { id: 6, room: "Porch", isOn: false },
    { id: 7, room: "Garden", isOn: false },
    { id: 8, room: "Office", isOn: false },
  ]);

  function handleToggle(roomID) {
    setIsOn(
      isOn.map((light) => {
        return light.id === roomID ? (light.isOn = !light.isOn) : light.isOn;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} onToggle={handleToggle} isOn={isOn} />
    </Layout>
  );
}
