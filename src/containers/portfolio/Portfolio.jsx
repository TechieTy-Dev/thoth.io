import React from 'react';
import { Article } from '../../components';
import harpocrypto from '../../assets/harpocrypto.PNG'
import realestate from '../../assets/real-estate.PNG'
import utopia from '../../assets/utopia.PNG'
import thoth from '../../assets/thoth.png';
import iris from '../../assets/iris.PNG';
import lugus from '../../assets/lugus.PNG';
import muse from '../../assets/muse.png';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className='thoth__blog section__padding' id="portfolio">
      <div className="thoth__blog-heading">
        <h1 className="gradient__text">
        Portfolio Projects
        </h1>
      </div>
      <div className="thoth__blog-container">
        <div className="thoth__portfolio_groupB">
          <a href="https://harpocrypto.vercel.app" target="_blank" rel="noreferrer">
          <Article imgUrl={harpocrypto}  url="https://harpocrypto.vercel.app/" text="Crypto Dashboard built in React, AntDesign, CoinMarketCo API to get real coin data, Bing API for real time blog posts on crypto and deployed and hosted on Vercel " date="June 6, 2022"  title="HarpoCrypto - Blockchain" /></a>
          <a href="https://real-estate-group.vercel.app" target="_blank" rel="noreferrer">
          <Article imgUrl={realestate} text="Real Estate Website built in NextJS with Real Estate API and styled with Chakra-UI." date="June 1, 2022" title="Real Estate Group" url="https://real-estate-group.vercel.app/"/></a>
          <a href="https://crypto-utopia.vercel.app" target="_blank" rel="noreferrer">
          <Article imgUrl={utopia} url="https://crypto-utopia.vercel.app" text="Crypto Website - FrontEnd is React/Tailwind - Backend is deployed and hosted on Vercel" date="June 21, 2022" title="Utopia - Blockchain"/></a>
          <a href="https://thothio.firebaseapp.com" target="_blank" rel="noreferrer">
          <Article imgUrl={thoth} text="Thoth made in React and hosted on Firebase"date="Sept 16, 2021" title="Punks Clone - Web App" url="https://thothio.firebaseapp.com/" /></a>
          <a href="https://iris-bc.vercel.app/" target="_blank" rel="noreferrer">
          <Article imgUrl={iris} text="Iris is a twitter clone. Frontend is built on React, backend uses Sanity for a database that stores tweets and users, and Vercel for deployment. MetaMask is needed to use Demo." date="June 22, 2022" title="Iris - Blockchain Social App " url="https://iris-bc.vercel.app/" /></a>
          <Article imgUrl={lugus} text="Lugus is a Amazon clone. Frontend is built on Next and Tailwind, backend uses Moralis for a database that stores users, NFTs, and transactions through Smart Contracts. Deployed on Vercel. MetaMask is needed to use Demo." date="June 23, 2022" title="Lugus - Blockchain Ecom App" url="https://iris-bc.vercel.app/" />
          <Article imgUrl={muse} text="Muse Music is a Spotify clone. Frontend is built on Next and Tailwind, backend uses Moralis for a database that stores users, NFTs, and transactions through Smart Contracts. Deployed on Vercel. MetaMask is needed to use Demo." date="June XX, 2022" title="Muse - Blockchain Music App" url="/" />
          
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio
