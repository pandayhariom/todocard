import * as XLSX from 'xlsx/xlsx.mjs';

export const exportToExcel = (tasks) => {
  const data = tasks.map((task) => ({ Task: task.title, Status: task.status }));
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Tasks');
  XLSX.writeFile(wb, 'task_list.xlsx');
};
