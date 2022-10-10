import './search-box.styles.css';

interface ISearchBox {
  placeholder?: string;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, onChangeHandler }: ISearchBox) => (
  <div className='search-box-container'>
    <div className='search-box-wrapper'>
      <h1>SEARCH SHOW:</h1>
      <input
        className={'search-box'}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  </div>
);

export default SearchBox;
