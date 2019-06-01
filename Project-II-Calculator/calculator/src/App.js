import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const numBtns = [
  {
    text: "0",
    buttonStyle: {
      width: "100%"
    }
  },
  {
    text: "1",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "2",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "3",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "4",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "5",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "6",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "7",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "8",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "9",
    buttonStyle: {
      width: "33.33%"
    }
  },
  {
    text: "clear",
    buttonStyle: {
      width: "100%",
      fontWeight: 500,
    }
  }
]

const actBtns = [
  {

  }
]

const App = () => {
  return (
    <div className="container">
      <header className="display">
        <CalculatorDisplay />
      </header>
      <aside className="sidebar">
        <ActionButton />
      </aside>
      <section className="main">
        {numBtns.map(btn => {
          return <NumberButton numBtn={btn} />;
        })}
      </section>
    </div>
  );
};

export default App;
