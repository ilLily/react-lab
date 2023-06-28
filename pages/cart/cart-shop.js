import { Col, Row, ConfigProvider, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function CartShop() {
  const data = [
    { name: 'my Product1', price: 250, qty: 4 },
    { name: 'my Product2', price: 500, qty: 2 },
  ];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FD8C46',
        },
      }}
    >
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Row>
          <Col lg={8} md={6}>
            col-6
          </Col>
          <Col lg={8} md={6}>
            col-6
          </Col>
          <Col lg={8} md={6}>
            col-6
          </Col>
          <Col lg={8} md={6}>
            col-6
          </Col>
        </Row>
      </div>

      <table style={{ border: '1px solid gray' }}>
        <thead className="">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img src="" alt="" />
                </td>
                <td>{d.name}</td>
                <td>${d.price}</td>
                <td>{d.qty}</td>
                <td>{d.price * d.qty}</td>
                <td>delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ConfigProvider>
  );
}
