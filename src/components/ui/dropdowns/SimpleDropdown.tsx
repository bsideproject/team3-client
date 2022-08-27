import React, { MouseEvent, useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '@/components/ui/buttons/Button'
import ChevronDropdownG40D from '../icons/ChevronDropdownG40D'

type Position = 'left' | 'right'

const gridConfig = css<{ position: Position }>`
  display: grid;
  grid-template-columns: ${({ position }) =>
    position === 'left' ? `12px auto` : `auto 12px`};
  place-items: center;
  gap: 2px;
`

const PrimaryButton = styled(Button).attrs({ type: 'button' })``

const SecondaryButton = styled(Button).attrs({ type: 'button' })``

const Icon = styled(ChevronDropdownG40D)``

const Name = styled.span`
  ${({ theme }) => theme.typo.P50B}
  color: ${({ theme }) => theme.color.G40D};
`

const ulPadding = 4

const StyledUl = styled.ul<{ opened: boolean }>`
  display: none;
  background-color: #fff;

  border-radius: 4px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(0, 0, 0, 0.1);

  ${({ opened }) =>
    opened &&
    css`
      & {
        display: block;
        position: absolute;
        right: -${ulPadding}px;
        top: -${ulPadding}px;
        z-index: 999;
        ${PrimaryButton}, a:hover {
          /* color: #c83d7f; */
        }
      }

      ${Icon} {
        transform: rotate(180deg);
      }
    `}
`

const Wrapper = styled.div`
  ${gridConfig}
  position: relative;
  white-space: nowrap;
  ${({ theme }) => theme.typo.P50B}
  color: ${({ theme }) => theme.color.G40D};
  cursor: pointer;

  ${PrimaryButton}, ${SecondaryButton} {
    ${gridConfig}
    padding: ${ulPadding}px ${ulPadding}px ${ulPadding}px 8px;
    background: ${({ theme }) => theme.color.G30};

    :hover {
      background: ${({ theme }) => theme.color.G10};
    }
  }

  ${Icon} {
    grid-column: ${({ position }) => (position === 'left' ? 1 : 2)} / span 1;
    grid-row: 1;
  }

  ${Name} {
    grid-column: ${({ position }) => (position === 'left' ? 2 : 1)} / span 1;
    grid-row: 1;
  }
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

type Menu = string

type Props = {
  menus: Array<Menu>
  position?: Position
  selectedMenu: string
  onSelectItem: (menu: Menu) => void
}

const SimpleDropdown = ({
  menus,
  position = 'left',
  selectedMenu,
  onSelectItem,
  ...props
}: Props) => {
  const [opened, setOpened] = useState(false)

  const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
    setOpened(true)
  }

  const handleSelect = (e: MouseEvent<HTMLButtonElement>, menu: Menu) => {
    e.stopPropagation() // 아하, 이벤트 전파는 공유해서 쓰는구나.
    setOpened(false)
    onSelectItem(menu)
  }

  return (
    <>
      {opened && <Backdrop onClick={() => setOpened(false)} />}
      <Wrapper position={position} onClick={handleOpen} {...props}>
        <Icon />
        <Name>{selectedMenu}</Name>
        <StyledUl opened={opened}>
          {menus.map((menu, index) =>
            menu === selectedMenu ? (
              <li key={index}>
                <PrimaryButton onClick={(e) => handleSelect(e, menu)}>
                  <Icon />
                  <Name>{menu}</Name>
                </PrimaryButton>
              </li>
            ) : (
              <li key={index}>
                <SecondaryButton onClick={(e) => handleSelect(e, menu)}>
                  <Name>{menu}</Name>
                </SecondaryButton>
              </li>
            )
          )}
        </StyledUl>
      </Wrapper>
    </>
  )
}

export default SimpleDropdown
