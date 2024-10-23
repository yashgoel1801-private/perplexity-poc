import { Given, When, Then } from '@wdio/cucumber-framework';
import excelFileConfig from '../../../excelConfig.json' assert {type: 'json'}
import { getSheetFromExcelFile, writeDataToExcel } from '../../../utils/index.js';
import { openPerplexityHomePage, writePrompt, submitPrompt } from '../pageObjects/HomePage.js';
import { getResponse } from '../pageObjects/ResponsePage.js';

Given('I fetch the responses for prompts saved in excel sheet', async () => {

    //Get the excel data
    const excelData = getSheetFromExcelFile({ fileLocation: excelFileConfig.fileLocation, sheetName: excelFileConfig.sheetName });
    let outData = [];

    //Loop over all the prompts
    for (const row of excelData) {
        // get the prompt for a row
        const prompt = row[excelFileConfig.promptColumnName]
        console.log('Prompt = ', prompt);
        let response = '';
        try {
            // Open the page
            await openPerplexityHomePage();

            // write the prompt and send the request
            await writePrompt(prompt);
            await submitPrompt();

            //Get the response and save it to excel sheet
            response = await getResponse()
        } catch (e) {
            console.log('Failed to fetch response for prompt = ' + prompt + '\n due to error : ' + e);
            response = 'Failed to fetch response for given prompt due to error: ' + e;
        }

        // Push the data to output object to be saved as excel
        outData.push({
            ...row, "Response": response
        });
    }

    // write data to excel sheet
    writeDataToExcel({ fileLocation: excelFileConfig.fileLocation, newExcelData: outData, sheetName: excelFileConfig.sheetName });
})

