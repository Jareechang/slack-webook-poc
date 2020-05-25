import {
    JSXSlack,
    Section,
    Divider,
    Blocks,
} from '@speee-js/jsx-slack'

import { AlertInfo } from './components/AlertInfo';

interface Props {}

export const Alert = (props: Props) => {
    return (
        <Blocks>
            <Section><b>Logging Alert</b></Section>

            <Divider />

            <AlertInfo
                type="ok"
                title="Daily scheduled status check"
                description="Application status for app-123238" 
                image={{
                    src: 'https://placekitten.com/500/500',
                    alt: 'cute kitten'
                }}
            />
        </Blocks>
    );
}
