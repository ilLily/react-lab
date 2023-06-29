import React from 'react';
import { Col, Row, Space } from 'antd';
import Link from 'next/link';

export default function TestGrid() {
  return (
    <>
      <div className="container-outer">
        <div className="container-inner">
          <Space>
            <div className="round-btn">
              <div className="in-round-btn">
                <img src="/testImg/download.png" alt="" />
                <p>保健品</p>
              </div>
            </div>
          </Space>
        </div>
        <div className="container-inner">
          <div className="card2">
            <div className="card2-img">
              <img src="/testImg/dog-girl-hugging.jpg" alt="" />
            </div>

            <div className="card2-body">
              <p className="productname">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              </p>
              <div className="icons">
                <div>icon</div>
                <div>icon</div>
              </div>
              <div className="icons">
                <p>hello</p>
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-inner">
          <Link href="/antd/testBtn">
            <div className="card">
              <img src="" alt="" />
              <h5>My Activity</h5>
              <p>2023-05-04</p>
            </div>
          </Link>
          <div className="card">
            <img src="/testImg/dog-girl-hugging.jpg" alt="" />
            <h5>My Activity</h5>
            <p>2023-05-04</p>
          </div>
          <div className="card">
            <img src="/testImg/dog-girl-hugging.jpg" alt="" />
            <h5>My Activity</h5>
            <p>2023-05-04</p>
          </div>
        </div>
      </div>
      <div className="container-inner">
        <div className="card">
          <img src="" alt="" />
        </div>
      </div>
      <div className="container-outer">
        <h1>3 cards</h1>
        <Row>
          <Col style={{ border: '2px solid orange', height: '200px' }} span={8}>
            col-8
          </Col>
          <Col style={{ border: '2px solid orange', height: '200px' }} span={8}>
            col-8
          </Col>
          <Col style={{ border: '2px solid orange', height: '200px' }} span={8}>
            col-8
          </Col>
        </Row>
      </div>
    </>
  );
}
// Questions:
//1. card link要怎麼做
//2. svg 自製的點擊怎麼做
