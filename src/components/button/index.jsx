import React from 'react';
import { ButtonType, SelecButtonType } from './styled';

function Button({
  children, type, variant, onClick,
}) {
  return (
    <ButtonType
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      variant={variant === 'primary' ? 'primary' : 'secondary'}
    >
      {children}
    </ButtonType>
  );
}

function SelectButton({ children, onChange }) {
  return (
    <SelecButtonType onChange={onChange}>
      {children}
    </SelecButtonType>
  );
}

export { SelectButton };
export default Button;
