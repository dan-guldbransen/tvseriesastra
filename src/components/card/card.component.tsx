import { Link } from 'react-router-dom';
import './card.styles.css';

interface ICard {
  show: {
    id: number;
    name: string;
    image: {
      medium: string;
    };
  };
}

const Card = ({ show: { id, name, image } }: ICard) => {
  return (
    <Link className='card' to={`/show-details/${id}`}>
      <div className='card-container' key={id}>
        <img alt={name} src={image.medium} />
        <div className='card-name'>
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
