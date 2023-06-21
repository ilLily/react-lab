import { useState } from 'react';
import Image from 'next/image';

// 範例資料
import data from '@/data/books.json';

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';

function BookList() {
  data.map((d) => {
    return { ...d, fav: false };
  });
  const [bookList, setBookList] = useState(data);
  const toggle = (arr, key) => {
    const newBookList = arr.map((d) => {
      if (d.isbn === key) {
        d.fav === false ? (d.isbn = true) : (d.isbn = false);
      }
      setBookList(newBookList);
    });
  };
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((d) => {
            return (
              <tr key={d.isbn}>
                <td>{d.isbn}</td>
                <td>${d.title}</td>
                <td>${d.author}</td>
                <td>
                  <Image
                    src={d.fav ? bookmarkIconFill : bookmarkIcon}
                    onClick={() => toggle(bookList, d.isbn)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
