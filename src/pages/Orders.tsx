import React, { useEffect } from "react";
import { Table } from "antd";

import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getOrders } from "../features/auth/authSlice";
import { OrderTable } from "../utils/OrderInterface";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";

const columns: ColumnsType<OrderTable> = [
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
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orderState = useSelector((state: RootState) => state.auth.orders);
  const dataTable: OrderTable[] = [];
  console.log("orderState: ", orderState);
  for (let i = 0; i < orderState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: ` ${orderState[i].orderBy.firstName} ${orderState[i].orderBy.lastName}`,
      status: `${orderState[i].orderStatus}`,
      product: orderState[i].products.map((product: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <div>
              <p>{product.product.title}</p>
            </div>
          </React.Fragment>
        );
      }),

      amount: `${orderState[i].paymentIntent.amount}`,
      action: (
        <div>
          <Link className="ms-3 fs-3 text-danger" to="/delete">
            <BiTrash />
          </Link>
        </div>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Orders;
