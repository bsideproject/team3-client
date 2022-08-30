import Image from 'next/image'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Button from '../buttons/Button'
import Input from './Input'

const TextArea = styled.textarea`
  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none; /*remove the resize handle on the bottom right*/
`

export default TextArea
