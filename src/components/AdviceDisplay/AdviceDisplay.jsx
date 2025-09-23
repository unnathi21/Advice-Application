import React, { useContext } from 'react'
import './AdviceDisplay.css'
import { StoreContext } from "../context/StoreContext.jsx";
import AdviceSample from '../AdviceSample/AdviceSample';
const AdviceDisplay = ({ category }) => {
    const { sample_Advices } = useContext(StoreContext);
    return (
        <div className='Advice-display' id='Advice-display'>
            <h2>Top Advices for you!</h2>
            <div className="Advice-display-list">
                {sample_Advices.map((item,index)=>{
                    if(category==="All" || category===item.category){
                         return <AdviceSample key={index} id={item._id} title={item.title} category={item.category} description={item.description}></AdviceSample>

                    }
                   
                })}
            </div>

        </div>
    )
}

export default AdviceDisplay