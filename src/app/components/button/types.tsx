interface IButton{
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export interface IAddButton extends IButton{
    onClick: () => void;
    text: string;
}

export interface ISubmitButton extends IButton{
    text: string;
}

export interface ITableButton extends IButton, StyledButtonProps{
    img: string
    onClick: () => void
}

// Styled
export interface StyledButtonProps {
    hoverColor?: string;
  }