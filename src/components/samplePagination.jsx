import React, { useState } from "react";
import { Card, Pagination, Row, Col } from "antd";

const cardData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  description: `This is the description for card ${i + 1}.`
}));

const CardsPagination = () => {
  const pageSize = 6; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);

  // Get the data for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentCards = cardData.slice(startIndex, startIndex + pageSize);

  return (
    <div style={{ padding: 20 }}>
      {/* Display Cards */}
      <Row gutter={[16, 16]}>
        {currentCards.map((card) => (
          <Col key={card.id} xs={24} sm={12} md={8}>
            <Card title={card.title} bordered={false}>
              {card.description}
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        total={cardData.length}
        pageSize={pageSize}
        onChange={(page) => setCurrentPage(page)}
        style={{ textAlign: "center", marginTop: 20 }}
      />
    </div>
  );
};

export default CardsPagination;
