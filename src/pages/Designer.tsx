import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { designers } from '../designers';

// Dynamically import all images in the pets directory
const petImageModules = import.meta.glob('/src/assets/pets/**/*.{png,jpg,jpeg,gif,webp,svg}', { eager: true, as: 'url' });

const Designer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const designer = designers.find((d) => d.slug === slug);

  if (!designer) {
    return (
      <div className="designer-page">
        <div className="designer-header">
          <Link to="/" className="back-link">← Back to Village</Link>
          <h1 className="designer-title">Designer not found</h1>
        </div>
      </div>
    );
  }

  // Filter images for this specific designer
  const folderPath = `/src/assets/pets/${slug}/`;
  const designerPets = Object.entries(petImageModules)
    .filter(([path]) => path.startsWith(folderPath))
    .map(([path, url]) => {
      // Extract filename without extension
      const filename = path.split('/').pop()?.split('.')[0] || 'Unknown';
      
      let petName = filename;
      let gifterName = '';

      if (filename.includes('_')) {
        const parts = filename.split('_');
        petName = parts[0];
        gifterName = parts.slice(1).join('_'); // In case there are multiple underscores
      }

      return {
        url: url as string,
        petName,
        gifterName
      };
    });

  return (
    <div className="designer-page">
      <div className="designer-header">
        <Link to="/" className="back-link">← Back to Village</Link>
        <h1 className="designer-title">{designer.name}'s pet garden!</h1>
      </div>
      
      {designerPets.length > 0 ? (
        <div className="pet-grid">
          {designerPets.map((pet, index) => (
            <div key={index} className="pet-card">
              <div className="pet-image-container">
                <img src={pet.url} alt={pet.petName} className="pet-image" />
              </div>
              <div className="pet-info">
                <div className="pet-name">{pet.petName}</div>
                {pet.gifterName && (
                  <div className="pet-gifter">gifted by {pet.gifterName}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="pet-grid">
          <div className="no-pets">
            No pets found in the garden yet. 
            <br /><br />
            Add some to src/assets/pets/{slug}/!
          </div>
        </div>
      )}
    </div>
  );
};

export default Designer;
