export default function BookList ({books}){
    return(
        <ul>
            {books.map((book) => {
                return <li key={book.id}>{book.name}</li>
            })}
        </ul>
    );
};

///Якщо об'єкти масиву не мають унікальних значень властивостей і колекція не редагується 
///(наприклад, користувач не може видалити або змінити порядок елементів), можна використовувати індекси масиву.
/*
const favouriteBooks = [
    { name: "JS for beginners" },
    { name: "React basics" },
    { name: "React Router overview" }
  ];
  
  const BookList = ({ books }) => (
    <ul>
      {books.map((book, index) => {
        return <li key={index}>{book.name}</li>;
      })}
    </ul>
  );
  */