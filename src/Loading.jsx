import React from 'react'
import {Circles} from "react-loader-spinner";

const Loading = ({message="...Loading..."}) => {
return (
    <div className="products-heading">
    <div className="spinner">
    <Circles color="#00598C" height={50} width={200} />
    </div>
    
    <p className="text-lg text-center px-2">{message}</p>
</div>
)

}

export default Loading
