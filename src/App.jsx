import Header from "./components/Header.jsx";
import History from "./components/History.jsx";
import GameCard from "./components/GameCard.jsx";
import { games } from "./data/games.js";

export default function App() {
	return (
		<>
			<Header />
			<History />

			{games.map((game, index) => (
				<GameCard key={index} {...game} />
			))}
		</>
	);
}
