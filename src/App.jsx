import { useState } from 'react'
import style from './App.module.css'
import './App.css'
function App() {

  const [deck,setDeck] = useState([
    { value: 2, suit: "hearts", name: "2", image: "/images/cards/2_of_hearts.svg" },
    { value: 3, suit: "hearts", name: "3", image: "/images/cards/3_of_hearts.svg" },
    { value: 4, suit: "hearts", name: "4", image: "/images/cards/4_of_hearts.svg" },
    { value: 5, suit: "hearts", name: "5", image: "/images/cards/5_of_hearts.svg" },
    { value: 6, suit: "hearts", name: "6", image: "/images/cards/6_of_hearts.svg" },
    { value: 7, suit: "hearts", name: "7", image: "/images/cards/7_of_hearts.svg" },
    { value: 8, suit: "hearts", name: "8", image: "/images/cards/8_of_hearts.svg" },
    { value: 9, suit: "hearts", name: "9", image: "/images/cards/9_of_hearts.svg" },
    { value: 10, suit: "hearts", name: "10", image: "/images/cards/10_of_hearts.svg" },
    { value: 10, suit: "hearts", name: "Jack", image: "/images/cards/jack_of_hearts.svg" },
    { value: 10, suit: "hearts", name: "King", image: "/images/cards/king_of_hearts.svg" },
    { value: 10, suit: "hearts", name: "Queen", image: "/images/cards/queen_of_hearts.svg" },
    { value: 11, suit: "hearts", name: "Ace", image: "/images/cards/ace_of_hearts.svg" },
    { value: 2, suit: "clubs", name: "2", image: "/images/cards/2_of_clubs.svg" },
    { value: 3, suit: "clubs", name: "3", image: "/images/cards/3_of_clubs.svg" },
    { value: 4, suit: "clubs", name: "4", image: "/images/cards/4_of_clubs.svg" },
    { value: 5, suit: "clubs", name: "5", image: "/images/cards/5_of_clubs.svg" },
    { value: 6, suit: "clubs", name: "6", image: "/images/cards/6_of_clubs.svg" },
    { value: 7, suit: "clubs", name: "7", image: "/images/cards/7_of_clubs.svg" },
    { value: 8, suit: "clubs", name: "8", image: "/images/cards/8_of_clubs.svg" },
    { value: 9, suit: "clubs", name: "9", image: "/images/cards/9_of_clubs.svg" },
    { value: 10, suit: "clubs", name: "10", image: "/images/cards/10_of_clubs.svg" },
    { value: 10, suit: "clubs", name: "Jack", image: "/images/cards/jack_of_clubs.svg" },
    { value: 10, suit: "clubs", name: "King", image: "/images/cards/king_of_clubs.svg" },
    { value: 10, suit: "clubs", name: "Queen", image: "/images/cards/queen_of_clubs.svg" },
    { value: 11, suit: "clubs", name: "Ace", image: "/images/cards/ace_of_clubs.svg" },
    { value: 2, suit: "spades", name: "2", image: "/images/cards/2_of_spades.svg" },
    { value: 3, suit: "spades", name: "3", image: "/images/cards/3_of_spades.svg" },
    { value: 4, suit: "spades", name: "4", image: "/images/cards/4_of_spades.svg" },
    { value: 5, suit: "spades", name: "5", image: "/images/cards/5_of_spades.svg" },
    { value: 6, suit: "spades", name: "6", image: "/images/cards/6_of_spades.svg" },
    { value: 7, suit: "spades", name: "7", image: "/images/cards/7_of_spades.svg" },
    { value: 8, suit: "spades", name: "8", image: "/images/cards/8_of_spades.svg" },
    { value: 9, suit: "spades", name: "9", image: "/images/cards/9_of_spades.svg" },
    { value: 10, suit: "spades", name: "10", image: "/images/cards/10_of_spades.svg" },
    { value: 10, suit: "spades", name: "Jack", image: "/images/cards/jack_of_spades.svg" },
    { value: 10, suit: "spades", name: "King", image: "/images/cards/king_of_spades.svg" },
    { value: 10, suit: "spades", name: "Queen", image: "/images/cards/queen_of_spades.svg" },
    { value: 11, suit: "spades", name: "Ace", image: "/images/cards/ace_of_spades.svg" },
    { value: 2, suit: "diamonds", name: "2", image: "/images/cards/2_of_diamonds.svg" },
    { value: 3, suit: "diamonds", name: "3", image: "/images/cards/3_of_diamonds.svg" },
    { value: 4, suit: "diamonds", name: "4", image: "/images/cards/4_of_diamonds.svg" },
    { value: 5, suit: "diamonds", name: "5", image: "/images/cards/5_of_diamonds.svg" },
    { value: 6, suit: "diamonds", name: "6", image: "/images/cards/6_of_diamonds.svg" },
    { value: 7, suit: "diamonds", name: "7", image: "/images/cards/7_of_diamonds.svg" },
    { value: 8, suit: "diamonds", name: "8", image: "/images/cards/8_of_diamonds.svg" },
    { value: 9, suit: "diamonds", name: "9", image: "/images/cards/9_of_diamonds.svg" },
    { value: 10, suit: "diamonds", name: "10", image: "/images/cards/10_of_diamonds.svg" },
    { value: 10, suit: "diamonds", name: "Jack", image: "/images/cards/jack_of_diamonds.svg" },
    { value: 10, suit: "diamonds", name: "King", image: "/images/cards/king_of_diamonds.svg" },
    { value: 10, suit: "diamonds", name: "Queen", image: "/images/cards/queen_of_diamonds.svg" },
    { value: 11, suit: "diamonds", name: "Ace", image: "/images/cards/ace_of_diamonds.svg" }
  ])


  const shuffleDeck = (deck) => {
    let shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
  };
  
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [playerCard, setPlayerCard] = useState([]);
  const [dealerCard, setDealerCard] = useState([]);
  
  const [initBet, setInitBet] = useState(100000);
  const [playerBet, setPlayerBet] = useState();
  
  const [playerValue, setPlayerValue] = useState(0);
  const [dealerValue, setDealerValue] = useState(0);
  
  const [bust, setBust] = useState(false);
  const [win, setWin] = useState(false);
  const [dealerWin, setDealerWin] = useState(false);

  const [disableBet,setDisableBet] = useState(false)
  const [disableHit,setDisableHit] = useState(true)
  const [disableStand,setDisableStand] = useState(true)
  
  const handleBetInput = (event) => {
    setPlayerBet(Number(event.target.value));
  };
  
  const calculateHandValue = (cards) => {
    let totalValue = 0;
    let acesCount = 0;
  
    cards.forEach((card) => {
      totalValue += card.value;
      if (card.name === "Ace") {
        acesCount++;
      }
    });
  
    while (totalValue > 21 && acesCount > 0) {
      totalValue -= 10; // Treat Ace as 1
      acesCount--;
    }
  
    return totalValue;
  };
  
  const handleStart = (event) => {

    
    if(playerBet > initBet ){
      alert("Not enough money!")
      return
    }
    setDisableBet(true)
    setDisableHit(false)
    setDisableStand(false)
    setBust(false);
    setWin(false);
    setDealerWin(false);
    setInitBet((previousBet) => previousBet - playerBet);
  
    const newShuffledDeck = shuffleDeck(deck);
    setShuffledDeck(newShuffledDeck);
  
    const playerInitialCards = [newShuffledDeck[0], newShuffledDeck[2]];
    const dealerInitialCards = [newShuffledDeck[1]];
  
    setPlayerCard(playerInitialCards);
    setDealerCard(dealerInitialCards);
  
    const playerTotalValue = calculateHandValue(playerInitialCards);
    const dealerTotalValue = calculateHandValue(dealerInitialCards);
  
    setPlayerValue(playerTotalValue);
    setDealerValue(dealerTotalValue);
  
    const remainingDeck = newShuffledDeck.slice(3);
    setShuffledDeck(remainingDeck);
  };
  
  const drawCardsForDealer = (currentValue, currentDealerCards, currentDeck) => {
    if (currentValue <= 16 && currentDeck.length > 0) {
      setTimeout(() => {
        const nextCard = currentDeck[0]; // Sledeća karta iz špila
        const updatedDealerCards = [...currentDealerCards, nextCard]; // Dodaj sledeću kartu dilera
        const newDealerValue = calculateHandValue(updatedDealerCards); // Izračunaj novu vrednost dilera
  
        setDealerCard(updatedDealerCards); // Ažuriraj stanje dilera
        setDealerValue(newDealerValue); // Postavi novu vrednost dilera
  
        const updatedDeck = currentDeck.slice(1); // Ažuriraj špil odmah
  
        // Ako je diler premašio 21, postavi pobedu i vrati
        if (newDealerValue > 21) {
          setWin(true); // Diler premašuje 21 (bust)
          setInitBet((previousBet) => previousBet + (playerBet * 2)); // Uvećaj ulog
          console.log(`Dealer busted! new betAmount: ${initBet}`);
          setTimeout(resetGame, 1000); // Reset igre nakon 1 sekunde
          return; // Prekini dalju logiku ako je bust
        }
  
        // Ako je dilerova vrednost 16 ili manje, povuci sledeću kartu
        if (newDealerValue <= 16 && updatedDeck.length > 0) {
          drawCardsForDealer(newDealerValue, updatedDealerCards, updatedDeck); // Rekurzivni poziv sa ažuriranim špilom
        } else {
          checkWinner(newDealerValue); // Proveri pobednika ako diler stane na 17 ili više
        }
      }, 1000); // Pauza od 1 sekunde između poteza dilera
    }
  };
  
  // Kada igrač stane (Stand), pokrećeš dilerov potez i prosleđuješ trenutni špil
  const handleStand = () => {
    setDisableHit(true)
    if (shuffledDeck.length > 0) {
      const dealerInitialValue = calculateHandValue(dealerCard);
      drawCardsForDealer(dealerInitialValue, dealerCard, shuffledDeck); // Pokreni vučenje karata za dilera sa trenutnim špilom
    }
  };
  
  
  // Funkcija za proveru pobednika
  const checkWinner = (newDealerValue) => {
    if (newDealerValue > playerValue) {
      setDealerWin(true); // Diler pobeđuje
      console.log("Dealer Won!");
    } else if (playerValue > newDealerValue || newDealerValue > 21) {
      setWin(true); // Igrač pobeđuje
      console.log("Player Won!");
     
      setInitBet((previousBet) => {
        const newBet = previousBet + (playerBet * 2)
        console.log(`New bet amount : ${newBet}`)
        return newBet
      })

    } else {
      setDealerWin(true); // Diler pobeđuje u slučaju izjednačenja
      console.log("Dealer Won!");
    }
    setTimeout(resetGame, 1000); // Reset igre nakon 1 sekunde
  };
  
  
  // Funkcija za resetovanje igre
  const resetGame = () => {
    setDisableBet(false)
    setDisableHit(true)
    setDisableStand(true)
    setPlayerValue(0);
    setPlayerCard([]);
    setDealerCard([]);
    setDealerValue(0);
    setDealerWin(false)
    setWin(false)
    setBust(false)
  };
  
 // Funkcija za povlačenje karte za igrača
const handleHit = () => {
  if (shuffledDeck.length > 0) {
    setPlayerCard((prevPlayersCard) => {
      const updatedPlayerCards = [...prevPlayersCard, shuffledDeck[0]];
      const newPlayerValue = calculateHandValue(updatedPlayerCards);

      // Provera ako je trenutna vrednost 21 i igrač povuče novu kartu
      if (playerValue === 21 && newPlayerValue > 21) {
        setBust(true);  // Bust jer je vrednost preko 21
        console.log("Player busted with new card after having 21!");
        setTimeout(() => {
          resetGame(); // Reset igre nakon bust-a
        }, 1000);
      } else {
        setPlayerValue(newPlayerValue); // Ažuriraj vrednost igrača

        // Provera da li igrač prelazi 21
        if (newPlayerValue > 21) {
          setBust(true); // Igrač bustuje
          console.log("Player busted!");
          setTimeout(() => {
            resetGame(); // Reset igre nakon bust-a
          }, 1000);
        }
      }

      return updatedPlayerCards;
    });

    setShuffledDeck((prevDeck) => prevDeck.slice(1)); // Smanji špil
  }
};

  


  return (
    <>
      <div className={style.main}>
          <div className={style.dealer}>
            <div className={style.dealercards}>
              {dealerCard.map((card,index) => (
                <div key={index} className={style.cardsOnTable}>
                  <img className={style.card} src={card.image} />
                </div>
              ))}
            </div>
            <div className={style.dealerValue}>
              <p>Delaer: {dealerValue}</p>
            </div>
          </div>
          <div className={style.blackjack_title}>
            <div className={style.blackjack_maintitle}>
              <h2>BLACK JACK</h2>
              <h3>PAYS 3 to 2</h3>
            </div>
            <div>
              <div className={style.blackjack_secondtitle}>
                <h2>Dealer must draw to 16 and stand on al 17's</h2>
              </div>
              <div className={style.gameAlert}>
                {bust && <div>BUST! You lose.</div>}
                {win && <div>You Won!</div>}
                {dealerWin && <div>You lost!</div>}
              </div>
            </div>
          </div>
          <div className={style.player}>
            <div className={style.playercards}>
              {playerCard.map((card,index) => (
                <div className={style.cardsOnTable} key={index}>
                  <img className={style.card} src={card.image} />
                </div>
              ))}
            </div>
            <div className={style.playerValues}>
                <p>Value: {playerValue}</p>
              </div>
            <div className={style.playerbets}>
              <div className={style.playerMoney}>
              <div className={style.money}>Money:{initBet}</div>
              <input onChange={handleBetInput} className={style.inputMoney}></input>
              <button onClick={handleStart} disabled={disableBet} className={style.betMoney}>BET</button>
              </div>
              <div className={style.calls}>
              <button onClick={handleHit} disabled={disableHit} className={style.hit}>+</button>
              <button onClick={handleStand} disabled={disableStand} className={style.stand}>-</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
