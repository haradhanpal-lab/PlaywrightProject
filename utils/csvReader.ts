import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
export function readCsvData(filePath: string): any[] {
  const csvFilePath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
    const records = parse(fileContent, {
    columns: true,           // Treat the first row as column headers
    skip_empty_lines: true,  // Ignore empty rows
  });  
  return records;
}