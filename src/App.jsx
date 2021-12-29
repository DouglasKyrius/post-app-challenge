import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { ScrollToTop } from "./components/ScrollToTop";
// Pages
import { HomePage, PostPage } from "./pages";
// Styled Components
const Container = styled.div`
  max-width: 1140px;
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const App = () => {
  return (
    <Container>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </ScrollToTop>
    </Container>
  );
};

export default App;
