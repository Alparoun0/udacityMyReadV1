import   {useState,useEffect}  from "react";
import React, {useCallback} from 'react';
import {withRouter} from 'react-router-dom'
import './App.css'
  import * as BooksAPI from './BooksAPI' 
 import BookShelves from './components/BookShelves'
 import {
  BrowserRouter as  
  Switch,BrowserRouter,
  Route,useHistory
  
} from 'react-router-dom';

 import Books from './components/books'
  
 function  App( ) {
  
  const history = useHistory();
  const handleOnClick = useCallback(() =>  history.push('/search'), [history]);
   
  const handleOnClick2 = useCallback(() =>  history.push('/'), [history]);

  const [books, setbooks] = useState([]);
  const [query, setquery] = useState([]);
  let [querytext, setqueryText] = useState('m');

  const shelves=["read","wantToRead","currentlyReading"];


  useEffect(() => {
    BooksAPI.getAll().then(response => setbooks(response));
  }, []);

  
  

  
    

   
  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const books = await BooksAPI.getAll();
    setbooks(books);
      };

  //console.log(books);
   
    
  
   async function handleChanges (e) {

     setqueryText(e.target.value);
     

     await BooksAPI.search(querytext).then(res => {
      setquery(res)
    })
        

   };
   //console.log("query text",querytext)
  //console.log('insid',query);
  
 
      
 

    return (
    <React.Fragment>
     <div className="app">
      <div className="search-books">

      </div>
     
    <Switch>
      
      
 
    <BrowserRouter>
     <Route   path="/search"> 

      
   
  <div className="search-books">
<div className="search-books-bar">
  <button className="close-search" onClick={handleOnClick2} >  close   </button>
  <div className="search-books-input-wrapper">
    
    <input type="text" placeholder="Search by title or author" onChange={handleChanges}/>

  </div>
</div>
 <div className="search-books-results">
  
 
</div></div>
  <ol className="books-grid  ">

  { (query.error !== 'empty query') ? (
   
      query.map(book => (
       
       <Books
        key={book.id}
        shelves={shelves}
        books={book}
        onChange={changeShelf}
       />
          
       ))) : (
       <div>nodata</div>
       )   }
          </ol>
          </Route>


          <Route   path="/">
      
        <BookShelves shelves={shelves} books={books} updateBook={changeShelf}  />
       
      </Route>
      </BrowserRouter>
    </Switch>
     
    <div className="open-search">
   
              <button onClick={handleOnClick}>Add a book</button>
            </div>
             

   </div> 
   </React.Fragment>
   )}
 
 export default withRouter(App)