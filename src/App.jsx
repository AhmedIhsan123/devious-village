import GameCard from "./Components/GameCard.jsx";
import Header from "./Components/Header.jsx";
import History from "./Components/History.jsx";
import Footer from "./Components/Footer.jsx";
import "./styles/App.css";
export default function () {
	return (
		<>
			<main className="main-area-container">
				<Header />
				<History />
				<GameCard></GameCard>
				<Footer />
			</main>
		</>
	);
}
