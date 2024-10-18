### Pre-requisites ###

1. Make sure to install node v20 from URL: https://nodejs.org/en/download/prebuilt-installer

### Steps to Run: ###

1. Update excelConfig.json file, and mention your excel sheet's details including:

  a) fileLocation: complete path of excel file, and make sure Backward Slash Symbol (\) is replaced with double Backward Slash Symbol (\).
  For example: complete path is: "C:\GitRepos\perplexityPOC\ExampleExcel.xlsx", but in the config file it should be saved as :   "C:\\GitRepos\\perplexityPOC\\ExampleExcel.xlsx"

  b) sheetName: name of the work sheet from excel file where prompt is saved.
  Example: "Sheet1"

  c) promptColumnName: name of the column contaning the prompt to be sent to chat bot API.
  Example: "Prompt"

  After making the necessary changes, save the file.

2. Double click Run file. A cmd window will open during its execution and close automatically once completed.

Complete Response from Chatbot API will be automatically saved to the provided excel sheet in a new column : "Response".
