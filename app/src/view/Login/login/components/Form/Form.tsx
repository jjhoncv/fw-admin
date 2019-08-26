import React, { Component } from 'react'

import { FormElement, Label, Input, FormStyled, Page } from '@app/src/components/common'
import { FormStyle } from '@app/src/components/common/Form/styled'

import styled from 'styled-components'
import { Field } from 'redux-form';
import { required, email } from './../../../../../utils/validations';

const PageLogin = styled(Page)`
    width: 30%;
`;

export const Error = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 14px;
  color: red;
`;

export const RenderInput = ({
  type,
  meta: { error, touched },
  input
}) => {
  let isError = (error && touched) ? error : "";
  return (
    <Input type={type} {...input} error={!!isError} />
  );
}

export const WrapperLogin = styled.div`
    width: 100%;
    justify-items: center;
    display: flex;
    align-content: center;
`;

export const Form = ({
  handleSubmit,
  errorMessage,
  isFetching
}) => (
    <WrapperLogin>
      <PageLogin title="Login">
        <FormStyle onSubmit={handleSubmit}>
          <Error>{errorMessage}</Error>
          <FormElement>
            <Label>Username</Label>
            <Field
              name="username"
              type="text"
              component={RenderInput}
              validate={[required]}
            />
          </FormElement>
          <FormElement>
            <Label>Password</Label>
            <Field
              name="password"
              type="password"
              component={RenderInput}
              validate={[required]}
            />
          </FormElement>
          <Input type="submit" value="Login" loading={isFetching} />
        </FormStyle>
      </PageLogin>
    </WrapperLogin>
  );
