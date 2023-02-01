const team = {
	_players: [
		{
			firstName: "billy",
			lastName: "bob",
			age: 23,
		},
		{
			firstName: "john",
			lastName: "doe",
			age: 18,
		},
		{
			firstName: "amanda",
			lastName: "rice",
			age: 30,
		},
	],
	_games: [
		{
			opponent: "jets",
			teamPoints: 1,
			opponentPoints: 5,
		},
		{
			opponent: "giants",
			teamPoints: 7,
			opponentPoints: 2,
		},
		{
			opponent: "eagles",
			teamPoints: 5,
			opponentPoints: 5,
		},
	],
	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayer(newFirstName, newLastName, newAge) {
		let player = {
			firstName: newFirstName,
			lastName: newLastName,
			age: newAge,
		};
		this.players.push(player);
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		let game = {
			opponent: newOpponent,
			teamPoints: newTeamPoints,
			opponentPoints: newOpponentPoints,
		};
		this.games.push(game);
	},
};

team.addPlayer("my", "mom", 25);
team.addGame("you suck", 1, 2);
console.log(team.games);
