'use client';

import { Container, Flex } from '@layout';
import { Card } from '@toDoList';
import { useState } from 'react';
import { todoListMock } from './data/mock';

export default function HomePage() {
  const [data, setData] = useState(todoListMock);

  const handleChangeStatus = (id: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'concluded' ? 'pending' : 'concluded',
            }
          : item
      )
    );
  };

  return (
    <Container>
      <Flex direction="column" gap="1rem">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            footer={item.createdAt.toLocaleDateString()}
            status={item.status}
            onToggle={handleChangeStatus}
          />
        ))}
      </Flex>
    </Container>
  );
}
