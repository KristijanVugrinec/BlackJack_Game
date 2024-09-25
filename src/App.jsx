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
    { value: 10, suit: "hearts", name: "Queen", image: "/images/cards/queen_of_hearts.svg" }
  ])


  const shuffleDeck = (deck) => {
    let shuffledDeck = [...deck];
    for(let i = shuffledDeck.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i],shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]
    }
    return shuffledDeck
  }


  const [shuffledDeck, setShuffledDeck] = useState([])
  const [playerCard,setPlayerCard] = useState([])
  const [dealerCard,setDealerCard] = useState([])

  const [initbet,setInitBet] = useState(100000)
  const [playerBet,setPlayerBet] = useState()


  const handleBetInput = (event) => {
    setPlayerBet(Number(event.target.value))
  }

  const handleStart = (event) => {
    setInitBet((previousBet) => previousBet - playerBet)
    
    
    const newShuffledDeck = shuffleDeck(deck)
    setShuffledDeck(newShuffledDeck)


    setPlayerCard([newShuffledDeck[0],newShuffledDeck[2]]);
    setDealerCard([newShuffledDeck[1]])


    const remainingDeck = newShuffledDeck.slice(3)
    setShuffledDeck(remainingDeck)
  }


  const handleStand = () => {
    if(shuffledDeck.length > 0){
      setDealerCard((prevDealerCard) => [
        ...prevDealerCard,shuffledDeck[0]
      ])

      setShuffledDeck((prevDeck) => prevDeck.slice(1))
    }
  }

  const handleHit = () => {
    if(shuffledDeck.length > 0){
      setPlayerCard((prevPlayersCard) => [
        ...prevPlayersCard,shuffledDeck[0]
      ])

      setShuffledDeck((prevDeck) => prevDeck.slice(1))
    }
  }


  return (
    <>
      <div className={style.main}>
          <div className={style.dealer}>
            <div className={style.dealercards}>
              {dealerCard.map((card,index) => (
                <div key={index}>
                  <img className={style.card} src={card.image} />
                  <p>{card.name} of {card.suit}</p>
                </div>
              ))}
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
            </div>
          </div>
          <div className={style.player}>
            <div className={style.playercards}>
              {playerCard.map((card,index) => (
                <div key={index}>
                  <img className={style.card} src={card.image} />
                  <p>{card.name} of {card.suit}</p>
                </div>
              ))}
            </div>
            <div className={style.playerbets}>
              <div className={style.playerMoney}>
              <div className={style.money}>Money:{initbet}</div>
              <input onChange={handleBetInput} className={style.inputMoney}></input>
              <button onClick={handleStart} className={style.betMoney}>BET</button>
              </div>
              <div className={style.calls}>
              <button onClick={handleHit} className={style.hit}>+</button>
              <button onClick={handleStand} className={style.stand}>-</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
