import {
    JSXSlack,
    Fragment,
    //Blocks,
    Section,
    Image,
    Divider,
    Context
} from '@speee-js/jsx-slack'

import * as utils from './AlertInfo.utils';

interface ImageOptions {
    src: string;
    alt: string;
}
 
interface Props {
    /**
     * Title of the alert
     * */
    title: string;

    /**
     * Description of the alert
     * */
    description: string;

    /**
     * type of the alert
     * */
    type: 'warn' | 'error' | 'ok'

    /**
     * Image 
     * */
    image: ImageOptions;
}

const defaultProps : Props = {
    title: '',
    description: '',
    type: 'ok',
    image: {
        src: '',
        alt: ''
    }
};

export const AlertInfo = (
    props: Props = defaultProps 
) => {
    const {
        title,
        description,
        type,
        image
    } = props;

    return (
        <Fragment>
            <Section>
                <b>Title:</b> {title || ''}<br />
                <b>Date:</b> {utils.getCurrentDate()}<br />
                <b>Description:</b> {description || ''}<br />
                <Image
                    src={image.src}
                    alt={image.alt}
                />
            </Section>
            <Divider />
            <Context>{utils.getEmoji(type)} - <b>{utils.getAlertContextMessage(type)}</b></Context>
        </Fragment>
    );
}
