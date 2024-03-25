import React from 'react';

import css from './footer.module.css';

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.txt}>
        <div>All rights reserved© {currentYear}</div>
      </div>
    </footer>
  );
}
