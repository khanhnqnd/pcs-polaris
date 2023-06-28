import React from 'react';

interface IProps {
  switch: boolean;
  changeSwitch: (v: boolean) => void;
}

const Switch = (props: IProps) => {
  return (
    <div className='switch' onClick={() => props.changeSwitch(!props.switch)}>
      <input
        type='checkbox'
        checked={props.switch}
        onChange={() => {
          console.log('Switch');
        }}
      />
      <span className='slider round' />
    </div>
  );
};
export default Switch;
