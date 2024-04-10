import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";


export const findProducts = ()=>async(dispatch)=>{
    dispatch({type: FIND_PRODUCT_REQUEST})
    try {
        const {data} = await api.get('/api/products');
         
        dispatch({type:FIND_PRODUCT_SUCCESS, payload:data});
        console.log(data)
    } catch (error) {
        dispatch({type:FIND_PRODUCT_FAILURE, payload:error.message});
        
    }
}
export const findProductsById = (reqData)=>async(dispatch)=>{
    const {productId} = reqData;
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    try {
        const {data} = await  api.get(`/api/products/id/${productId}`);
        dispatch({type:FIND_PRODUCT_BY_ID_SUCESS, payload:data});

    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message});
        
    }
}