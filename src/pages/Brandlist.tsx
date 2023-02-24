import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { getBrands } from "../features/brand/brandSlice";
import { BrandTable } from "../utils/BrandInterface";
const columns: ColumnsType<BrandTable> = [
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

const BrandList = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  const brandState = useSelector((state: RootState) => state.brand.brands);
  const dataTable: BrandTable[] = [];
  for (let i = 0; i < brandState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: `${brandState[i].title}`,
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
      <h3 className="mb-4 title">Brand List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BrandList;
