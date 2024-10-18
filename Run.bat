taskkill /f /im chromedriver.exe
call npm install
call npm run test
taskkill /f /im chromedriver.exe
exit