import Card from '../card/card.component';
import SearchBox from '../search-box/search-box.component';

import './card-list.styles.css';

interface ICardList {
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  shows: {
    id: number;
    name: string;
    image: {
      medium: string;
    };
  }[];
}

const CardList = ({ shows, onSearchChange }: ICardList) => (
  <>
    <SearchBox onChangeHandler={onSearchChange} placeholder='here...' />
    <div className='card-list'>
      {shows.map((show) => {
        return <Card show={show} key={show.id} />;
      })}
    </div>
  </>
);

export default CardList;
