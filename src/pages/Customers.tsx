import React, { useEffect } from "react";
import { Table } from "antd";
import { DataTypeTable } from "../utils/type";
import type { ColumnsType } from "antd/es/table";
import { AppDispatch } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";
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
const Customers = (props: DataTypeTable) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // dispatch({ type: "customer/get-customers" });
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Customers;
