import { useState, useEffect } from 'react';

const START_YEAR = 2010;

export const YearsCounter = () => {
  const [years, setYears] = useState(new Date().getFullYear() - START_YEAR);

  useEffect(() => {
    // This could be more complex, e.g., animating the count,
    // but for now, it's a static calculation.
    setYears(new Date().getFullYear() - START_YEAR);
  }, []);

  return <span>{years}+ лет на сцене</span>;
};
