import React from "react";
import { Table } from "antd";
import { DataTypeTable } from "../interfaces/type";
import type { ColumnsType } from "antd/es/table";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
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
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const dataTable: DataTypeTable[] = [];
for (let i = 0; i < 46; i++) {
  dataTable.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const ProductList = (props: DataTypeTable) => {
  return (
    <div>
      <h3 className="mb-4 title">Product List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ProductList;
