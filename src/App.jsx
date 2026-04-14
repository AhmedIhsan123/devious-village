import GameCard from "./Components/GameCard.jsx";
import Header from "./Components/Header.jsx";
import History from "./Components/History.jsx";
import Footer from "./Components/Footer.jsx";
import "./styles/App.css";

import re0 from "./Assets/resident_evil_0.png";
import re1 from "./Assets/resident_evil_1.png";
import re2 from "./Assets/resident_evil_2.png";
import re3 from "./Assets/resident_evil_3.png";
import re4 from "./Assets/resident_evil_4.png";
import re5 from "./Assets/resident_evil_5.png";
import re6 from "./Assets/resident_evil_6.png";
import re7 from "./Assets/resident_evil_7.png";
import re8 from "./Assets/resident_evil_8.png";
import re9 from "./Assets/resident_evil_9.png";

const residentEvilImages = {
	0: re0,
	1: re1,
	2: re2,
	3: re3,
	4: re4,
	5: re5,
	6: re6,
	7: re7,
	8: re8,
	9: re9,
};

const games = [
	{
		id: 0,
		title: "Resident Evil 0",
		subtitle: "Capcom",
		smallDescription: "Hello, I am elon musk",
		description:
			"Before the mansion, before the destruction of Raccoon City, there was Resident Evil 0. Now remastered with improved visuals and sounds, as well as the all-new Wesker Mode, there's never been a better time to experience the origins of the Resident Evil story.",
	},
	{ id: 1, title: "Resident Evil 1", subtitle: "Capcom" },
	{ id: 2, title: "Resident Evil 2", subtitle: "Capcom" },
	{ id: 3, title: "Resident Evil 3", subtitle: "Capcom" },
	{ id: 4, title: "Resident Evil 4", subtitle: "Capcom" },
	{ id: 5, title: "Resident Evil 5", subtitle: "Capcom" },
	{ id: 6, title: "Resident Evil 6", subtitle: "Capcom" },
	{ id: 7, title: "Resident Evil 7", subtitle: "Capcom" },
	{ id: 8, title: "Resident Evil 8", subtitle: "Capcom" },
	{ id: 9, title: "Resident Evil 9", subtitle: "Capcom" },
];

export default function App() {
	return (
		<main className="main-area-container">
			<Header />
			<History />
			{games.map((game) => (
				<GameCard
					key={game.id}
					title={game.title}
					subtitle={game.subtitle}
					smallDescription={game.smallDescription}
					description={game.description}
					image={residentEvilImages[game.id]}
					links={[
						{ label: "Wiki", url: "#" },
						{ label: "Trailer", url: "#" },
					]}
				/>
			))}
			<Footer />
		</main>
	);
}
