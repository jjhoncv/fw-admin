import React from 'react'
import { Field } from 'redux-form';
import { FormElement, Label, Input } from '@app/src/components/common'
import { FormStyle } from '@app/src/components/common/Form/styled'
import { required } from '@app/src/utils/validations';
import { RenderInput } from './../RenderInput'
import { WrapperLogin, PageLogin, Error } from './styled'

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
