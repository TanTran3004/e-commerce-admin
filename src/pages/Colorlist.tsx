import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ColorTable } from "../utils/ColorInterface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getColors } from "../features/color/colorSlice";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
const columns: ColumnsType<ColorTable> = [
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
    title: "Action",
    dataIndex: "action",
  },
];

const ColorList = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getColors());
  }, []);
  const colorState = useSelector((state: RootState) => state.color.colors);
  const dataTable: ColorTable[] = [];
  for (let i = 0; i < colorState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: `${colorState[i].title}`,
      action: (
        <div>
          <Link className="fs-3 text-danger" to="/edit">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/delete">
            <BiTrash />
          </Link>
        </div>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Color List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ColorList;
