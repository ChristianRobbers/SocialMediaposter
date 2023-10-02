import { Component, ComponentType, MouseEvent, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { EmojiImageProps, EmojiPluginStore, EmojiPluginTheme, EmojiSelectGroup } from '../../index';
export interface EmojiSelectPubParams {
    onClose?(): void;
    onOpen?(): void;
    closeOnEmojiSelect?: boolean;
}
interface EmojiSelectParams extends EmojiSelectPubParams {
    theme: EmojiPluginTheme;
    store: EmojiPluginStore;
    selectGroups?: EmojiSelectGroup[];
    selectButtonContent?: ReactNode;
    toneSelectOpenDelay?: number;
    emojiImage: ComponentType<EmojiImageProps>;
    menuPosition?: 'top' | 'bottom';
}
export default class EmojiSelect extends Component<EmojiSelectParams> {
    static propTypes: {
        theme: PropTypes.Validator<object>;
        store: PropTypes.Validator<object>;
        selectGroups: PropTypes.Requireable<(PropTypes.InferProps<{
            title: PropTypes.Validator<string>;
            icon: PropTypes.Validator<string | PropTypes.ReactElementLike>;
            categories: PropTypes.Validator<(string | null | undefined)[]>;
        }> | null | undefined)[]>;
        selectButtonContent: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        toneSelectOpenDelay: PropTypes.Requireable<number>;
        menuPosition: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        selectButtonContent: string;
        selectGroups: EmojiSelectGroup[];
        toneSelectOpenDelay: number;
    };
    state: {
        isOpen: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onClick: (event: MouseEvent) => void;
    onButtonMouseUp: () => void;
    openPopover: () => void;
    closePopover: () => void;
    render(): ReactElement;
}
export {};
