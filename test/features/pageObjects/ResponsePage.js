export const getResponse = async () => {
    await browser.pause('10000');
    if (await browser.$('//div[text()="Close"]').isDisplayed()) {
        await browser.$('//div[text()="Close"]').click();
    }
    const response = await browser.$('div.prose').getText();
    console.log('response = ', response);
    return response;
}