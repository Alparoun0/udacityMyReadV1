import React from "react";
import { startCase,  get } from "lodash";

export default function Books({ books, shelves ,onChange}) {
    const handleChange = event => onChange(books, event.target.value);
 
     



    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${get(books, "imageLinks.smallThumbnail")})`
              }}
            ></div>
  
  <div className="book-shelf-changer">
   <select   value={books.shelf || "None" } onChange={handleChange}>
  <option value="move" disabled>
                Move to...
              </option>
             {// console.log(shelves)
             }
              {shelves.map(shelf => (
                <option key={shelf } value={shelf } >
                  {startCase(shelf)}
                </option>
              ))}
              <option>None</option>
                         </select>
          </div>
        </div>
        <div className="book-
        title">{books.title}</div>
        <div className="book-authors">{books.authors}</div>
      </div>
    </li>
    );
  }