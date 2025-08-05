'use client';

import { Container, Flex } from '@layout';
import { Card, FormHeader, SearchFilter, TaskFilterType } from '@todoList';
import { Divider } from '@ui';
import { formatDate } from '@utils';
import { useCallback, useMemo, useState } from 'react';
import { todoListMock } from './data/mock';

const defaultInputProps = {
  title: '',
  description: '',
};

export default function HomePage() {
  const [data, setData] = useState(todoListMock);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterInput, setFilterInput] = useState<TaskFilterType>('all');

  const [inputProps, setInputProps] = useState(defaultInputProps);
  const [expanded, setExpanded] = useState(false);

  const handleExpandChange = () => setExpanded((state) => !state);

  const cardData = useMemo(() => {
    return !!searchTerm || filterInput !== 'all'
      ? data.filter(
          (item) =>
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            (filterInput === 'all' || item.status === filterInput)
        )
      : data;
  }, [data, filterInput, searchTerm]);

  const handleChangeStatus = useCallback((id: string) => {
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
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleTitleChange = useCallback((value: string) => {
    setInputProps((prev) => ({ ...prev, title: value }));
  }, []);

  return (
    <>
      <Container>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          gap={'1rem'}
        >
          <FormHeader
            inputTitle={inputProps.title}
            onTitleChange={handleTitleChange}
            onConclude={() => {}}
          />
        </Flex>

        <Divider />

        <SearchFilter
          filterInput={filterInput}
          searchTerm={searchTerm}
          onChangeFilter={setFilterInput}
          onSearch={handleSearch}
        />

        <Divider />

        <Flex
          direction="column"
          gap="1rem"
          style={{ maxHeight: 'calc(100vh - 15.125rem)', overflowY: 'auto' }}
        >
          {cardData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              footer={`Data de criação: ${formatDate(item.createdAt)}`}
              status={item.status}
              onToggle={handleChangeStatus}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
}
