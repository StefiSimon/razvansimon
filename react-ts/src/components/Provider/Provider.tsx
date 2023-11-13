import React, { Children, FunctionComponentElement, cloneElement } from 'react';

export const Provider = ({
  children,
  data,
}: {
  children: JSX.Element | JSX.Element[];
  data: any;
}) => {
  return (
    <>
      {Children?.toArray(children)?.map((child) => (
        <>
          {cloneElement(child as FunctionComponentElement<JSX.Element>, {
            ...data,
          })}
        </>
      ))}
    </>
  );
};
