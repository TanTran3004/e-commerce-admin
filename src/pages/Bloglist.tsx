import React from "react";
import { Table } from "antd";
import { DataTypeTable } from "../utils/type";
import type { ColumnsType } from "antd/es/table";
const columns: ColumnsType<DataTypeTable> = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];
const dataTable: DataTypeTable[] = [];
for (let i = 0; i < 46; i++) {
  dataTable.push({
    key: i,
    name: `Edward King ${i}`,
    email: `London, Park Lane no. ${i}`,
    mobile: `London, Park Lane no. ${i}`,
  });
}
const BlogList = (props: DataTypeTable) => {
  return (
    <div>
      <h3 className="mb-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BlogList;
