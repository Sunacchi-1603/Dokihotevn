import React, { useState } from 'react';
import './App.css';

function ParentComponent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedText, setSelectedText] = useState(null);

  const items = [
    { id: 1, name: 'Item 1', texts: [{ id: 1, name: 'Text 1-1' }, { id: 2, name: 'Text 1-2' }, { id: 3, name: 'Text 1-3' }] },
    { id: 2, name: 'Item 2', texts: [{ id: 4, name: 'Text 2-1' }, { id: 5, name: 'Text 2-2' }, { id: 6, name: 'Text 2-3' }] },
    { id: 3, name: 'Item 3', texts: [{ id: 7, name: 'Text 3-1' }, { id: 8, name: 'Text 3-2' }, { id: 9, name: 'Text 3-3' }] },
  ];

  const handleTextClick = (text) => {
    setSelectedText(text);
  };
console.log(selectedText);
  const handleMouseEnter = (itemId) => {
    setSelectedItem(itemId);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  return (
    <div className="parent">
      <span className="main-text">Văn bản gốc</span>
      <div className="items-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`item ${selectedItem === item.id ? 'selected' : ''}`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
            {selectedItem === item.id && (
              <div className="texts">
                {item.texts.map((text, index) => (
                  <span key={index} className="text"
                  onClick={() => handleTextClick(text.id)}
                  >{text.name}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;
