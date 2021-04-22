import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import close from '../assets/close.png';
import { updateDragged, updateModal, updatePosition } from '../reducer/actions';
import { ReducerContext } from '../reducer/Context';

const FormContainer = styled.div`
  background: #FFFFFF;
  width: 400px;
  border-radius: 5px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const Title = styled.div``

const Close = styled.img`
  height: 14px;
  width: 14px;
  cursor: pointer;
`;

const Line = styled.div`
  opacity: 0.07;
  border: 1px solid #000000;
`;

const FormWrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #262626;
  font-size: 14px;
  line-height: 22px;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  min-height: 24px;
  font-size: inherit;
  background-color: transparent;
  border: 1px solid #D9D9D9;
  &:focus {
    outline: none;
  }
`;

const Button = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  color: #fff;
  background: #0044C1;
  border-radius: 2px;
  width: 140px;
`;

const Select = styled.select`
  padding: 8px 12px;
`;

const fontWeightOptions = [
  100, 200, 300, 400, 500, 600, 700, 800, 900
]

const Form = ({ id }) => {
  const { state, dispatch } = useContext(ReducerContext);
  const block = state.blocks.filter(block => block.name === id)[0];
  const [input, setInput] = useState({
    xpos: block.xpos,
    ypos: block.ypos,
    fontSize: block.fontSize,
    fontWeight: block.fontWeight,
  })
  const { modalDispatch, stateDispatch } = dispatch;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  const handleModal = (e) => {
    e.preventDefault();
    modalDispatch(updateModal(null));
    stateDispatch(updateDragged(id));
    stateDispatch(updatePosition({ payload: { input, label: id } }));
  }

  const Placeholder = `This is ${id === 'input' ? 'an ' + id :  'a ' + id }`

  return (
    <FormContainer>
      <FormHeader>
        <Title>
          Edit {id}
        </Title>
        <Close  src={close} alt="close" onClick={e => handleModal(e)} />
      </FormHeader>
      <Line />
      <FormWrapper>
        <FormGroup>
          <Label>Text</Label>
          <TextInput 
            placeholder={Placeholder}
          />
        </FormGroup>
        <FormGroup>
          <Label>X</Label>
          <TextInput type="number" value={input.xpos} name="xpos" onChange={e => handleInputChange(e, 'xpos')} />
        </FormGroup>
        <FormGroup>
          <Label>Y</Label>
          <TextInput type="number" value={input.ypos} name="ypos" onChange={e => handleInputChange(e, 'ypos')} />
        </FormGroup>
        <FormGroup>
          <Label>Font Size</Label>
          <TextInput type="number" value={input.fontSize} name="fontSize" onChange={e => handleInputChange(e)} />
        </FormGroup>
        <FormGroup>
          <Label>Font Weight</Label>
          <Select value={input.fontWeight} name="fontWeight" onChange={e => handleInputChange(e)}>
            {fontWeightOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </FormGroup>
        <Button
          onClick={e => handleModal(e)}
        >
          Save Changes
        </Button>
      </FormWrapper>
    </FormContainer>
  )
}

export default Form;
