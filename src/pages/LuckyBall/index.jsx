import React, { useState } from 'react'
import "./LuckyBall.scss"

export default function LuckyBall() {

    const [spinState, setSpinState] = useState("")
    const [awardState, setAwardState] = useState({
        status: false,
        awards : 1,
        awardsList : [88,0,0,0,0,0,0,0,0]
    })

    const getRandomAnimationSpin = (state) => {
        if(state === "animation-lottery"){
            const randomOption = Math.floor(Math.random() * 2) + 1;
            return `${state}-${randomOption}`
        }
    }

    const handleSpin = (e) => {
        e.preventDefault()
        setAwardState(
            {
                status: false,
                awards : 1,
                awardsList : [...awardState.awardsList]
            }
        )

        setSpinState("animation-lottery")
        // get award letter
        const letterAwards = Math.floor(Math.random() * 7) + 1
        
        const awardsListNew = [...awardState.awardsList]
        awardsListNew[letterAwards] = awardsListNew[letterAwards] + 1

        setTimeout(() => {
            setSpinState("")
            setAwardState(
                {
                    status: true,
                    awards : letterAwards,
                    awardsList : [...awardsListNew]
                }
            )

        },3000)
    }

  return (
    <div className="lucky-ball">
        <div className="lucky-ball-wrapper">
            <div className="wrap-container">
                <div className="machine">
                    <div className={`wrap-machine-content ${spinState}`}>
                        <img className="base-machine" src="./images/lucky-ball/machine.png" alt="" />
                        <div className="light-box">
                            <div className="wrap-ligth">
                                <img className="" src="/images/title_light.png" alt="" />
                                <img className="eff1" src="/images/title_light_2.png" alt="" />
                                <img className="eff2" src="/images/title_light_3.png" alt="" />
                            </div>
                        </div>
                        <div className="machine-title">
                            <div className="wrap-title">
                                <span> 
                                    {/* <span className="char-ani1">f</span>
                                    o4  */}
                                    <span className="char-ani1">l</span>
                                    ucky - 
                                    <span className="char-ani1"> b</span>
                                    all
                                </span>
                            </div>
                        </div>
                        <div className="machine-grass">
                            <img className="" src="/images/machine_grass.png" alt="" />
                        </div>
                        <div className="list-ball">
                            <div className={`wrap-ball ${getRandomAnimationSpin(spinState)}`}>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/1.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/2.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/3.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/4.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/5.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/7.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/8.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/1.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/2.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/award.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/3.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/4.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/5.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/6.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/7.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src="./images/lucky-ball/8.png" className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group-btn">
                            <a onClick={(e) => handleSpin(e)} className="buttonSpin">
                                <img className="" src="/images/lucky-ball/01times.png" alt="" />
                            </a>
                            
                            <a onClick={(e) => handleSpin(e)} className="buttonSpin ">
                                <img className="" src="/images/lucky-ball/10 times.png" alt="" />
                            </a>
                            
                            <a onClick={(e) => handleSpin(e)} className="buttonSpin ">
                                <img className="" src="./images/lucky-ball/100 times.png" alt="" />
                            </a>
                        </div>

                        {
                            awardState.status
                            &&
                            <div className="award-ball">
                                <div className="item">
                                    <div className="wrap-item">
                                        <img src={`./images/lucky-ball/${awardState.awards}.png`} className="base-img" />
                                        <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="awards-list">
                <div className="centering">
                    <div className="machine-title">
                        <div className="wrap-title">
                            <span> 
                                <span className="char-ani1">L</span>
                                ist
                                <span className="char-ani1"> O</span>
                                f
                                <span className="char-ani1"> A</span>
                                wards
                            </span>
                        </div>
                    </div>
                </div>
            
                <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/1.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[1]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/2.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[2]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/3.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[3]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/4.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[4]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/5.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[5]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/6.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[6]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/7.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[7]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/8.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[8]
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4">
                                <div className="awards-item">
                                    <img src="./images/lucky-ball/5.png" alt=""></img>
                                    <div className="awards-item-name">
                                        {
                                            awardState.awardsList[5]
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
