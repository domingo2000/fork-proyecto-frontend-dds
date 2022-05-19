import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {IHomeCardInfo} from '../../interfaces/IHomeCardInfo';

interface IProps {
  card: IHomeCardInfo;
}

function HomeCard({card} : IProps) {
  const bgImages: {[key:string]: string} = {
    'studio-display': 'bg-studio-display',
    'all-products': 'bg-all-products',
  };
  return (
    <div className={`${bgImages[card.image]} bg-cover h-[500px] bg-center flex flex-col items-center`}>
      <div className='text-center text-4xl font-bold p-6'>{card.title}</div>
      <div className='text-center text-xl'>{card.subtitle}</div>

      <Link to={card.link.path} className='text-center text-lg text-blue-600 py-2 px-4 flex items-center hover:underline tracking-wide'>
        {card.link.name} <FontAwesomeIcon className="p-1" icon={faAngleRight}/>
      </Link>
    </div>
  );
}

export default HomeCard;
