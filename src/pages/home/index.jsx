import React from 'react';
import './App.css';

function App() {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/pictures/main.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '1920px',
    height: '4500px',
  };

  return (
    <div className="App" style={backgroundImage}>
      {/* Здесь можно добавить остальной контент страницы */}
    </div>
  );
}

export default App;
