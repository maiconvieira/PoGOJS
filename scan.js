function remainTime(z, y) {
  y = Math.floor(Date.now() / 1000) - timeOffset;
  return z - y;
}

function calcUpper(z, y) {
  return (y - z) * 2
}

function sleep(milliseconds) {
  let timeStart = new Date().getTime();
  while (true) {
    let elapsedTime = new Date().getTime() - timeStart;
    if (elapsedTime > milliseconds) {
      break;
    }
  }
}

// Bulbasaur
function statsBulbasaur(pgStat) {
  if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 14 && pgStat['level'] <= 38.5) {
    console.log("Ivysaur Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 38.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 11 && pgStat['level'] <= 21) {
    console.log("Venusaur Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 21) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && hash['level'] <= 15) {
    console.log("Mega Venusaur Top 1 Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Ivysaur
function statsIvysaur(pgStat) {
  if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 14 && pgStat['level'] <= 38.5) {
    console.log("Ivysaur Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 38.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 11 && pgStat['level'] <= 21) {
    console.log("Venusaur Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 21) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && hash['level'] <= 15) {
    console.log("Mega Venusaur Top 1 Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Venusaur
function statsVenusaur(pgStat) {
  if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 11 && pgStat['level'] <= 21) {
    console.log("Venusaur Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 21) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && hash['level'] <= 15) {
    console.log("Mega Venusaur Top 1 Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Charmander
function statsCharmander(pgStat) {
  if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
    console.log("Charmeleon Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 13 && pgStat['level'] <= 19.5) {
    console.log("Charizard Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 15 && hash['level'] <= 14.5) {
    console.log("Mega Charizard X Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 11 && pgStat['level'] <= 12.5) {
    console.log("Mega Charizard Y Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Charmeleon
function statsCharmeleon(pgStat) {
  if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
    console.log("Charmeleon Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 13 && pgStat['level'] <= 19.5) {
    console.log("Charizard Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 15 && hash['level'] <= 14.5) {
    console.log("Mega Charizard X Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 11 && pgStat['level'] <= 12.5) {
    console.log("Mega Charizard Y Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Charizard
function statsCharizard(pgStat) {
  if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
    console.log("Charmeleon Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 13 && pgStat['level'] <= 19.5) {
    console.log("Charizard Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 15 && hash['level'] <= 14.5) {
    console.log("Mega Charizard X Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
  } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 11 && pgStat['level'] <= 12.5) {
    console.log("Mega Charizard Y Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Squirtle
function statsSquirtle(pgStat) {
    if (pgStat['attack'] == 15 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
        console.log("Wartortle Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Blastoise Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 14) {
          console.log("Mega Blastoise Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Wartortle
function statsWartortle(pgStat) {
    if (pgStat['attack'] == 15 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
        console.log("Wartortle Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Blastoise Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 14) {
          console.log("Mega Blastoise Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Blastoise
function statsBlastoise(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Blastoise Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 14) {
          console.log("Mega Blastoise Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Caterpie
function statsCaterpie(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 33) {
          console.log("Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 33) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Metapod
function statsMetapod(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 33) {
          console.log("Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 33) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Butterfree
function statsButterfree(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 33) {
          console.log("Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 33) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Weedle
function statsWeedle(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 14 && pgStat['level'] <= 32.5) {
          console.log("Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 32.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 14 && pgStat['level'] <= 16.5) {
          console.log("Mega Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 16.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Kakuna
function statsKakuna(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 14 && pgStat['level'] <= 16.5) {
          console.log("Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 14 && pgStat['level'] <= 16.5) {
          console.log("Mega Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 16.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Beedrill
function statsBeedrill(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 33) {
          console.log("Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 14) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 14 && pgStat['level'] <= 16.5) {
          console.log("Mega Butterfree Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 16.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Pidgey
function statsPidgey(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Pidgeot Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 15) {
          console.log("Mega Pidgeot Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Pidgeotto
function statsPidgeotto(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Pidgeot Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 15) {
          console.log("Mega Pidgeot Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Pidgeot
function statsPidgeot(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Pidgeot Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 15) {
          console.log("Mega Pidgeot Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Rattata
function statsRattata(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Raticate Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Raticate
function statsRaticate(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Raticate Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Spearow
function statsSpearow(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 28.5) {
          console.log("Fearow Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Fearow
function statsFearow(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 28.5) {
          console.log("Fearow Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Ekans
function statsEkans(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 14 && pgStat['level'] <= 30.5) {
          console.log("Arbok Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 30.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Arbok
function statsArbok(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 14 && pgStat['level'] <= 30.5) {
          console.log("Arbok Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 30.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Pikachu
function statsPikachu(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 26) {
          console.log("Raichu Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 26) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Raichu
function statsRaichu(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 26) {
          console.log("Raichu Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 26) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Sandshrew
function statsSandshrew(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 24) {
          console.log("Sandslash Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Sandslash
function statsSandslash(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 24) {
          console.log("Sandslash Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Nidoran♀
function statsNidoran♀(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 23) {
          console.log("Nidoqueen Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Nidorina
function statsNidorina(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 23) {
          console.log("Nidoqueen Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Nidoqueen
function statsNidoqueen(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 23) {
          console.log("Nidoqueen Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Nidoran♂
function statsNidoran♂(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Nidoking Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Nidorino
function statsNidorino(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Nidoking Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Nidoking
function statsNidoking(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Nidoking Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Clefairy
function statsClefairy(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 23.5) {
          console.log("Clefable Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Clefable
function statsClefable(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 23.5) {
          console.log("Clefable Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Vulpix
function statsVulpix(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 25) {
          console.log("Ninetales Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 25) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Ninetales
function statsNinetales(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 25) {
          console.log("Ninetales Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 25) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Jigglypuff
function statsJigglypuff(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 30) {
          console.log("Wigglytuff Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 30) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Wigglytuff
function statsWigglytuff(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 30) {
          console.log("Wigglytuff Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 30) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Zubat
function statsZubat(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 29) {
          console.log("Golbat Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 29) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 21.5) {
          console.log("Crobat Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 21.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Golbat
function statsGolbat(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 29) {
          console.log("Golbat Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 29) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 12 && pgStat['level'] <= 21.5) {
          console.log("Crobat Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 21.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Oddish
function statsOddish(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 12 && pgStat['stamina'] == 14 && pgStat['level'] <= 39.5) {
          console.log("Gloom Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 39.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 22) {
          console.log("Vileplume Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 25) {
          console.log("Bellossom Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 25) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) } }
}
// Gloom
function statsGloom(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 12 && pgStat['stamina'] == 14 && pgStat['level'] <= 39.5) {
          console.log("Gloom Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 39.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 22) {
          console.log("Vileplume Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 25) {
          console.log("Bellossom Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 25) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Vileplume
function statsVileplume(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 22) {
          console.log("Vileplume Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Paras
function statsParas(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 32) {
          console.log("Parasect Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 32) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Parasect
function statsParasect(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 32) {
          console.log("Parasect Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 32) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Venonat
function statsVenonat(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 27.5) {
          console.log("Venomoth Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Venomoth
function statsVenomoth(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 27.5) {
          console.log("Venomoth Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Diglett
function statsDiglett(pgStat) {
    if (pgStat['attack'] == 7 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
          console.log("Dugtrio Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Dugtrio
function statsDugtrio(pgStat) {
    if (pgStat['attack'] == 7 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
          console.log("Dugtrio Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Meowth
function statsMeowth(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 13 && pgStat['level'] <= 39) {
          console.log("Persian Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 39) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Persian
function statsPersian(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 13 && pgStat['level'] <= 39) {
          console.log("Persian Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 39) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Psyduck
function statsPsyduck(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 10 && pgStat['stamina'] == 14 && pgStat['level'] <= 23.5) {
          console.log("Golduck Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Golduck
function statsGolduck(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 10 && pgStat['stamina'] == 14 && pgStat['level'] <= 23.5) {
          console.log("Golduck Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Mankey
function statsMankey(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 24.5) {
          console.log("Primeape Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Primeape
function statsPrimeape(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 24.5) {
          console.log("Primeape Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Growlithe
function statsGrowlithe(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 18.5) {
          console.log("Arcanine Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Arcanine
function statsArcanine(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 18.5) {
          console.log("Arcanine Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Poliwag
function statsPoliwag(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Poliwrath Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Politoed Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Poliwhirl
function statsPoliwhirl(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Poliwrath Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Politoed Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Poliwrath
function statsPoliwrath(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 22) {
          console.log("Poliwrath Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Abra
function statsAbra(pgStat) {
    if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Kadabra Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 18) {
          console.log("Alakazam Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 4 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 12) {
          console.log("Mega Alakazam Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Kadabra
function statsKadabra(pgStat) {
    if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 27) {
          console.log("Kadabra Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 18) {
          console.log("Alakazam Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 4 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 12) {
          console.log("Mega Alakazam Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Alakazam
function statsAlakazam(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 18) {
          console.log("Alakazam Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 4 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 12) {
          console.log("Mega Alakazam Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Machop
function statsMachop(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 28) {
          console.log("Machoke Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 11 && pgStat['level'] <= 18.5) {
          console.log("Machamp Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Machoke
function statsMachoke(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 28) {
          console.log("Machoke Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 11 && pgStat['level'] <= 18.5) {
          console.log("Machamp Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Machamp
function statsMachamp(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 11 && pgStat['level'] <= 18.5) {
          console.log("Machamp Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Bellsprout
function statsBellsprout(pgStat) {
    if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
          console.log("Weepinbell Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Victreebel Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Weepinbell
function statsWeepinbell(pgStat) {
    if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
          console.log("Weepinbell Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Victreebel Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Victreebel
function statsVictreebel(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Victreebel Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Tentacool
function statsTentacool(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 23.5) {
          console.log("Tentacruel Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Tentacruel
function statsTentacruel(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 23.5) {
          console.log("Tentacruel Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Geodude
function statsGeodude(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 30.5) {
          console.log("Graveler Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 30.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 19) {
          console.log("Golem Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Graveler
function statsGraveler(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 30.5) {
          console.log("Graveler Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 30.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 1 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 19) {
          console.log("Golem Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Golem
function statsGolem(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 19) {
          console.log("Golem Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Ponyta
function statsPonyta(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 37.5) {
          console.log("Ponyta Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 37.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Rapidash Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Rapidash
function statsRapidash(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 23) {
          console.log("Rapidash Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 23) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Slowpoke
function statsSlowpoke(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 22.5) {
          console.log("Slowbro Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 22.5) {
          console.log("Slowking Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 14 && pgStat['level'] <= 15) {
          console.log("Mega Slowbro Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Slowbro
function statsSlowbro(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 22.5) {
          console.log("Slowbro Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 22.5) {
          console.log("Slowking Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 14 && pgStat['level'] <= 15) {
          console.log("Mega Slowbro Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Magnemite
function statsMagnemite(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 22.5) {
          console.log("Magneton Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 17.5) {
          console.log("Magnezone Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 17.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Magneton
function statsMagneton(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 22.5) {
          console.log("Magneton Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 15 && pgStat['level'] <= 17.5) {
          console.log("Magnezone Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 17.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Farfetch'd (Gallar)
function statsFarfetchd(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 38) {
          console.log("Farfetch'd Gallar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 38) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Doduo
function statsDoduo(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 12 && pgStat['stamina'] == 15 && pgStat['level'] <= 24) {
          console.log("Dodrio Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Dodrio
function statsDodrio(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 12 && pgStat['stamina'] == 15 && pgStat['level'] <= 24) {
          console.log("Dodrio Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Seel
function statsSeel(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 12 && pgStat['stamina'] == 15 && pgStat['level'] <= 29.5) {
          console.log("Dewgong Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 29.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Dewgong
function statsDewgong(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 12 && pgStat['stamina'] == 15 && pgStat['level'] <= 29.5) {
          console.log("Dewgong Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 29.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Grimer
function statsGrimer(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 20.5) {
          console.log("Muk Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Muk
function statsMuk(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 20.5) {
          console.log("Muk Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Shellder
function statsShellder(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 22.5) {
          console.log("Cloyster Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Cloyster
function statsCloyster(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 22.5) {
          console.log("Cloyster Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 22.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Gastly
function statsGastly(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 28.5) {
          console.log("Haunter Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 19.5) {
          console.log("Gengar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 3 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 12.5) {
          console.log("Mega Gengar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Haunter
function statsHaunter(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 28.5) {
          console.log("Haunter Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 19.5) {
          console.log("Gengar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 3 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 12.5) {
          console.log("Mega Gengar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Gengar
function statsGengar(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 19.5) {
          console.log("Gengar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 19.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 3 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 12.5) {
          console.log("Mega Gengar Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 12.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Onix
function statsOnix(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 15 && pgStat['level'] <= 24) {
          console.log("Steelix Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 7 && pgStat['stamina'] == 15 && pgStat['level'] <= 15.5) {
          console.log("Mega Steelix Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 15.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Drowzee
function statsDrowzee(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 28) {
          console.log("Hypno Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Hypno
function statsHypno(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 13 && pgStat['stamina'] == 13 && pgStat['level'] <= 28) {
          console.log("Hypno Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 28) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Krabby
function statsKrabby(pgStat) {
    if (pgStat['attack'] == 7 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
          console.log("Krabby Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 9 && pgStat['stamina'] == 15 && pgStat['level'] <= 20) {
          console.log("Kingler Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Kingler
function statsKingler(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 9 && pgStat['stamina'] == 15 && pgStat['level'] <= 20) {
          console.log("Kingler Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Voltorb
function statsVoltorb(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 27) {
          console.log("Electrode Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Electrode
function statsElectrode(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 27) {
          console.log("Electrode Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 27) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Exeggcute
function statsExeggcute(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 18.5) {
          console.log("Exeggutor Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Exeggutor
function statsExeggutor(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 18.5) {
          console.log("Exeggutor Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 18.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Cubone
function statsCubone(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 33.5) {
          console.log("Marowak Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 33.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Marowak
function statsMarowak(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 33.5) {
          console.log("Marowak Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 33.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Hitmonlee
function statsHitmonlee(pgStat) {
    if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 21.5) {
          console.log("Hitmonlee Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 21.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Hitmonchan
function statsHitmonchan(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 11 && pgStat['stamina'] == 15 && pgStat['level'] <= 24.5) {
          console.log("Hitmonchan Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 24.5) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Lickitung
// Koffing
function statsKoffing(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 25) {
          console.log("Weezing Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 25) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Weezing
function statsWeezing(pgStat) {
    if (pgStat['attack'] == 0 && pgStat['defence'] == 14 && pgStat['stamina'] == 14 && pgStat['level'] <= 25) {
          console.log("Weezing Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 25) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Rhyhorn
function statsRhyhorn(pgStat) {
    if (pgStat['attack'] == 1 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 40) {
          console.log("Rhyhorn Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 17.5) {
          console.log("Rhydon Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 2 && pgStat['defence'] == 15 && pgStat['stamina'] == 14 && pgStat['level'] <= 17.5) {
          console.log("Rhydon Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Rhydon
function statsKrabby(pgStat) {
    if (pgStat['attack'] == 7 && pgStat['defence'] == 15 && pgStat['stamina'] == 15 && pgStat['level'] <= 40) {
          console.log("Krabby Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 40) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng'])
    } else if (pgStat['attack'] == 0 && pgStat['defence'] == 9 && pgStat['stamina'] == 15 && pgStat['level'] <= 20) {
          console.log("Kingler Top 1 - Wild Pokemon: " + pgStat['name'] + ". Despawn in " + remainTime(pgStat['despawn'], 0) + "s.  Uppar " + calcUpper(pgStat['level'], 20) + " times. LVL " + pgStat['level'] + " CP " + pgStat['cp'] + " - " + pgStat['lat'] + "," + pgStat['lng']) }
}
// Chansey
// Tangela
// Kangaskhan
// Horsea
// Seadra
// Goldeen
// Seaking
// Staryu
// Starmie
// Mr. Mime
// Scyther
// Jynx
// Electabuzz
// Magmar
// Pinsir
// Tauros
// Magikarp
// Gyarados
// Lapras
// Ditto
// Eevee
// Vaporeon
// Jolteon
// Flareon
// Porygon
// Omanyte
// Omastar
// Kabuto
// Kabutops
// Aerodactyl
// Snorlax
// Articuno
// Zapdos
// Moltres
// Dratini
// Dragonair
// Dragonite
// Mewtwo
// Mew

function scanStats() {
  var i = 0;
  for (; i < pokemons.length; ) {
    if (pokemons[i].attack != -1) {
      var dict = {};
      dict.id = pokemons[i].id;
      dict.name = pokeDict[pokemons[i].id]["name"];
      dict.form = formDict[pokemons[i].form];
      dict.gender = pokemons[i].gender;
      dict.attack = pokemons[i].attack;
      dict.defence = pokemons[i].defence;
      dict.stamina = pokemons[i].stamina;
      dict.level = pokemons[i].level;
      dict.cp = pokemons[i].cp;
      dict.despawn = pokemons[i].despawn;
      dict.lat = pokemons[i].center.lat;
      dict.lng = pokemons[i].center.lng;
      i++;
      if (dict.id == 1) { statsBulbasaur(dict) }
      else if (dict.id == 2) { statsIvysaur(dict) }
      else if (dict.id == 3) { statsVenusaur(dict) }
      else if (dict.id == 4) { statsCharmander(dict) }
      else if (dict.id == 5) { statsCharmeleon(dict) }
      else if (dict.id == 6) { statsCharizard(dict) }
      else if (dict.id == 7) { statsSquirtle(dict) }
      else if (dict.id == 8) { statsWartortle(dict) }
      else if (dict.id == 9) { statsBlastoise(dict) }
      else if (dict.id == 10) { statsCaterpie(dict) }
      else if (dict.id == 11) { statsMetapod(dict) }
      else if (dict.id == 12) { statsButterfree(dict) }
      else if (dict.id == 13) { statsWeedle(dict) }
      else if (dict.id == 14) { statsKakuna(dict) }
      else if (dict.id == 15) { statsBeedrill(dict) }
      else if (dict.id == 16) { statsPidgey(dict) }
      else if (dict.id == 17) { statsPidgeotto(dict) }
      else if (dict.id == 18) { statsPidgeot(dict) }
      else if (dict.id == 19 && dict.form == 'Normal') { statsRattata(dict) }
      else if (dict.id == 20 && dict.form == 'Normal') { statsRaticate(dict) }
      else if (dict.id == 17) { statsSpearow(dict) }
      else if (dict.id == 17) { statsFearow(dict) }

      // Pidgeot Mega Pidgeot
      // Rattata Alola Form
      // Raticate Alola Form
      // Spearow
      // Fearow
      // Ekans
      // Arbok
      // Pikachu
      // Raichu Alola Form
      // Raichu
      // Sandshrew Alola Form
      // Sandshrew
      // Sandslash Alola Form
      // Sandslash
      // Nidoran♀
      // Nidorina
      // Nidoqueen
      // Nidoran♂
      // Nidorino
      // Nidoking
      // Clefairy
      // Clefable
      // Vulpix Alola Form
      // Vulpix
      // Ninetales Alola Form
      // Ninetales
      // Jigglypuff
      // Wigglytuff
      // Zubat
      // Golbat
      // Oddish
      // Gloom
      // Vileplume
      // Paras
      // Parasect
      // Venonat
      // Venomoth
      // Diglett Alola Form
      // Diglett
      // Dugtrio Alola Form
      // Dugtrio
      // Meowth Alola Form
      // Meowth
      // Meowth Galarian Form
      // Persian Alola Form
      // Persian
      // Psyduck
      // Golduck
      // Mankey
      // Primeape
      // Growlithe
      // Arcanine
      // Poliwag
      // Poliwhirl
      // Poliwrath
      // Abra
      // Kadabra
      // Alakazam Mega Alakazam
      // Alakazam
      // Machop
      // Machoke
      // Machamp
      // Bellsprout
      // Weepinbell
      // Victreebel
      // Tentacool
      // Tentacruel
      // Geodude Alola Form
      // Geodude
      // Graveler Alola Form
      // Graveler
      // Golem Alola Form
      // Golem
      // Ponyta
      // Rapidash
      // Slowpoke
      // Slowbro Mega Slowbro
      // Slowbro
      // Magnemite
      // Magneton
      // Farfetch'd
      // Farfetch'd Galarian Form
      // Doduo
      // Dodrio
      // Seel
      // Dewgong
      // Grimer Alola Form
      // Grimer
      // Muk Alola Form
      // Muk
      // Shellder
      // Cloyster
      // Gastly
      // Haunter
      // Gengar Mega Gengar
      // Gengar
      // Onix
      // Drowzee
      // Hypno
      // Krabby
      // Kingler
      // Voltorb
      // Electrode
      // Exeggcute
      // Exeggutor Alola Form
      // Exeggutor
      // Cubone
      // Marowak Alola Form
      // Marowak
      // Hitmonlee
      // Hitmonchan
      // Lickitung
      // Koffing
      // Weezing
      // Weezing Galarian Form
      // Rhyhorn
      // Rhydon
      // Chansey
      // Tangela
      // Kangaskhan Mega Kangaskhan
      // Kangaskhan
      // Horsea
      // Seadra
      // Goldeen
      // Seaking
      // Staryu
      // Starmie
      // Mr. Mime
      // Scyther
      // Jynx
      // Electabuzz
      // Magmar
      // Pinsir Mega Pinsir
      // Pinsir
      // Tauros
      // Magikarp
      // Gyarados Mega Gyarados
      // Gyarados
      // Lapras
      // Ditto
      // Eevee
      // Vaporeon
      // Jolteon
      // Flareon
      // Porygon
      // Omanyte
      // Omastar
      // Kabuto
      // Kabutops
      // Aerodactyl Mega Aerodactyl
      // Aerodactyl
      // Snorlax
      // Articuno
      // Zapdos
      // Moltres
      // Dratini
      // Dragonair
      // Dragonite
      // Mewtwo Mega Mewtwo Y
      // Mewtwo Mega Mewtwo X
      // Mewtwo
      // Mew
      // Chikorita
      // Bayleef
      // Meganium
      // Cyndaquil
      // Quilava
      // Typhlosion
      // Totodile
      // Croconaw
      // Feraligatr
      // Sentret
      // Furret
      // Hoothoot
      // Noctowl
      // Ledyba
      // Ledian
      // Spinarak
      // Ariados
      // Crobat
      // Chinchou
      // Lanturn
      // Pichu
      // Cleffa
      // Igglybuff
      // Togepi
      // Togetic
      // Natu
      // Xatu
      // Mareep
      // Flaaffy
      // Ampharos Mega Ampharos
      // Ampharos
      // Bellossom
      // Marill
      // Azumarill
      // Sudowoodo
      // Politoed
      // Hoppip
      // Skiploom
      // Jumpluff
      // Aipom
      // Sunkern
      // Sunflora
      // Yanma
      // Wooper
      // Quagsire
      // Espeon
      // Umbreon
      // Murkrow
      // Slowking
      // Misdreavus
      // Unown
      // Wobbuffet
      // Girafarig
      // Pineco
      // Forretress
      // Dunsparce
      // Gligar
      // Steelix Mega Steelix
      // Steelix
      // Snubbull
      // Granbull
      // Qwilfish
      // Scizor Mega Scizor
      // Scizor
      // Shuckle
      // Heracross Mega Heracross
      // Heracross
      // Sneasel
      // Teddiursa
      // Ursaring
      // Slugma
      // Magcargo
      // Swinub
      // Piloswine
      // Corsola
      // Remoraid
      // Octillery
      // Delibird
      // Mantine
      // Skarmory
      // Houndour
      // Houndoom Mega Houndoom
      // Houndoom
      // Kingdra
      // Phanpy
      // Donphan
      // Porygon2
      // Stantler
      // Smeargle
      // Tyrogue
      // Hitmontop
      // Smoochum
      // Elekid
      // Magby
      // Miltank
      // Blissey
      // Raikou
      // Entei
      // Suicune
      // Larvitar
      // Pupitar
      // Tyranitar Mega Tyranitar
      // Tyranitar
      // Lugia
      // Ho-Oh
      // Celebi
      // Treecko
      // Grovyle
      // Sceptile Mega Sceptile
      // Sceptile
      // Torchic
      // Combusken
      // Blaziken Mega Blaziken
      // Blaziken
      // Mudkip
      // Marshtomp
      // Swampert Mega Swampert
      // Swampert
      // Poochyena
      // Mightyena
      // Zigzagoon
      // Zigzagoon Galarian Form
      // Linoone
      // Linoone Galarian Form
      // Wurmple
      // Silcoon
      // Beautifly
      // Cascoon
      // Dustox
      // Lotad
      // Lombre
      // Ludicolo
      // Seedot
      // Nuzleaf
      // Shiftry
      // Taillow
      // Swellow
      // Wingull
      // Pelipper
      // Ralts
      // Kirlia
      // Gardevoir Mega Gardevoir
      // Gardevoir
      // Surskit
      // Masquerain
      // Shroomish
      // Breloom
      // Slakoth
      // Vigoroth
      // Slaking
      // Nincada
      // Ninjask
      // Shedinja
      // Whismur
      // Loudred
      // Exploud
      // Makuhita
      // Hariyama
      // Azurill
      // Nosepass
      // Skitty
      // Delcatty
      // Sableye Mega Sableye
      // Sableye
      // Mawile Mega Mawile
      // Mawile
      // Aron
      // Lairon
      // Aggron Mega Aggron
      // Aggron
      // Meditite
      // Medicham Mega Medicham
      // Medicham
      // Electrike
      // Manectric Mega Manectric
      // Manectric
      // Plusle
      // Minun
      // Volbeat
      // Illumise
      // Roselia
      // Gulpin
      // Swalot
      // Carvanha
      // Sharpedo Mega Sharpedo
      // Sharpedo
      // Wailmer
      // Wailord
      // Numel
      // Camerupt Mega Camerupt
      // Camerupt
      // Torkoal
      // Spoink
      // Grumpig
      // Spinda
      // Trapinch
      // Vibrava
      // Flygon
      // Cacnea
      // Cacturne
      // Swablu
      // Altaria Mega Altaria
      // Altaria
      // Zangoose
      // Seviper
      // Lunatone
      // Solrock
      // Barboach
      // Whiscash
      // Corphish
      // Crawdaunt
      // Baltoy
      // Claydol
      // Lileep
      // Cradily
      // Anorith
      // Armaldo
      // Feebas
      // Milotic
      // Castform Sunny Form
      // Castform Snowy Form
      // Castform Rainy Form
      // Castform
      // Kecleon
      // Shuppet
      // Banette Mega Banette
      // Banette
      // Duskull
      // Dusclops
      // Tropius
      // Chimecho
      // Absol Mega Absol
      // Absol
      // Wynaut
      // Snorunt
      // Glalie Mega Glalie
      // Glalie
      // Spheal
      // Sealeo
      // Walrein
      // Clamperl
      // Huntail
      // Gorebyss
      // Relicanth
      // Luvdisc
      // Bagon
      // Shelgon
      // Salamence Mega Salamence
      // Salamence
      // Beldum
      // Metang
      // Metagross Mega Metagross
      // Metagross
      // Regirock
      // Regice
      // Registeel
      // Latias Mega Latias
      // Latias
      // Latios Mega Latios
      // Latios
      // Kyogre Primal Reversion
      // Kyogre
      // Groudon Primal Reversion
      // Groudon
      // Rayquaza Mega Rayquaza
      // Rayquaza
      // Jirachi
      // Deoxys Speed Forme
      // Deoxys Defense Forme
      // Deoxys Attack Forme
      // Deoxys
      // Turtwig
      // Grotle
      // Torterra
      // Chimchar
      // Monferno
      // Infernape
      // Piplup
      // Prinplup
      // Empoleon
      // Starly
      // Staravia
      // Staraptor
      // Bidoof
      // Bibarel
      // Kricketot
      // Kricketune
      // Shinx
      // Luxio
      // Luxray
      // Budew
      // Roserade
      // Cranidos
      // Rampardos
      // Shieldon
      // Bastiodon
      // Burmy
      // Wormadam Trash Cloak
      // Wormadam Sandy Cloak
      // Wormadam
      // Mothim
      // Combee
      // Vespiquen
      // Pachirisu
      // Buizel
      // Floatzel
      // Cherubi
      // Cherrim
      // Shellos
      // Gastrodon
      // Ambipom
      // Drifloon
      // Drifblim
      // Buneary
      // Lopunny Mega Lopunny
      // Lopunny
      // Mismagius
      // Honchkrow
      // Glameow
      // Purugly
      // Chingling
      // Stunky
      // Skuntank
      // Bronzor
      // Bronzong
      // Bonsly
      // Mime Jr.
      // Happiny
      // Chatot
      // Spiritomb
      // Gible
      // Gabite
      // Garchomp Mega Garchomp
      // Garchomp
      // Munchlax
      // Riolu
      // Lucario Mega Lucario
      // Lucario
      // Hippopotas
      // Hippowdon
      // Skorupi
      // Drapion
      // Croagunk
      // Toxicroak
      // Carnivine
      // Finneon
      // Lumineon
      // Mantyke
      // Snover
      // Abomasnow Mega Abomasnow
      // Abomasnow
      // Weavile
      // Magnezone
      // Lickilicky
      // Rhyperior
      // Tangrowth
      // Electivire
      // Magmortar
      // Togekiss
      // Yanmega
      // Leafeon
      // Glaceon
      // Gliscor
      // Mamoswine
      // Porygon-Z
      // Gallade Mega Gallade
      // Gallade
      // Probopass
      // Dusknoir
      // Froslass
      // Rotom Wash Rotom
      // Rotom Mow Rotom
      // Rotom Heat Rotom
      // Rotom Frost Rotom
      // Rotom Fan Rotom
      // Rotom
      // Uxie
      // Mesprit
      // Azelf
      // Dialga
      // Palkia
      // Heatran
      // Regigigas
      // Giratina Origin Forme
      // Giratina
      // Cresselia
      // Phione
      // Manaphy
      // Darkrai
      // Shaymin Sky Forme
      // Shaymin
      // Arceus
      // Victini
      // Snivy
      // Servine
      // Serperior
      // Tepig
      // Pignite
      // Emboar
      // Oshawott
      // Dewott
      // Samurott
      // Patrat
      // Watchog
      // Lillipup
      // Herdier
      // Stoutland
      // Purrloin
      // Liepard
      // Pansage
      // Simisage
      // Pansear
      // Simisear
      // Panpour
      // Simipour
      // Munna
      // Musharna
      // Pidove
      // Tranquill
      // Unfezant
      // Blitzle
      // Zebstrika
      // Roggenrola
      // Boldore
      // Gigalith
      // Woobat
      // Swoobat
      // Drilbur
      // Excadrill
      // Audino Mega Audino
      // Audino
      // Timburr
      // Gurdurr
      // Conkeldurr
      // Tympole
      // Palpitoad
      // Seismitoad
      // Throh
      // Sawk
      // Sewaddle
      // Swadloon
      // Leavanny
      // Venipede
      // Whirlipede
      // Scolipede
      // Cottonee
      // Whimsicott
      // Petilil
      // Lilligant
      // Basculin Blue-Striped Form
      // Basculin
      // Sandile
      // Krokorok
      // Krookodile
      // Darumaka
      // Darumaka Galarian Form
      // Darmanitan Zen Mode
      // Darmanitan Galarian Form Zen Mode
      // Darmanitan
      // Maractus
      // Dwebble
      // Crustle
      // Scraggy
      // Scrafty
      // Sigilyph
      // Yamask
      // Cofagrigus
      // Tirtouga
      // Carracosta
      // Archen
      // Archeops
      // Trubbish
      // Garbodor
      // Zorua
      // Zoroark
      // Minccino
      // Cinccino
      // Gothita
      // Gothorita
      // Gothitelle
      // Solosis
      // Duosion
      // Reuniclus
      // Ducklett
      // Swanna
      // Vanillite
      // Vanillish
      // Vanilluxe
      // Deerling
      // Sawsbuck
      // Emolga
      // Karrablast
      // Escavalier
      // Foongus
      // Amoonguss
      // Frillish
      // Jellicent
      // Alomomola
      // Joltik
      // Galvantula
      // Ferroseed
      // Ferrothorn
      // Klink
      // Klang
      // Klinklang
      // Tynamo
      // Eelektrik
      // Eelektross
      // Elgyem
      // Beheeyem
      // Litwick
      // Lampent
      // Chandelure
      // Axew
      // Fraxure
      // Haxorus
      // Cubchoo
      // Beartic
      // Cryogonal
      // Shelmet
      // Accelgor
      // Stunfisk
      // Stunfisk Galarian Form
      // Mienfoo
      // Mienshao
      // Druddigon
      // Golett
      // Golurk
      // Pawniard
      // Bisharp
      // Bouffalant
      // Rufflet
      // Braviary
      // Vullaby
      // Mandibuzz
      // Heatmor
      // Durant
      // Deino
      // Zweilous
      // Hydreigon
      // Larvesta
      // Volcarona
      // Cobalion
      // Terrakion
      // Virizion
      // Tornadus Therian Forme
      // Tornadus
      // Thundurus Therian Forme
      // Thundurus
      // Reshiram
      // Zekrom
      // Landorus Therian Forme
      // Landorus
      // Kyurem White Kyurem
      // Kyurem Black Kyurem
      // Kyurem
      // Keldeo Resolute Form
      // Keldeo
      // Meloetta Pirouette Forme
      // Meloetta
      // Genesect
      // Chespin
      // Quilladin
      // Chesnaught
      // Fennekin
      // Braixen
      // Delphox
      // Froakie
      // Frogadier
      // Greninja
      // Bunnelby
      // Diggersby
      // Fletchling
      // Fletchinder
      // Talonflame
      // Scatterbug
      // Spewpa
      // Vivillon
      // Litleo
      // Pyroar
      // Flabébé
      // Floette Eternal Flower
      // Floette
      // Florges
      // Skiddo
      // Gogoat
      // Pancham
      // Pangoro
      // Furfrou
      // Espurr
      // Meowstic Female
      // Meowstic
      // Honedge
      // Doublade
      // Aegislash Blade Forme
      // Aegislash
      // Spritzee
      // Aromatisse
      // Swirlix
      // Slurpuff
      // Inkay
      // Malamar
      // Binacle
      // Barbaracle
      // Skrelp
      // Dragalge
      // Clauncher
      // Clawitzer
      // Helioptile
      // Heliolisk
      // Tyrunt
      // Tyrantrum
      // Amaura
      // Aurorus
      // Sylveon
      // Hawlucha
      // Dedenne
      // Carbink
      // Goomy
      // Sliggoo
      // Goodra
      // Klefki
      // Phantump
      // Trevenant
      // Pumpkaboo Super Size
      // Pumpkaboo Small Size
      // Pumpkaboo Large Size
      // Pumpkaboo
      // Gourgeist Super Size
      // Gourgeist Small Size
      // Gourgeist Large Size
      // Gourgeist
      // Bergmite
      // Avalugg
      // Noibat
      // Noivern
      // Xerneas
      // Yveltal
      // Zygarde
      // Diancie Mega Diancie
      // Diancie
      // Hoopa Hoopa Unbound
      // Hoopa
      // Volcanion
      // Meltan
      // Melmetal
      // Sirfetch’d
    }
    i++;
  }
}
scanStats();
console.log('Whait for new scan...')
sleep(10000);
scanStats();
console.log('Whait for new scan...')
sleep(10000);
scanStats();
console.log('Whait for new scan...')
sleep(10000);
scanStats();
console.log('Whait for new scan...')
sleep(10000);
scanStats();
console.log('Whait for new scan...')
sleep(10000);
scanStats();
console.log('Whait for new scan...')
sleep(10000);
