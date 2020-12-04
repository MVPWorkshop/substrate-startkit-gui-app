import React from 'react';
import { ISearchBarProps } from './searchBar.types';
import styles from './searchBar.module.scss';
import { ReactComponent as SearchIcon } from '../../../shared/assets/magnifying_glass.svg';
import { Form } from 'react-bootstrap';

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const {
    onChange,
    value,
    placeholder
  } = props;

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  }

  return (
    <div className={styles.searchBar}>
      <SearchIcon />
      <Form className='flex-grow-1 ml-2'>
        <Form.Control
          type='text'
          className={styles.textInput}
          onChange={onSearch}
          value={value}
          placeholder={placeholder}
        />
      </Form>
    </div>
  )
}

export default SearchBar;
