import { useEffect } from "react";
import { defaultValues, IFormValues, schema } from "./models";
import { useCategoryStore } from "../../../../category/store/use.category.store";
import { useCreateProductStore } from "../../../store/use.create.product.store";
import { Resolver, useForm } from "react-hook-form";
import '../../../css/create.product.form.css'
import { yupResolver } from "@hookform/resolvers/yup";

export const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues,
    resolver: yupResolver(schema) as Resolver<IFormValues, any>,
  });

  const { createProduct } = useCreateProductStore();
  const { allCategories, loadingAllCategories, getAllCategories } =
    useCategoryStore();

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const onSubmit = async (data: IFormValues) => {
    try {
      const imagesArray = Array.isArray(data.images)
        ? data.images
        : [data.images];

      await createProduct({
        title: data.title,
        price: data.price,
        description: data.description,
        categoryId: data.categoryId,
        images: imagesArray,
      });
      reset()
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    
    <>
    <div className="mb-2" style={{ fontSize: "1.25rem", marginLeft: "120px"}}>
      <h2><strong>Create Product</strong></h2>
    </div>

      <form
        className='create-product-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-group'>
          <label>
            <strong>Title:</strong>
          </label>
          <input
            type='text'
            {...register('title')}
            placeholder='Titulo aquí'
            className='large-input'
          />
          {errors.title && (
            <strong className='error'>{errors.title.message}</strong>
          )}
        </div>

        <div className='form-group inline'>
          <label>
            <strong>Price:</strong>
          </label>
          <input
            type='number'
            {...register('price')}
            className='small-input'
            placeholder='Precio aquí'
            min='0'
          />
          {errors.price && (
            <strong className='error'>{errors.price.message}</strong>
          )}
        </div>

        <div className='form-group'>
          <label>
            <strong>Description:</strong>
          </label>
          <textarea
            {...register('description')}
            placeholder='Descripción aquí'
            className='large-input'
          />
          {errors.description && (
            <strong className='error'>{errors.description.message}</strong>
          )}
        </div>

        <div className='form-group'>
          <label>
            <strong>Category:</strong>
          </label>
          <select
            {...register('categoryId')}
            className='large-input'
          >
            {loadingAllCategories ? (
              <option value=''>Loading...</option>
            ) : (
              allCategories?.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))
            )}
          </select>
          {errors.categoryId && (
            <strong className='error'>{errors.categoryId.message}</strong>
          )}
        </div>

        <div className='form-group'>
          <label>
            <strong>Images:</strong>
          </label>
          <input
            placeholder='Imagen aquí'
            type='text'
            {...register('images')}
            className='large-input'
          />
          {errors.images && (
            <strong className='error'>{errors.images.message}</strong>
          )}
        </div>

        <button type='submit'>Create Product</button>
      </form>
      <hr />
    </>
  )
}
