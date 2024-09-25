import { useState } from 'react'
import style from './App.module.css'
import './App.css'
function App() {

  return (
    <>
      <div className={style.main}>
          <div className={style.dealer}>
            <div className='delaers_card'>
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
            <div className={style.playercards}></div>
            <div className={style.playerbets}>
              <div className={style.playerMoney}>
              <div className={style.money}>MONEY</div>
              <button className={style.betMoney}>BET</button>
              </div>
              <div className={style.calls}>
              <button className={style.hit}>+</button>
              <button className={style.stand}>-</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
