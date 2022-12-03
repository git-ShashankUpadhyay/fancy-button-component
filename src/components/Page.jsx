import React from 'react';

import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>
        <h2>Something about myself</h2>
        <p>
        My name is {' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <strong>Shashank Upadhyay</strong>
          </a>{' '}
          I am a fourth-year student of Btech CSE at GLA University, Mathura. 
        </p>
        <p>
        during my graduation, I learned languages like java, HTML, CSS, javascript, SQL, and concepts of the database management system, data structure, and algorithms using those technologies and concepts I did some projects like :
        </p>
        <ul>
          <li>
          Food waste management system(a website which connects NGOs to restaurants to provide food for the needy people) 
          </li>
          <li>
          Prediction of Oil spills events at Sea(which predicts oil spills events at sea using machine learning concept.)
          </li>
        </ul>
        <p>
        I am confident that the skills I developed during my graduation have prepared me for this role in your company. My knowledge of all these concepts makes me a great candidate for this opening. I would love to join and add great value to the company.
        </p>
        <div className="tip-wrapper">
          <span className="tip">Thank</span>you for your consideration{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
        </div>
      </section>
    </article>
  );
};
