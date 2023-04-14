import { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, randomLightColor } from "./theme";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;
const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
`;

const TestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ControlButton = styled.button`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.bg};
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 3px solid #333;
  cursor: pointer;
`;

const TestButton = styled.button`
  background-color: ${(props) => props.theme.colors.bgButton};
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  width: 150px;
  padding: 0.5rem 1rem;
  border: 3px solid #333;
`;

export default function App() {
  const [quantity, setQuantity] = useState(100);
  const [components, setComponents] = useState<ReactElement[] | null>(() =>
    generateComponents()
  );
  const [theme, setTheme] = useState(() => "light");

  const themeSet = () => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      case "random":
        return {
          colors: {
            bg: randomLightColor(),
            text: "#333",
            bgButton: randomLightColor(),
          },
        };
      default:
        return lightTheme;
    }
  };

  useEffect(() => {
    setComponents(generateComponents());
  }, [quantity]);

  const handleSetTheme = (input: string) => {
    setTheme(input);
  };

  function generateComponents() {
    const newComponents = [];
    for (let i = 0; i < quantity; i++) {
      newComponents.push(<TestButton key={i}>Button {i + 1}</TestButton>);
    }
    return newComponents;
  }

  return (
    <ThemeProvider theme={themeSet}>
      <Container>
        <Title>styled-components theming</Title>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ControlButton onClick={() => handleSetTheme("random")}>
            Randomize theme
          </ControlButton>
          <ControlButton onClick={() => handleSetTheme("light")}>
            Light theme
          </ControlButton>
          <ControlButton onClick={() => handleSetTheme("dark")}>
            Dark theme
          </ControlButton>
          <input
            type="number"
            value={quantity}
            min={0}
            onChange={(e) => setQuantity(+e.target.value)}
          ></input>
        </div>
        <SubTitle>Components</SubTitle>
        <TestContainer>{components}</TestContainer>
      </Container>
    </ThemeProvider>
  );
}
