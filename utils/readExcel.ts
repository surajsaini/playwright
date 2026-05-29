import * as XLSX from 'xlsx';
import path from 'path';

//const excelPath = path.join(__dirname, '../data/userLogin.xlsx');

export function readExcel(filePath: string, sheetName: string) {
    //const fullPath = path.isAbsolute(filePath) ? filePath : path.resolve(__dirname, '..', filePath);

    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;


}