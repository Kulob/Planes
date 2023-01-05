import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanes } from '../../store/planes/planesSlice';
import { ContentWrapper } from '../contentWrapper';
import { Spinner } from '../spinner/Spinner';
import { PlaneItem } from '../PlaneItem';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import { ButtonSort } from '../ButtonSort';
import { useSortPlanes } from '../../hooks/usePlaneSort';

export const PlanesPage = () => {
  const dispatch = useDispatch();
  const {planes,isLoading} = useSelector((state) => state.planes)
  const {isDescSort,setIsDescSort,sortedPlanes} = useSortPlanes(planes || [])

  React.useEffect(() => {
    dispatch(getPlanes())
  },[dispatch])

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <>
    <div className={styles.soft}>
      <ContentWrapper className={styles.planesHeader}>
        <ButtonSort className={styles.sortBtn} onClick={() => setIsDescSort(!isDescSort)}>
          Сортировать по цене{`${isDescSort ? "+" : "-"}`}
        </ButtonSort>
        <Link to={paths.createPlane} className={styles.createPlaneBtn}>Добавить самолет</Link>
      </ContentWrapper>
    </div>
    <div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes && sortedPlanes.map(plane => <PlaneItem key={plane._id} {...plane} />)}
      </ContentWrapper>
    </div>
    </>
  )
}
