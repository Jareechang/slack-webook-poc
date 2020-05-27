/** @jsx JSXSlack.h **/
import { JSXSlack } from '@speee-js/jsx-slack'
import { SlackWebhook } from './SlackWebhook';
import { Alert } from './Alert';
import * as t from './types';

class Program implements t.Program {
    private slackWebhook: t.SlackWebhook;

    constructor() {
        this.slackWebhook = new SlackWebhook(process.env.SLACK_MS_WEBHOOK_ENDPOINT || '');

        this._setup();
    }

    private _setup(): void {
        const {SLACK_MS_DEBUG = false} = process.env;
        if (SLACK_MS_DEBUG) {
            this.slackWebhook.setDebugMode();
        }
    }

    public async run(): Promise<void> {
        // Create message
        const blocks = (
            JSXSlack(<Alert />)
        );

        // Send message
        await this.slackWebhook.sendMessage({
            channel: process.env.SLACK_MS_CHANNEL || '',
            text: 'some text',
            blocks
        });
    }
}

const program = new Program();

program.run();
