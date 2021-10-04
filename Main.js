const team = {

    _players: [ {
      firstName: 'Ebenezer', 
      lastName: 'Bonney',
      age: 27},
      {firstName: 'Kweku', 
      lastName: 'Sam',
      age: 24},
       {firstName: 'Francis', 
       lastName: 'Williams',
       age: 23}],

    _games: [{
      opponent: 'Italy', 
      teamPoints: 75,
      opponentPoint: 50
      },

      {
        opponent: 'HollyWood',
        teamPoints: 85,
        opponentPoint: 60
        },

      {
        opponent: 'Dico Milan', 
        teamPoints: 35,
        opponentPoint: 70

        }],
  
      get players() {
        return this._players;
      },

      get games() {
        return this._games;
      },

    addPlayer(firstName, lastName, age) {
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
     this.players.push(player);
      },

      addGame(opponentName, myPoints, opponentPoints) {
        const game = {
          opponent: opponentName,
          teamPoints: myPoints,
          opponentPoints: opponentPoints
        };
        this.games.push(game)
      }

      
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Hollywood', 36, 54);
  team.addGame('New Site', 89, 59);
  team.addGame('Type B', 103, 123);
  console.log(team.games);
  
  
  