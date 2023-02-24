import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getBlogs } from "../features/blogs/blogSlice";
import { BlogTable } from "../utils/BlogInterface";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
const columns: ColumnsType<BlogTable> = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogList = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogState = useSelector((state: RootState) => state.blog.blogs);
  const dataTable: BlogTable[] = [];
  for (let i = 0; i < blogState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: `${blogState[i].title}`,
      category: `${blogState[i].category}`,
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
      <h3 className="mb-4 title">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default BlogList;
