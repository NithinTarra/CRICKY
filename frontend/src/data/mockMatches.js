const mockMatches = [
  {
    id: 1,
    tournament: "ICC WORLD CUP",
    status: "LIVE",
    team1: {
      name: "India",
      code: "IND",
      score: "287/5",
      overs: "50.0"
    },
    team2: {
      name: "Australia",
      code: "AUS",
      score: "164/3",
      overs: "29.2"
    },
    result: "Australia need 124 runs in 20.4 overs"
  },

  {
    id: 2,
    tournament: "T20 INTERNATIONAL",
    status: "LIVE",
    team1: {
      name: "England",
      code: "ENG",
      score: "192/6",
      overs: "20.0"
    },
    team2: {
      name: "Pakistan",
      code: "PAK",
      score: "145/8",
      overs: "18.4"
    },
    result: "Pakistan need 48 runs in 8 balls"
  },

  {
    id: 3,
    tournament: "IPL 2026",
    status: "COMPLETED",
    team1: {
      name: "Chennai",
      code: "CSK",
      score: "178/4",
      overs: "20.0"
    },
    team2: {
      name: "Mumbai",
      code: "MI",
      score: "162/7",
      overs: "20.0"
    },
    result: "Chennai won by 16 runs"
  }
];

export const upcomingMatches = [
  {
    id: 1,
    date: "NOV 05",
    time: "2:00 PM",
    tournament: "ODI INTERNATIONAL",
    team1: "IND",
    team2: "SA",
    venue: "Dubai International Stadium"
  },
  {
    id: 2,
    date: "NOV 06",
    time: "7:30 PM",
    tournament: "T20 INTERNATIONAL",
    team1: "AUS",
    team2: "ENG",
    venue: "Melbourne Cricket Ground"
  },
  {
    id: 3,
    date: "NOV 08",
    time: "6:00 PM",
    tournament: "T20 INTERNATIONAL",
    team1: "NZ",
    team2: "PAK",
    venue: "Auckland Cricket Ground"
  }
];

export const recentResults = [
  {
    id: 1,
    tournament: "ODI INTERNATIONAL",
    team1: "IND",
    team2: "SL",
    score1: "287/6",
    score2: "177/10",
    result: "India won by 110 runs"
  },
  {
    id: 2,
    tournament: "T20 INTERNATIONAL",
    team1: "AUS",
    team2: "ENG",
    score1: "185/5",
    score2: "181/8",
    result: "Australia won by 4 runs"
  },
  {
    id: 3,
    tournament: "IPL",
    team1: "CSK",
    team2: "MI",
    score1: "192/4",
    score2: "188/7",
    result: "Chennai won by 4 runs"
  }
];

export default mockMatches;