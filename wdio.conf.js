export const config = {

    runner: 'local',

    specs: [
        './test/features/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        "wdio:enforceWebDriverClassic": true,
        "goog:chromeOptions":{
            args: [`--user-data-dir=${process.env.LOCALAPPDATA}\\Google\\Chrome\\User Data`]
        }
    }],
    logLevel: 'silent',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./test/features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 999999,
        ignoreUndefinedDefinitions: false
    },
}
