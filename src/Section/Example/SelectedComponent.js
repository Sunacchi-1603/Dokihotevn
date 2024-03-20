import React from 'react';

function SelectedComponent({ text }) {
  return (
    <div className="selected-component">
      <p>Đây là component được hiển thị khi bạn chọn "{text}".</p>
    </div>
  );
}

export default SelectedComponent;