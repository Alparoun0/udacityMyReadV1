import React, {useCallback} from 'react';
 import {useHistory} from 'react-router-dom';
import { render } from '@testing-library/react';
 function Searchbar ({bookss,shelves}) {

    
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
 
console.log("Searchss", bookss)
 
render()
return   <div className="search-books">
<div className="search-books-bar">
  <button className="close-search" onClick={handleOnClick} >  close   </button>
  <div className="search-books-input-wrapper">
    
    <input type="text" placeholder="Search by title or author"/>

  </div>
</div>
 <div className="search-books-results">
  
 
</div></div>
     
}

export default Searchbar