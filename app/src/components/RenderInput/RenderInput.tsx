import React from 'react'
import { Input } from '@app/src/components/common'

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