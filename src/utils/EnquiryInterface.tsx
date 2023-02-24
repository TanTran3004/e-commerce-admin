export interface EnquiryState {
  enquires: EnquiryCategory[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}
interface EnquiryCategory {
  _id: string;
  status: string;
  name: string;
  email: string;
  mobile: string;
  comment: string;
  __v?: number;
}
export interface EnquiryTable {
  key: React.Key;
  status: JSX.Element;
  name: string;
  email: string;
  mobile: string;
  action: JSX.Element;
}
