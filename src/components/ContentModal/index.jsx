import React , { useState } from 'react'
import './ContentModal.scss'

export default function ContentModal({status,name}) {
  
  return (
    
    <>
      {
        name === "story"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              STORY
            </div>

            <div className="content-modal-main">
              <span className="primary-gradient-text">
                Fantasy Island
              </span>
              universe inspired by the annual festivals in many cultures around the world. 
              Our goal is to establish a stable seasonal project, 
              starting at Christmas 2022 and continuing in different forms until next year.
              <br />
              In each season, the project will develop a festival of any culture, 
              developing it into its own story. 
              <br />
              Through the project's games, players can explore the mysteries of that land and receive many valuable rewards.
              The first season is 
               <span className="primary-gradient-text">
                "Santa's Home"
              </span>.
              <br />
              Here, players can discover the secrets of Santa Claus through interesting games and receive gifts under his tree. 
              These rewards will be provided to users completely free of charge. Stay with us, join us, and share with us.
            </div>
          </div>
        </div>
      }

      {
        name === "about"
        &&
        <div className={`content-modal content-modal-partner ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              PARTNER
            </div>

            <div className="content-modal-main d-flex flex-column align-items-center justify-content-center">
              <img src="https://bscscan.com/images/brandassets/BscScan-logo.png" alt="" className="partner-img" />
              <img src="https://1000logos.net/wp-content/uploads/2022/03/CoinMarketCap-logo.png" alt="" className="partner-img" />
              <img src="https://1000logos.net/wp-content/uploads/2022/03/CoinGecko-logo.png" alt="" className="partner-img" />
              <img src="https://www.pngall.com/wp-content/uploads/10/PancakeSwap-Crypto-Logo-PNG-Cutout.png" alt="" className="partner-img" />
            </div>
          </div>
        </div>
      }

      {
        name === "gameplay"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              GAMEPLAY
            </div>

            <div className="content-modal-main">
              <span className="primary-gradient-text">
                Play
              </span>
               and discover
              <span className="primary-gradient-text">
                the secret gifts
              </span>
              of Santa Claus for
              <span className="primary-gradient-text">
               valuable rewards.
              </span>
            </div>
          </div>
        </div>
      }

      {
        name === "roadmap"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              ROAD MAP
            </div>

            <div className="content-modal-main">
              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q3/2022
                </span>
                <div className="content-modal-main">
                  <div className="content-modal-li">
                     Build project concept
                  </div>
                  <div className="content-modal-li">
                    Development of the project's mechanism.
                  </div>

                  <div className="content-modal-li">
                    Testnet
                  </div>

                  <div className="content-modal-li">
                    Whitepaper v1
                  </div>
                </div>
              </div>

              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q4/2022
                </span>
                <div className="content-modal-main">
                  <div className="content-modal-li">
                    Season 1: "Santa's Home"
                  </div>

                  <div className="content-modal-li">
                    Sell tokens on Pinksale
                  </div>

                  <div className="content-modal-li">
                    Project Mainnet
                  </div>

                  <div className="content-modal-li">
                    Game Releases
                  </div>

                  <div className="content-modal-li">
                    Pancake Swap Listing
                  </div>
                </div>
              </div>

              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q1/2023
                </span>
                <div className="content-modal-main">
                  <div className="content-modal-li">
                     Season 2: "Rabbit cave"
                  </div>

                  <div className="content-modal-li">
                    Airdrop event for the New Year Coinmarketcap listing
                  </div>

                  <div className="content-modal-li">
                    CoinGecko Listing
                  </div>

                  <div className="content-modal-li">
                    Expanding the game ecosystem
                  </div>

                  <div className="content-modal-li">
                    Staking
                  </div>
                </div>
              </div>

              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q2/2023
                </span>
                <div className="content-modal-main">
                  <div className="content-modal-li">
                    Season 3: "Eggs of Rapa Nui"
                  </div>

                  <div className="content-modal-li">
                    NFT Marketplace
                  </div>

                  <div className="content-modal-li">
                    Season 4: "Horus Temple"
                  </div>

                  <div className="content-modal-li">
                    Quizz to Earn
                  </div>
                </div>
              </div>

              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q3/2023
                </span>
                <div className="content-modal-main">
                  <div className="content-modal-li">
                    Season 5: "Magpie Bridge"
                  </div>

                  <div className="content-modal-li">
                    3D Video Games
                  </div>

                  <div className="content-modal-li">
                    Season 4: "Tsukiyomi's Home"
                  </div>

                  <div className="content-modal-li">
                    Whitepaper V2
                  </div>

                  <div className="content-modal-li">
                    Metaverse
                  </div>

                  <div className="content-modal-li">
                    Cross-chain
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      }

      {
        name === "tokenomic"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              TOKENOMIC
            </div>

            <div className="tokenomic-img">
              <img src="/images/tokenomic-chart.png" alt="" />
            </div>

            <div className="content-modal-main content-modal-main--tokenomic">
              <div className="content-modal-li">
                <div className="content-modal-li-title">
                  Token :
                </div>
                <span className="primary-gradient-text">
                   Fantasy Island
                </span>
              </div>

              <div className="content-modal-li">
                <div className="content-modal-li-title">
                  Symbol :
                </div>
                <span className="primary-gradient-text">
                   FAI
                </span>
              </div>

              <div className="content-modal-li">
                <div className="content-modal-li-title">
                  Total Supply :
                </div>
                <span className="primary-gradient-text">
                  1.000.000.000
                </span>
              </div>

              <div className="content-modal-li">
                FAI is a token associated with festivals in many cultures around the world, 
                and it will grow the ecosystem without limit over the years. 
                <br />
                Our goal is to bring together crypto investors and festival lovers. 
                <br />
                First, we focus on making FAI tokens available to the wider public for free. 
                <br />
                Holders and charities benefit from the Christmas spirit and receive huge profits.
              </div>

            </div>
          </div>
        </div>
      }

    </>
  )
}
