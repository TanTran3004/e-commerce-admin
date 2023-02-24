import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getEnquiries } from "../features/enquiry/enquirySlice";
import { EnquiryTable } from "../utils/EnquiryInterface";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
const columns: ColumnsType<EnquiryTable> = [
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
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getEnquiries());
  }, []);
  const enquiryState = useSelector(
    (state: RootState) => state.enquiry.enquires
  );
  const dataTable: EnquiryTable[] = [];
  for (let i = 0; i < enquiryState.length; i++) {
    dataTable.push({
      key: i + 1,
      name: `${enquiryState[i].name}`,
      email: `${enquiryState[i].email}`,
      mobile: `${enquiryState[i].mobile}`,
      // status: `${enquiryState[i].status}`,
      status: (
        <div>
          <select className="form-control form-select" name="" id="">
            <option value="">Set Status</option>
          </select>
        </div>
      ),
      action: (
        <div>
          {/* <Link className="fs-3 text-danger" to="/edit">
            <BiEdit />
          </Link> */}
          <Link className="ms-3 fs-3 text-danger" to="/delete">
            <BiTrash />
          </Link>
        </div>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default Enquiries;
