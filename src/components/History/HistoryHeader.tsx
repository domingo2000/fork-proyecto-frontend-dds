import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {IOrder} from '../../interfaces/IOrder';

interface IProps {
  order: IOrder;
  open: boolean;
  setOpen: (open: boolean) => void;
}

function HistoryHeader({order, open, setOpen}: IProps) {
  return (
    <div className='px-4 w-full h-10 flex items-center justify-between'>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={open ? faXmark : faBars} className='cursor-pointer' onClick={() => setOpen(!open)}/>
        <h2 className='px-2'>Order #{order.id}</h2>
      </div>
      <h2 className='px-4'>{order.created_at.slice(0, 10)}</h2>
    </div>
  );
}

export default HistoryHeader;
