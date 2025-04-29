import styled, { css } from 'styled-components';

export type ButtonProps = {
  onClick?: (event: any) => void;
  disabled?: boolean;
  isActive?: boolean;
  isInverseColor?: boolean;
};

const secondaryCss = (isActive: boolean, isInverseColor: boolean, disabled: boolean) => {
  if (isInverseColor ? isActive : !isActive) {
    return css`
      color: ${({ theme }) => !disabled ? theme.colors.white : theme.colors.color_grayscale_gray};
      border: ${({ theme }) => `2px solid ${!disabled ? theme.colors.color_secondary_primary : theme.colors.bg_and_disabled_buttons}`};
      background-color: ${({ theme }) => !disabled ? theme.colors.color_secondary_primary : theme.colors.bg_and_disabled_buttons};
    `;
  }

  return css`
    color: ${({ theme }) => !disabled ? theme.colors.color_secondary_primary : theme.colors.color_grayscale_gray};
    border: ${({ theme }) => `2px solid ${!disabled ? theme.colors.color_secondary_primary : theme.colors.bg_and_disabled_buttons}`};

    background-color: inherit;
  `;
};

export const getButtonCss = (isActive: boolean, isInverseColor: boolean, disabled: boolean) => css`
  ${secondaryCss(isActive, isInverseColor, disabled)};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2px;
  font-weight: 600;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  outline: none;

  border-radius: 6px;
  padding: 6px 12px;
  height: auto;
  /* min-width: 120px; */

  font-size: 1rem;
  margin: 0.5rem;

  &:hover {
    opacity: ${!disabled ? 0.8 : 1};
  }
  box-shadow: 0.06rem 0.06rem 0.12rem 0.12rem rgba(0,0,0,0.1);
  transition: opacity 300ms, color 300ms, border 300ms, background-color 300ms;
`;

const Button = styled.button<ButtonProps>`
  ${({ isActive, isInverseColor, disabled }) => {
    return getButtonCss(isActive, isInverseColor, disabled);
  }};
`;

export default Button;
