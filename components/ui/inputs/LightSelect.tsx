import { borderGradient } from '@/styles/mixins'
import ReactSelect, { Props, DropdownIndicatorProps, components } from 'react-select'
import styled from 'styled-components'
import ArrowDropdownG50 from '../icons/ArrowDropdownG50'

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ArrowDropdownG50 />
  </components.DropdownIndicator>
)

const LightSelect = (props: Omit<Props, 'classNamePrefix' | 'theme'>) => {
  return (
    <StyledReactSelect
      components={{ DropdownIndicator }}
      classNamePrefix="react-select"
      {...props}
    />
  )
}
export default LightSelect

const optionHeight = 44
const visibleOptionCount = 4

const StyledReactSelect = styled(ReactSelect)`
  .react-select__control {
    position: relative;
    background: none;
    border: 1px solid ${({ theme }) => theme.color.G40};
    border-radius: 74px;
    height: ${optionHeight}px;
    transition: none;

    &.react-select__control--is-focused,
    &.react-select__control--menu-is-open,
    &.react-select__control--is-focused.react-select__control--menu-is-open {
      /* background: ${({ theme }) => theme.color.G0}; */
      border: 1px solid ${({ theme }) => theme.color.G40};
      box-shadow: none;
    }

    :not(&.react-select__control--menu-is-open):has(.react-select__value-container--has-value) {
      ${borderGradient(2)}

      .react-select__value-container {
        padding: 0 14px;
      }
    }

    &.react-select__control--menu-is-open,
    &.react-select__control--is-focused.react-select__control--menu-is-open {
      border-radius: 22px 22px 0 0;
    }
  }

  .react-select__indicator {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    padding: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__placeholder {
    ${({ theme }) => theme.typo.P200R}
    color: ${({ theme }) => theme.color.G50};
  }

  .react-select__value-container {
    padding: 0 15px;
  }

  .react-select__menu {
    background: ${({ theme }) => theme.color.background};
    border: 1px solid ${({ theme }) => theme.color.G40};
    border-radius: 0 0 20px 20px;
    overflow: hidden;

    box-shadow: none;
    margin: 0;
    margin-top: -1px;
  }

  .react-select__menu-list {
    padding: 0;
    max-height: ${optionHeight * visibleOptionCount -
    visibleOptionCount -
    1}px; // 1 마이너스 하는 이유: 자식 아이템 플로우는 보더박스가 아닌 패딩박스부터 시작하기 때문에
  }

  .react-select__input-container {
    ${({ theme }) => theme.typo.P200R}
    color: ${({ theme }) => theme.color.G70};
  }

  .react-select__single-value {
    ${({ theme }) => theme.typo.P200B}
    color: ${({ theme }) => theme.color.G100};
  }

  .react-select__option {
    display: flex;
    align-items: center;
    ${({ theme }) => theme.typo.P200R}
    color: ${({ theme }) => theme.color.G70};
    border-top: 1px solid ${({ theme }) => theme.color.G40};
    border-bottom: 1px solid ${({ theme }) => theme.color.G40};
    height: ${optionHeight}px;
    padding: 15px;
    margin-top: -1px;

    :last-of-type {
      height: ${optionHeight - 1}px;
      border-bottom: none;
    }

    &--is-selected.react-select__option--is-focused {
      background: ${({ theme }) => theme.color.PP100};
      color: ${({ theme }) => theme.color.G100};
    }

    &--is-selected {
      ${({ theme }) => theme.typo.P200B}
      background: ${({ theme }) => theme.color.PP100};
      color: ${({ theme }) => theme.color.G100};
    }

    &--is-focused {
      background: ${({ theme }) => theme.color.G30};
      color: ${({ theme }) => theme.color.G70};
    }

    &:active {
      background: ${({ theme }) => theme.color.PP100};
      color: ${({ theme }) => theme.color.G70};
    }
  }
`
