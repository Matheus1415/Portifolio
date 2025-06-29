import { About } from "./components/About";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import { Technologies } from "./components/Technologies";
import { Trajectory } from "./components/Trajectory";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Presentation />
      <Services/>
      <Technologies/>
      <Trajectory/>
      <About/>
    </HomeContainer>
  );
}
