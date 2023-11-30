const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// const makeChart = (games, targetTeam) => {
//   const ulParent = document.createElement('ul');
//   for (let game of games) {
//     const gameLi = document.createElement('li');
//     gameLi.innerHTML = getScoreLine(game);
//     gameLi.classList.add(isWinner(game,targetTeam) ? 'win' : 'loss')
//     ulParent.appendChild(gameLi);
//   }
//   return ulParent;
// }

// const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
//   const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
//   return target.isWinner;
// }

// const getScoreLine = ({homeTeam,awayTeam}) =>{
//   const {team: hTeam, points: hPoints} = homeTeam;
//   const {team: aTeam, points: aPoints} = awayTeam;
//   const teamNames = `${aTeam} @ ${hTeam}`;

//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else {
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }
//   return `${teamNames} ${scoreLine}`;
// }

// const warriorSection = document.getElementById('gs');
// const rocketsSection = document.querySelector('#hr');
// const warriorChart = makeChart(warriorsGames, "Golden State");
// const rocketsChart = makeChart(warriorsGames, "Houston");

// warriorSection.appendChild(warriorChart);
// rocketsSection.appendChild(rocketsChart);


const makeChart = (games, targetTeam) => {
  const parentUl = document.createElement('ul');
  for (let game of games) {
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreline(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss')
    parentUl.appendChild(gameLi);
  }
  return parentUl;
}

let scoreLine;
const getScoreline = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  if (aPoints > hPoints) {
    scoreLine = `${aTeam} @ ${hTeam} <b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aTeam} @ ${hTeam} ${aPoints}-<b>${hPoints}</b>`;
  }
  return scoreLine;
}

const isWinner = ({ homeTeam: hTeam, awayTeam: aTeam }, targetTeam) => {
  const target = targetTeam === hTeam ? hTeam : aTeam;
  return target.isWinner;
}

const warriorChart = makeChart(warriorsGames, 'Golden State');
const rocketsChart = makeChart(warriorsGames, 'Houston');
const warriorsSection = document.getElementById('gs');
const rocketssSection = document.getElementById('hr');
warriorsSection.appendChild(warriorChart);
rocketssSection.appendChild(rocketsChart);