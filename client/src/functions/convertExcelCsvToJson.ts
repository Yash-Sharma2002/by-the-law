//@ts-ignore
import * as XLSX from 'xlsx';

const convertExcelCsvToJson = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
            const data = event.target?.result;
            if (typeof data === 'string') {
                const workbook = XLSX.read(data, { type: 'binary' });

                const jsonResult: { [key: string]: any[] } = {};
                workbook.SheetNames.forEach((sheetName:any) => {
                    const worksheet = workbook.Sheets[sheetName];
                    const jsonSheet = XLSX.utils.sheet_to_json(worksheet);
                    jsonResult[sheetName] = jsonSheet;
                });

                resolve(jsonResult);
            } else {
                reject(new Error('Failed to read file'));
            }
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsBinaryString(file);
    });
};

export default convertExcelCsvToJson;