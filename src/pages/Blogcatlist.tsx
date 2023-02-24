import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { getBCategory } from "../features/blog-category/bCategorySlice";
import { BlogCategoryTable } from "../utils/BcategoryInterface";
const columns: ColumnsType<BlogCategoryTable> = [
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

const BlogCatList = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBCategory());
  }, []);
  const bCategoryState = useSelector(
    (state: RootState) => state.bCategory.bCategories
  );

  const dataTable: BlogCategoryTable[] = [];
  for (let i = 0; i < bCategoryState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: `${bCategoryState[i].title}`,
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
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BlogCatList;
