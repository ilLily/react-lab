import { useState } from 'react';
function Menu() {
  const [btnText, setBtnText] = useState('首頁');
  return (
    <>
      <ul>
        <li className={btnText === '首頁' ? 'active' : ''}>
          <a
            href="#"
            onClick={() => {
              console.log('click');
              setBtnText('首頁');
            }}
          >
            首頁
          </a>
        </li>
        <li>
          <a className={'active'}>關於我們</a>
        </li>
        <li>
          <a>產品</a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
