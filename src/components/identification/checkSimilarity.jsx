import React from 'react';
import { Table, Tag } from 'antd';
import './identificationDuplicates.css';

const checkSimilarity = ({ data, clickOnLine }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 300
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors',
      width: 300
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      width: 80
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      width: 50
    },
    {
      title: 'Status',
      dataIndex: 'generalStatus',
      key: 'generalStatus',
      width: 100,
      render: status => {
        let color = status.length > 10 ? 'geekblue' : 'gold';
        return (
          <span>
            <Tag color={color}>{status}</Tag>
          </span>
        );
      }
    },
    {
      title: 'Similarity',
      dataIndex: 'similarity',
      key: 'similarity',
      width: 50,
      sorter: (a, b) => a.similarity - b.similarity,
      render: text => text + '%'
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={data => data.id}
      pagination={false}
      scroll={{ y: 600 }}
      onRow={record => {return {onDoubleClick: () => clickOnLine(record.id)}}}
    />
  );
};

export default checkSimilarity;
