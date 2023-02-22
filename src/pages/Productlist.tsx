import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../app/store";
import { getProducts } from "../features/product/productSlice";
import { ProductState, ProductTable } from "../utils/ProductInterface";
const columns: ColumnsType<ProductTable> = [
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
    title: "Brand",
    dataIndex: "brand",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.color.length - b.color.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price.length - b.price.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector(
    (state: { product: ProductState }) => state.product.products.products
  );
  const dataTable: ProductTable[] = [];

  for (let i = 0; i < productState.length; i++) {
    dataTable.push({
      key: i + 1,
      title: `${productState[i].title}`,
      brand: `${productState[i].brand}`,
      category: `${productState[i].category}`,
      color: `${productState[i].color}`,
      price: `$ ${productState[i].price}`,
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
      <h3 className="mb-4 title">Product List</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ProductList;
