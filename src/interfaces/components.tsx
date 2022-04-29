export interface ItemBarProps {
    title: string;
    size?: number,
    background?: string,
}

export interface ModalProps{
    show: boolean;
    children: JSX.Element;
}

export interface NavBarLinkProps {
    route: string;
    title: string
}

export interface PokemonContainerProps {
    title: string;
    titleFull?: boolean;
    children: JSX.Element;
}

export interface QuitButtonProps {
    press: () => void;
}
