// src/pages/LanguagePage.js

import React from 'react';
import LanguageChart from '../components/LanguageChart';

const languageData = [
  { language: 'JavaScript', percentage: 80 },
  { language: 'Python', percentage: 60 },
  { language: 'Java', percentage: 90 },
  { language: 'C#', percentage: 90 },
  { language: 'PHP', percentage: 90 },
];

const LanguagePage = () => {
  return (
    <div>
      <LanguageChart data={languageData} />
    </div>
  );
};

export default LanguagePage;
