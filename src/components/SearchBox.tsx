import * as React from 'react';

interface ISearchBoxText{
  searchChange(event:React.FormEvent): void
}

const SearchBox = ({ searchChange }: ISearchBoxText): JSX.Element => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;