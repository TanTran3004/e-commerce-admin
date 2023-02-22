import React, { useEffect } from "react";
import { Table } from "antd";
import { CustomerState, CustomerTable } from "../utils/CustomerInterface";
import type { ColumnsType } from "antd/es/table";
import { AppDispatch } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";

const columns: ColumnsType<CustomerTable> = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
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

const Customers = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // dispatch({ type: "customer/get-customers" });
    dispatch(getUsers());
  }, []);
  const customerState = useSelector(
    (state: { customer: CustomerState }) => state.customer.customers
  );

  const dataTable: CustomerTable[] = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin") {
      dataTable.push({
        key: i + 1,
        name: `${customerState[i].firstName} ${customerState[i].lastName}`,
        email: `${customerState[i].email}`,
        mobile: `${customerState[i].mobile}`,
      });
    }
  }
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
