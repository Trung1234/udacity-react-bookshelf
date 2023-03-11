import "./App.css";
import { useEffect, useState, useMemo ,useDebounce } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchPage from "./pages/SearchPages";
import HomePage from "./pages/HomePage";

function App() {


  return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route path="/search" element={<SearchPage  />} />
		</Routes>
	);
}

export default App;
