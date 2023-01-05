import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ButtonSort } from '../components/ButtonSort';
import { ContentWrapper } from '../components/contentWrapper';
import { Input } from '../components/Input';
import { paths } from '../paths';
import { createPlane } from '../store/plane/planeSlice';
import styles from './styles.module.css'

export const CreatePlanePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {errors} = useSelector(state => state.plane)
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [capacity, setCapacity] = React.useState("");
  const [planeImage, setPlaneImage] = React.useState(null);

  const hadleCreatePlane = React.useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);
    
    dispatch(createPlane(formData)).then(res => {
      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, {replace: true})
      }
    })
  },[name, price, description, capacity, planeImage, dispatch, navigate])

  return (
    <ContentWrapper className={styles.createPlane}>
      <ButtonSort onClick={() => navigate(-1)}
      isBackButton={true}
      className={styles.prevBtn}>
         Назад
      </ButtonSort>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолёт</h1>
        <Input
        name="name"
        placeholder='Название самолёта'
        error={errors && errors.name && errors.name.message}
        onChange={(e) => setName(e.target.value)}
        />
        <Input
        name="price"
        placeholder='Цена самолёта'
        error={errors && errors.price && errors.price.message}
        onChange={(e) => setPrice(e.target.value)}
        />
        <Input
        name="description"
        placeholder='Описание'
         error={errors && errors.description && errors.description.message}
        onChange={(e) => setDescription(e.target.value)}
        />
        <Input
        name="capacity"
        placeholder='Вместимость'
         error={errors && errors.capacity && errors.capacity.message}
        onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
        name="planeImage"
        type='file'
        placeholder='Название самолёта'
         error={errors && errors.planeImage && errors.planeImage.message}
        onChange={(e) => setPlaneImage(e.target.files[0])}
        />
        <ButtonSort
        containerClassName={styles.buttonContainer}
        onClick={hadleCreatePlane}>
          Создать</ButtonSort>
      </form>
    </ContentWrapper>
  )
}
