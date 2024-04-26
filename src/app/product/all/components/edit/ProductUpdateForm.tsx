import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import updateProductSchema from "./model/form.update.model";
import { useUpdateProductStore } from "../../../store/useUpdateProductStore";
import { IUpdateProductRequest } from "../../../../../core/product/domain/update.product";
import { useNavigate } from "react-router-dom";

const UpdateProductForm = ({ id, closeModal, currentProductData }: { id: string; closeModal: () => void; currentProductData: IUpdateProductRequest }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateProductSchema),
  });

  const navigate = useNavigate()
  const { updateProduct } = useUpdateProductStore();

  useEffect(() => {}, [id]);

  const onSubmit = async (data: IUpdateProductRequest) => {
    try {
      await updateProduct(id, data);
      alert("¡El producto se ha actualizado con éxito!");

      reset();
      closeModal(); 
    } catch (error) {
      console.error("Error updating product:", error);
    }
    window.alert('Categoria creada correctamente!')
    reset()
    navigate('/categories')
  };

  return (
    <div>
      <h2>Update Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="update-product-form">
        <div className="form-group">
          <label>
            <strong>Title:</strong>
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Title here"
            className="small-input" 
            defaultValue={currentProductData.title} 
          />
          {errors.title && <strong className="error">{errors.title.message}</strong>}
        </div>

        <div className="form-group">
          <label>
            <strong>Price:</strong>
          </label>
          <input
            type="number"
            {...register("price")}
            className="small-input" 
            placeholder="Price here"
            min="0"
            defaultValue={currentProductData.price} 
          />
          {errors.price && <strong className="error">{errors.price.message}</strong>}
        </div>

        <button type="submit">Update Product</button>
      </form>
      <hr />
    </div>
  );
};

export default UpdateProductForm;