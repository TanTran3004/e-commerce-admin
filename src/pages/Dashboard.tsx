import React, { useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { ColumnConfig } from "@ant-design/charts";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataTypeTable } from "../utils/type";

interface CustomColumnConfig extends ColumnConfig {
  meta: {
    [key: string]: {
      alias: string;
    };
  };
}

const Dashboard = (props: DataTypeTable) => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "Jul",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sep",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];

  const config: CustomColumnConfig = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      // ...
      position: "middle",
      style: {
        fill: "#ffffff",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
        // ...
      },
    },
    meta: {
      type: {
        alias: "Months",
      },
      sales: {
        alias: "Income",
      },
    },
  };

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
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1  bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end  flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1  bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2023</p>
          </div>
        </div>
      </div>
      {/* <div className="d-flex gap-3 justify-content-between"></div> */}
      <div className="mt-4">
        <h3 className="mb-5">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={dataTable} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
