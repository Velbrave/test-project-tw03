import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../page/homePage/HomePage"));
const TweetsPage = lazy(() => import("../../page/tweetsPage/TweetsPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className={css.header}>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
