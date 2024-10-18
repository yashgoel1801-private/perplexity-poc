import XLSX from "xlsx";

export const getExcelFile = (fileLocation) => {
    return XLSX.readFile(fileLocation);
}

export const getSheetName = (excelFile, sheetName) => {
    return sheetName ? sheetName : excelFile.SheetNames[0];
}

export const getSheetFromExcelFile = ({ fileLocation, sheetName }) => {
    const excelFile = getExcelFile(fileLocation);
    const sheetToOpen = getSheetName(excelFile, sheetName);
    const excelSheetData = XLSX.utils.sheet_to_json(excelFile.Sheets[sheetToOpen]);
    console.log('excel data =', JSON.stringify(excelSheetData));
    return excelSheetData;
}

export const writeDataToExcel = ({ fileLocation, newExcelData, sheetName }) => {
    const excelFile = getExcelFile(fileLocation);
    const sheetToWrite = getSheetName(excelFile, sheetName);
    const newSheet = XLSX.utils.json_to_sheet(newExcelData)
    excelFile.Sheets[sheetToWrite] = newSheet
    // Writing to our file
    XLSX.writeFile(excelFile, fileLocation);
}



