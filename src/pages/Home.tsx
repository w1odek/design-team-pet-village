import React from 'react';
import { Link } from 'react-router-dom';
import { designers } from '../designers';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Design Team Pet Village</h1>
      <div className="designer-grid">
        {designers.map((designer) => (
          <Link
            key={designer.slug}
            to={`/designer/${designer.slug}`}
            className="designer-card"
          >
            {designer.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
