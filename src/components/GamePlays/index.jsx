import React from 'react'
import { Link } from 'react-router-dom'
import './GamePlays.scss'

export default function GamePlays({name}) {
  return (
    <>
        {
            name === "gameplay"
            &&
            <div className="gameplays">

                <Link to="/lucky-wheel" className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/LUCKY WHEEL.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Lucky Wheel
                    </div>
                </Link>

                <Link to="/lucky-ball" className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/lucky-ball.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Lucky Ball
                    </div>
                </Link>

                <a href="https://pick-ball.vercel.app/" className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/pick-ball.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Lucky Bauble
                    </div>
                </a>

                <Link to='/prediction' className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/predition.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Prediction
                    </div>
                </Link>

                <Link to="/login" className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/marketplace.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Marketplace
                    </div>
                </Link>

                {/* <Link to='/login' className="gameplays-item gameplays-item--disabled">
                    <div className="gameplays-item-img centering">
                        <img src="/images/gameplay-3.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Evoplay
                    </div>
                </Link> */}
            </div>
        }
    </>
  )
}
