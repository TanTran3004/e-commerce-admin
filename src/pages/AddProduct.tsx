import { useFormik } from "formik";
import { useEffect, useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import Multiselect from "react-widgets/Multiselect";
// import "react-widgets/styles.css";
import * as yup from "yup";
import { AppDispatch, RootState } from "../app/store";
import CustomInput from "../components/CustomInput";
import { getBCategory } from "../features/blog-category/bCategorySlice";
import { getBrands } from "../features/brand/brandSlice";
import { getColors } from "../features/color/colorSlice";
import { AddProductFields } from "../utils/OrderInterface";
import { createProduct } from "../features/product/productSlice";
import Dropzone, { DropzoneState } from "react-dropzone";
import { deleteImage, uploadImage } from "../features/upload/uploadSlice";
import { Image } from "../utils/UploadInterface";
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().required("Brand is required"),
  quantity: yup.number().required("Quantity is required"),
  color: yup
    .array()
    .test(
      "color-required",
      "Color is required",
      (value) => value && value.length > 0
    ),
  images: yup
    .array()
    .min(1, "At least one image is required")
    .of(
      yup.object().shape({
        public_id: yup.string().required(),
        url: yup.string().required(),
      })
    ),
});

const AddProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getBCategory());
    dispatch(getColors());
  }, []);
  // TODO: Get brands from redux
  const brandState = useSelector((state: RootState) => state.brand.brands);
  // TODO: Get blog categories from redux
  const bCategoryState = useSelector(
    (state: RootState) => state.bCategory.bCategories
  );

  // TODO: Get colors from redux
  interface Color {
    _id: string;
    title: string;
  }
  interface ColorOption {
    id: string;
    color: string;
  }
  const colors: ColorOption[] = [];
  const colorState = useSelector((state: RootState) => state.color.colors);
  colorState.forEach((color: Color) => {
    colors.push({ id: color._id, color: color.title });
  });
  const [selectedColors, setSelectedColors] = useState<ColorOption[]>([]);
  const handleColorSelect = (values: ColorOption[]) => {
    setSelectedColors(values);
  };
  // TODO: Get images from redux

  const imgState = useSelector((state: RootState) => state.upload.images);
  const [selectImages, setSelectImages] = useState<Image[]>([]);
  const imgArr: Image[] = [];
  imgState.forEach((img: any) => {
    imgArr.push({
      public_id: img.public_id,
      url: img.url,
      asset_id: img.asset_id,
    });
  });
  console.log("imgArr", imgArr);
  const formik = useFormik<AddProductFields>({
    initialValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      brand: "",
      color: [],
      images: imgArr,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(createProduct(values));
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      dispatch(uploadImage(acceptedFiles))
        .then((uploadedImages: any) => {
          // Add the new images to the existing ones
          const updatedImages = [...imgState, ...uploadedImages];

          // Update the value of the images field in Formik
          formik.setFieldValue("images", updatedImages);

          // Update the imgState and selectImages variables
          setSelectImages(updatedImages);
        })
        .catch((error) => {
          console.log("Error uploading images:", error);
        });
    },
    [dispatch, formik, imgState]
  );

  const handleDeleteImage = (public_id: string) => {
    dispatch(deleteImage(public_id))
      .then(() => {
        // Remove the deleted image from the images array
        const updatedImages: any = imgState.filter(
          (image: any) => image.public_id !== public_id
        );

        // Update the value of the images field in Formik
        formik.setFieldValue("images", updatedImages);

        // Update the imgState and selectImages variables
        setSelectImages(updatedImages);
      })
      .catch((error) => {
        console.log("Error deleting image:", error);
      });
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
          action=""
        >
          <CustomInput
            label="Enter Product Title"
            type="text"
            i_id="title"
            i_className=""
            i_name="title"
            i_value={formik.values.title}
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            error={formik.touched.title && formik.errors.title}
            touched={formik.touched.title}
          />
          <div className="">
            <ReactQuill
              theme="snow"
              value={formik.values.description}
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
            />
            <div className="error">
              {formik.touched.description && formik.errors.description}
            </div>
          </div>
          <CustomInput
            label="Enter Product Price"
            type="number"
            i_id="price"
            i_className=""
            i_name="price"
            i_value={formik.values.price}
            onChange={formik.handleChange("price")}
            onBlur={formik.handleBlur("price")}
            error={formik.touched.price && formik.errors.price}
            touched={formik.touched.price}
          />
          <select
            name="category"
            id=""
            className="form-control py-3 mb-3"
            value={formik.values.category}
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
          >
            <option value="">Select Category</option>
            {bCategoryState.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <select
            name="brand"
            className="form-control py-3 mb-3"
            value={formik.values.brand}
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
          >
            <option value="">Select Brand</option>
            {brandState.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.title}
              </option>
            ))}
          </select>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>
          <CustomInput
            label="Enter Product Quantity"
            type="number"
            i_id="quantity"
            i_className=""
            i_name="quantity"
            i_value={formik.values.quantity}
            onChange={formik.handleChange("quantity")}
            onBlur={formik.handleBlur("quantity")}
            error={formik.touched.quantity && formik.errors.quantity}
            touched={formik.touched.quantity}
          />
          <Multiselect
            className="form-control py-3 mb-3"
            dataKey="id"
            textField="color"
            data={colors}
            placeholder="Select Color"
            value={formik.values.color}
            onChange={(values) => {
              formik.setFieldValue("color", values);
            }}
          />
          {formik.errors.color && formik.touched.color && (
            <div className="error">{formik.errors.color}</div>
          )}
          <div>
            <div className="bg-white border-1 p-5 text-center">
              <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <div className="showImage d-flex flex-wrap gap-3">
              {imgState.map((img: any, index: number) => (
                <div className="position-relative" key={index}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteImage(img.public_id));
                    }}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={img.url} alt="" width={200} height={200} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
