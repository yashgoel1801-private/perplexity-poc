import { Given, When, Then } from '@wdio/cucumber-framework';
import excelFileConfig from '../../../excelConfig.json' assert {type: 'json'}
import { getSheetFromExcelFile, writeDataToExcel } from '../../../utils/index.js';

let excelData;

Given('I am on the Perplexity page', async () => {
    await browser.url('https://www.perplexity.ai/');
    await browser.pause('5000');
    if (await browser.$('svg[data-icon="xmark"]').isDisplayed()) {
        await browser.$('svg[data-icon="xmark"]').click();
    }
    if (await browser.$('//div[text()="Close"]').isDisplayed()) {
        await browser.$('//div[text()="Close"]').click();
    }
});

When('I input the prompt string', async () => {
    // Get the prompt from excel sheet
    excelData = getSheetFromExcelFile({ fileLocation: excelFileConfig.fileLocation, sheetName: excelFileConfig.sheetName });
    const prompt = excelData[0][excelFileConfig.promptColumnName]
    console.log('Prompt = ', prompt);
    let textArea;
    await browser.$('textarea[placeholder]').setValue(prompt);
    await browser.pause('1000');
});

When('I click on Submit button', async () => {
    await browser.$('button[aria-label="Submit"]').click();
});

Then('I save the response', async () => {
    await browser.pause('30000');
    if (await browser.$('//div[text()="Close"]').isDisplayed()) {
        await browser.$('//div[text()="Close"]').click();
    }
    let response = await browser.$('div.prose').getText();
    console.log('response = ', response);
    const oldExcelData = excelData;
    const newData = oldExcelData.map(row => { return { ...row, "Response": response } });
    writeDataToExcel({ fileLocation: excelFileConfig.fileLocation, newExcelData: newData, sheetName: excelFileConfig.sheetName });
})

