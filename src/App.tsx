import Wrapper from "@/components/layout/Wrapper/Wrapper";
import HeaderRouter from "@/components/router/HeaderRouter";
import ContentRouter from "@/components/router/ContentRouter";
import FooterRouter from "@/components/router/FooterRouter";

function App() {
  return (
    <Wrapper>
      <HeaderRouter />
      <ContentRouter />
      <FooterRouter />
    </Wrapper>
  );
}

export default App;
