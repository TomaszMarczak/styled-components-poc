import { useState, ReactElement } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
`;

const TestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ControlButton = styled.button`
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 3px solid #333;
`;

const TestButton = styled.button`
  background-color: ${(props) => props.theme.light.background};
  color: ${(props) => props.theme.light.color};
  font-weight: bold;
  width: 200px;
  padding: 0.5rem 1rem;
  border: 3px solid #333;
`;

export default function App() {
  const [quantity, setQuantity] = useState(100);
  const [components, setComponents] = useState<ReactElement[] | null>(() =>
    generateComponents()
  );
  function generateComponents() {
    const newComponents = [];
    for (let i = 0; i < quantity; i++) {
      newComponents.push(<TestButton key={i}>Button {i + 1}</TestButton>);
    }
    return newComponents;
  }

  return (
    <Container>
      <h1>styled-components theming</h1>
      <div>
        <ControlButton>Randomize theme</ControlButton>
      </div>
      <h2>Components</h2>
      <TestContainer>{components}</TestContainer>
    </Container>
  );
}
