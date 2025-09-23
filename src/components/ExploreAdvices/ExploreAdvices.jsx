import React from 'react'
import './ExploreAdvices.css'
import {Advices_list} from '../../assets/assets'

const ExploreAdvices = ({category,setCategory}) => {
  return (
    <div className='explore-Advice'id='explore-Advice'>
      <h1>Explore our Advices</h1>
      <p className='explore-Advice-text'>"Smart advice for your mind, money, meals, moves, and adventures — all in one place."</p>
    <div className="explore-Advice-list">
      {Advices_list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(prev=>prev===item.Advice_name?"All":item.Advice_name)}key={index}className='explore-Advice-list-item'>
          <img className={category===item.Advice_name?"active":""} src={item.Advice_img} alt=""/>
          <p>{item.Advice_name}</p>
            </div>

         )

      })}

    </div>
    <hr/>
    </div>
  )
}

export default ExploreAdvices