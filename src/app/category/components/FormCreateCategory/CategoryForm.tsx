import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
// import "../../css/create.product.form.css";
import { defaultValues, IFormValuesC, schemaCategory } from "./models";
import { useCreateCategoryStore } from "../../store/use.create.category.store";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValuesC>({
    defaultValues,
    resolver: yupResolver(schemaCategory) as Resolver<IFormValuesC, any>,
  });

  const { createCategory } = useCreateCategoryStore();

  const onSubmit = async (data: IFormValuesC) => {
    try {

      await createCategory({
        name: data.name,
        image: data.image,
      });
      reset()
    } catch (error) {
      console.error("Error creating Category:", error);
    }
  };

  return (
    <div>
      <h2>Create Category</h2>

      <form  className="create-category-form">
        <div className="form-group">
          <label>
            <strong>Name:</strong>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Nombre aquí"
            className="large-input"
          />
          {errors.name && (
            <strong className="error">{errors.name.message}</strong>
          )}
        </div>

        <div className="form-group">
          <label>
            <strong>Image:</strong>
          </label>
          <input
            placeholder="Imagen aquí"
            type="text"
            {...register("image")}
            className="large-input"
          />
          {errors.image && (
            <strong className="error">{errors.image.message}</strong>
          )}
        </div>

        <button type="submit">Create Category</button>
        <button type="reset">Reset Camps</button>
      </form>
      <hr />
    </div>
  );
};

export default CategoryForm;
