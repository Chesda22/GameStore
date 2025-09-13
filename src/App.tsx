import React, { useState, useEffect } from 'react';
import './App.css';
import { ClosedDoor, OpenDoor, ClosedChest, OpenChest } from './components/Doors';
import { playDoorSound } from './utils/soundUtils';

interface Game {
  id: number;
  name: string;
  rating: number;
  price: string;
  icon: string;
  gradient: string;
}

const sampleGames: Game[] = [
  { id: 1, name: "Cyber Quest", rating: 4.8, price: "$29.99", icon: "🎮", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { id: 2, name: "Space Warriors", rating: 4.5, price: "$19.99", icon: "🚀", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { id: 3, name: "Mystic Realm", rating: 4.7, price: "$39.99", icon: "🏰", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { id: 4, name: "Racing Thunder", rating: 4.3, price: "$24.99", icon: "🏎️", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
  { id: 5, name: "Zombie Apocalypse", rating: 4.6, price: "$34.99", icon: "🧟", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  { id: 6, name: "Dragon Legends", rating: 4.9, price: "$49.99", icon: "🐉", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { id: 7, name: "Ocean Explorer", rating: 4.4, price: "$22.99", icon: "🐠", gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)" },
  { id: 8, name: "Robot Builder", rating: 4.2, price: "$27.99", icon: "🤖", gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
  { id: 9, name: "Magic Academy", rating: 4.8, price: "$35.99", icon: "🧙", gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)" },
  { id: 10, name: "Sky Adventures", rating: 4.5, price: "$31.99", icon: "☁️", gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  { id: 11, name: "Puzzle Master", rating: 4.7, price: "$15.99", icon: "🧩", gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
  { id: 12, name: "Battle Royale", rating: 4.6, price: "Free", icon: "⚔️", gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" }
];

const GameCard: React.FC<{ game: Game; onAddToCart: (game: Game) => void }> = ({ game, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(game);
  };

  return (
    <div 
      className="game-card" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Add ${game.name} to cart for ${game.price}`}
    >
      <div className="game-icon" style={{ background: game.gradient }}>
        <span className="icon-emoji" aria-hidden="true">{game.icon}</span>
      </div>
      <div className="game-details">
        <h3 className="game-name">{game.name}</h3>
        <div className="game-rating">
          <span className="rating-number">{game.rating}</span>
          <span className="rating-star" aria-label="star rating">★</span>
        </div>
        <div className="game-price">{game.price}</div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false); // Default to closed door
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [isChestOpen, setIsChestOpen] = useState(false);
  const [showChestMessage, setShowChestMessage] = useState(false);
  const [cart, setCart] = useState<Game[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const firstRowGames = sampleGames.slice(0, 6);
  const secondRowGames = sampleGames.slice(6, 12);

  const handleDoorClick = () => {
    const newDoorState = !isDoorOpen;
    setIsDoorOpen(newDoorState);
    playDoorSound();
    setShowWelcomeMessage(newDoorState); // Show message when door opens, hide when closes
  };

  const handleChestClick = () => {
    const newChestState = !isChestOpen;
    setIsChestOpen(newChestState);
    playDoorSound(); // Reuse the same sound for chest
    setShowChestMessage(newChestState); // Show message when chest opens, hide when closes
  };

  const scrollToGames = () => {
    const gamesSection = document.querySelector('.games-section');
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (game: Game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return Math.max(0, cart.reduce((total, game) => {
      const price = game.price === 'Free' ? 0 : parseFloat(game.price.replace('$', ''));
      return total + price;
    }, 0));
  };

  const handlePurchase = () => {
    setCart([]);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };


  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">GameStore</h1>
          <nav className="nav">
            <button onClick={scrollToGames} className="nav-link">Games</button>
            <button className="nav-link cart-button">
              🛒 Cart {cart.length > 0 && `(${cart.length})`}
            </button>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          <h2>Welcome to GameStore</h2>
          <p>Your destination for amazing games</p>
          
          <section className="games-section">
            <h3 className="section-title">Featured Games {'>'}</h3>
            <div className="games-row">
              {firstRowGames.map(game => (
                <GameCard key={game.id} game={game} onAddToCart={addToCart} />
              ))}
            </div>
          </section>

          <section className="games-section">
            <h3 className="section-title">Popular Games {'>'}</h3>
            <div className="games-row">
              {secondRowGames.map(game => (
                <GameCard key={game.id} game={game} onAddToCart={addToCart} />
              ))}
            </div>
          </section>

          {/* Cart Section */}
          <section className="cart-section">
            <h3 className="section-title">Shopping Cart</h3>
            <div className="cart-container">
              <div className="cart-table">
                <div className="cart-header">
                  <div>Game</div>
                  <div>Price</div>
                  <div>Action</div>
                </div>
                {cart.length === 0 ? (
                  <div className="cart-empty">Your cart is empty</div>
                ) : (
                  <>
                    {cart.map((game, index) => (
                      <div key={`${game.id}-${index}`} className="cart-item">
                        <div className="cart-game">
                          <span className="cart-icon">{game.icon}</span>
                          <span className="cart-name">{game.name}</span>
                        </div>
                        <div className="cart-price">{game.price}</div>
                      <button 
                        className="remove-button"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                      </div>
                    ))}
                    <div className="cart-total">
                      <div>Total: ${calculateTotal().toFixed(2)}</div>
                      <div className="purchase-section">
                        <button 
                          className="purchase-button"
                          onClick={handlePurchase}
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Thank You Message */}
              {showThankYou && (
                <div className="thank-you-message">
                  Thank you for your purchase!
                </div>
              )}
            </div>
          </section>
          
          {/* Interactive Door and Chest */}
          <div className="interactive-section">
            <div className="door-container">
              {showWelcomeMessage && isDoorOpen && (
                <div className="welcome-message">
                  Welcome Gamer
                </div>
              )}
              <div 
                className="door-wrapper"
                onClick={handleDoorClick}
              >
                {isDoorOpen ? <OpenDoor /> : <ClosedDoor />}
              </div>
            </div>
            
            <div className="chest-container">
              <div 
                className="chest-wrapper"
                onClick={handleChestClick}
              >
                {isChestOpen ? <OpenChest /> : <ClosedChest />}
              </div>
              {showChestMessage && isChestOpen && (
                <div className="chest-message">
                  Made By Chesda
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
