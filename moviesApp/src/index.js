import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage.js";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedPage from "./pages/topRatedMovies";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import TVSeriesPage from "./pages/tvSeriesPage";
import SeriesContextProvider from "./contexts/tvContext";
import TVDetailsPage from "./pages/tvDetailsPage";
import SimilarTVPage from "./pages/similarTVPage";
import FavouriteTVSeriesPage from "./pages/favouriteTVSeriesPage";
import TVReviewPage from "./pages/tvReviewPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import RegisterPage from "./pages/registerPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
          <SeriesContextProvider>
            <Routes>
              <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route exact path="/movies/toprated" element={<TopRatedPage />} />
              <Route exact path="/movies/:id/similar" element={<SimilarMoviesPage />} />
              <Route exact path="/tv" element={<TVSeriesPage />} />
              <Route exact path="/tv/:id" element={<TVDetailsPage />} />
              <Route exact path="/tv/:id/similar" element={<SimilarTVPage />} />
              <Route exact path="/tv/favourites" element={<FavouriteTVSeriesPage />} />
              <Route exact path="/tv/reviews/:id" element={<TVReviewPage />} />
              <Route exact path="/loginpage" element={<LoginPage />} />
              <Route exact path="/registerpage" element={<RegisterPage />} />
            </Routes>
          </SeriesContextProvider>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);