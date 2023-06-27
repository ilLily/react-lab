import { useState } from 'react';
import { Button, DatePicker } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

export default function TestAntdBtn() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <Button
        type="default"
        block
        icon={<SearchOutlined />}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus
      </Button>
      <Button
        type="default"
        block
        icon={<DownloadOutlined />}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        minus
      </Button>
      <DatePicker placeholder="select date" />
    </>
  );
}
