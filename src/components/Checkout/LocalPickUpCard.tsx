import React from 'react';

interface ILocal {
  id: number
  name: string
  address: string
}

interface IProps {
  local: ILocal
  setSelectedLocalId: React.Dispatch<React.SetStateAction<number>>
  localsRef: React.MutableRefObject<HTMLButtonElement[] | null[]>
}

function LocalPickUpCard({local, setSelectedLocalId, localsRef} : IProps) {
  return (
    <button className='local-pickup-card' ref={(el) => localsRef.current[local.id] = el}
      onClick={() => setSelectedLocalId(local.id)}>
      <h1 className='local-name'>{local.name}</h1>
      <p className='local-address'>{local.address}</p>
    </button>
  );
}

export default LocalPickUpCard;
