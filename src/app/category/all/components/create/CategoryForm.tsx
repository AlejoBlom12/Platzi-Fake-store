import { yupResolver } from '@hookform/resolvers/yup'
import { Resolver, useForm } from 'react-hook-form'
import { defaultValues, IFormValuesC, schemaCategory } from './models'
import { useCreateCategoryStore } from '../../../store/use.create.category.store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

  const navigate = useNavigate()
  const { createCategory } = useCreateCategoryStore();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: IFormValuesC) => {
    setIsSubmitting(true);
    try {
      await createCategory({
        name: data.name,
        image: data.image,
      });
      reset();
      setError(null);
    } catch (error) {
      console.error("Error creating product:", error);
      setError("No se ha podido crear la categoría");
    } finally {
      setIsSubmitting(false);
    }
    window.alert('¡Producto creado con éxito!');
    navigate("/categories")

  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="create-product-form">
        <div className="form-group">
          <label>
            <strong>Nombre:</strong>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Titulo aquí"
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

        <button type="submit" disabled={isSubmitting}>Create Category</button>
      </form>
      <hr />
    </div>
  );
}

export default CategoryForm
