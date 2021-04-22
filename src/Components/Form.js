import React, { useContext } from 'react';
import styled from 'styled-components';

import close from '../assets/close.png';
import { getDragged, updateDragged, updateModal } from '../reducer/actions';
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

const SimilarButton = styled.div`
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

const Form = ({ id }) => {
  const { dispatch } = useContext(ReducerContext);

  const { modalDispatch, stateDispatch } = dispatch;

  const handleModal = (e) => {
    e.preventDefault();
    modalDispatch(updateModal(null));
    stateDispatch(updateDragged(id));
  }

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
            placeholder={"This is a label"}
          />
        </FormGroup>
        <FormGroup>
          <Label>X</Label>
          <TextInput />
        </FormGroup>
        <FormGroup>
          <Label>Y</Label>
          <TextInput />
        </FormGroup>
        <FormGroup>
          <Label>Font Size</Label>
          <TextInput />
        </FormGroup>
        <FormGroup>
          <Label>Font Weight</Label>
          <TextInput />
        </FormGroup>
        <SimilarButton
          onClick={e => handleModal(e)}
        >
          Save Changes
        </SimilarButton>
      </FormWrapper>
    </FormContainer>
  )
}

export default Form;
