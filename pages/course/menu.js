import { useState } from 'react';
function Menu() {
  const [btnText, setBtnText] = useState('首頁');
  const text = ['首頁', '關於我們', '產品'];
  return (
    <>
      <ul>
        {text.map((d, i) => {
          return (
            <li key={i} className={btnText === d ? 'active' : ''}>
              <a
                href="#"
                onClick={() => {
                  console.log(btnText);
                  setBtnText(d);
                }}
              >
                {d}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
