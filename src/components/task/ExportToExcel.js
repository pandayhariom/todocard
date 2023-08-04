import React from 'react';
import { exportToExcel } from '../utils/utils';

const ExportToExcel = ({ tasks }) => {
  const handleExport = () => {
    exportToExcel(tasks);
  };

  return <button onClick={handleExport}>Export to Excel</button>;
};

export default ExportToExcel;
