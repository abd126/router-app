import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {card} = useSelector(state => state.cardsReducer);
  
  useEffect(() => {
     dispatch({type: 'PRODUCT', id})
  }, [id])

  return (
    <div>
      <div>
        <img src={`/images/${card.Pic}`} alt="" />
      </div>
    </div>
  )
}

export default ServiceDetail
