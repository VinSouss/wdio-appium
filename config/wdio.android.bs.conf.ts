require('dotenv').config()
import { config } from './wdio.shared.conf'
import path from 'path'

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/android/add-note-screen*.ts')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://72b2923cee2fead4df3b74307007ce14b3fc75ed",
    "appium:autoGrantPermissions": true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;