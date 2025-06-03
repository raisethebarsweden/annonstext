import { useState } from 'react';

export default function Home() {
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');
  const [result, setResult] = useState('');

  const generateAd = () => {
    setResult(`📢 **Till salu: ${carModel} för ${price} kr**\n\nBeskrivning...`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Blocket AI Annonsgenerator 🚗</h1>
      <input
        type="text"
        placeholder="Bilmodell (t.ex. Volvo XC60)"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="number"
        placeholder="Pris (kr)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: '100%', padding: '10px' }}
      />
      <button
        onClick={generateAd}
        style={{
          background: '#0070f3',
          color: 'white',
          padding: '12px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Generera Annons
      </button>
      {result && (
        <div style={{ marginTop: '30px', whiteSpace: 'pre-line' }}>
          <h3>Din Annons:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
