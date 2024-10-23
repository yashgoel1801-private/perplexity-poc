
export const openPerplexityHomePage = async () => {
    await browser.url('https://www.perplexity.ai/');
    await browser.pause('5000');
    if (await browser.$('svg[data-icon="xmark"]').isDisplayed()) {
        await browser.$('svg[data-icon="xmark"]').click();
    }
    if (await browser.$('//div[text()="Close"]').isDisplayed()) {
        await browser.$('//div[text()="Close"]').click();
    }
}

export const writePrompt = async (promptString) => {
    await browser.$('textarea[placeholder]').setValue(promptString);
    await browser.pause('1000');
}

export const submitPrompt = async () => {
    await browser.$('button[aria-label="Submit"]').click();
    await browser.pause(1000);
}