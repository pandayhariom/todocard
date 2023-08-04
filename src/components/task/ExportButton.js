import React from 'react';
import XLSX from 'xlsx';

const ExportButton = ({ tasks }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    XLSX.writeFile(workbook, 'tasks.xlsx');
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExportButton;
