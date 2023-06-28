import React from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';

export default function TestGrid() {
  return (
    <>
      <div className="container-outer">
        <div className="container-inner">
          <div className="Lily cardbox">
            <Link href="/antd/testBtn">
              <div className="card">
                <img src="/testImg/dog-girl-hugging.jpg" alt="" />
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
            <div className="card">
              <img src="/testImg/dog-girl-hugging.jpg" alt="" />
              <h5>My Activity</h5>
              <p>2023-05-04</p>
            </div>
          </div>
          <h1>3 cards</h1>
          <Row style={{ border: '2px solid pink' }}>
            <Col
              style={{ border: '2px solid orange', height: '200px' }}
              span={8}
            >
              col-8
            </Col>
            <Col
              style={{ border: '2px solid orange', height: '200px' }}
              span={8}
            >
              col-8
            </Col>
            <Col
              style={{ border: '2px solid orange', height: '200px' }}
              span={8}
            >
              col-8
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
