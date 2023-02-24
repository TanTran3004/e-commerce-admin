import React, { useEffect } from "react";
import { Table } from "antd";
import { DataTypeTable } from "../utils/type";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { ProductCategoryTable } from "../utils/PcategoryInterface";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
const columns: ColumnsType<ProductCategoryTable> = [
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

const CategoryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categoryState = useSelector(
    (state: RootState) => state.pCategory.categories
  );
  const dataTable: ProductCategoryTable[] = [];
  for (let i = 0; i < categoryState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: `${categoryState[i].title}`,
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
      <h3 className="mb-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default CategoryList;
