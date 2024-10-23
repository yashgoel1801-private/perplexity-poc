taskkill /f /im chromedriver.exe
call SETX NODE_TLS_REJECT_UNAUTHORIZED 0
call npm install
call npm run test
taskkill /f /im chromedriver.exe
exit