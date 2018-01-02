import XLSX from 'xlsx';

export const readExcelFile = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const workbook = XLSX.read(new Uint8Array(e.target.result), {type: 'array'});

      const sheets = workbook.SheetNames.map(sheetName => {
        return {sheetName, content: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])};
      });
      resolve(sheets.reduce((all, sheet) => ({
        ...all,
        [sheet.sheetName]: sheet.content
      }), {}));
    };
    reader.readAsArrayBuffer(file);
  });
};
