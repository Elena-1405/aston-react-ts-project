import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Страница не найдена!</h2>
      <button className="backPage" onClick={handleGoBack}>
        Назад
      </button>
    </div>
  );
}
