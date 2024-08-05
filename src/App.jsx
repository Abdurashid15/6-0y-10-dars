import React, { useState, useEffect } from 'react';
import './App.css';
import logo from '../public/FinestMart.svg';
import caram from '../public/spinach-PVB3BJ8.png';
import sabzi from '../public/image (2).png';
import img1 from '../public/Dairy.svg';
import img2 from '../public/Fruits and vegetables.svg';
import img3 from '../public/Condiments.svg';
import img4 from '../public/Baby food.svg';
import img5 from '../public/Grain and pasta.svg';
import translations from './info.json';
import hero from "../public/hero.png";
import search from "../public/search.svg";
import check from "../public/Check.svg";
import moon from "../public/moon.svg";
import sun from "../public/sun.svg";

function App() {
  const [language, setLanguage] = useState('en');
  const [t, setT] = useState(translations[language]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = () => {
    setSearchQuery('')
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo"><img src={logo} alt="FinestMart Logo" /></div>
        <nav className="nav">
          <a href="#home">{t.home}</a>
          <a href="#categories">{t.categories}</a>
          <a href="#sales">{t.sales}</a>
          <a href="#faq">{t.faq}</a>
          <a href="#contact">{t.contact}</a>
        </nav>
        <div className="auth-buttons">
          <a href="#signin">{t.signIn}</a>
          <button>{t.signUp}</button>
        </div>
        <select
          className="language-select"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
        </select>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
        </button>
      </header>

      <main className="main-content">
        <section className="promo-section">
          <h1>{t.headline}</h1>
          <p>{t.description}</p>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              <img src={search} alt="" />
            </button>
          </div>
          <img src={hero} alt="" className="hero" />
          <div className="features">
            {t.features.map((feature, index) => (
              <div key={index} className="feature">
                <img src={check} alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
        <aside className="sidebar">
          <div className="product-card">
            <img src={caram} alt={t.spinach} />
            <p>{t.spinach}</p>
            <p>$12.99</p>
          </div>
          <div className="product-card">
            <img src={sabzi} alt={t.carrot} />
            <p>{t.carrot}</p>
            <p>$10.00</p>
          </div>
        </aside>
      </main>

      <section className="categories-section">
        <div className="category">
          <img src={img1} alt={t.dairy} />
          <p>{t.dairy}</p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="category">
          <img src={img2} alt={t.vegetables} />
          <p>{t.vegetables}</p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="category">
          <img src={img3} alt={t.spices} />
          <p>{t.spices}</p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="category">
          <img src={img4} alt={t.honey} />
          <p>{t.honey}</p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="category">
          <img src={img5} alt={t.flour} />
          <p>{t.flour}</p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
      </section>
    </div>
  );
}

export default App;