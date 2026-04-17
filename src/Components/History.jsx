import "../styles/History.css";

export default function History() {
	return (
		<div
			id="history-layout"
			style={{
				backgroundImage:
					"url(https://bloody-disgusting.com/wp-content/uploads/2016/08/Resident-Evil-Franchise.jpg)",
			}}
		>
			<div id="history-overlay" />

			<div id="history-content">
				<h1>History of Resident Evil</h1>
				<p>
					The Resident Evil trilogy follows the outbreak of the T-virus and the
					collapse of Raccoon City, as characters like Jill Valentine, Leon
					Kennedy, and Claire Redfield struggle to survive against zombies and
					bio-engineered monsters created by the Umbrella Corporation. Across
					the three games, players explore isolated locations, manage limited
					resources, and uncover the truth behind the infection, establishing
					the foundation of survival horror with a mix of tension, storytelling,
					and strategic gameplay.
				</p>

				<div id="history-links">
					<button type="button">
						<a
							target="blank"
							href="https://residentevil.fandom.com/wiki/Resident_Evil_Wiki"
						>
							View Wiki
						</a>
					</button>
					<button type="button">
						<a
							target="blank"
							href="https://store.steampowered.com/developer/capcom/list/37722/"
						>
							View Store
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
