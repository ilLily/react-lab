import { Button, ConfigProvider } from 'antd';
import { Card, Space, Rate } from 'antd';
import React from 'react';

export default function TestCard() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FD8C46',
        },
      }}
    >
      <Button type="primary">first</Button>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FD8C46',
          },
        }}
      >
        <Button>Second</Button>
      </ConfigProvider>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <Rate defaultValue={4} value={1}></Rate>
        <Button type="primary">test</Button>
      </Card>
    </ConfigProvider>
  );
}
