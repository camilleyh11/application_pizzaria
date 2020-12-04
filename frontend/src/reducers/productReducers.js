import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state = { products: [] }, action) {

    switch (action.type){
        case PRODUCT_LIST_REQUEST: //on envoie la requête au serveur pour avoir la liste des produits
            return {loading: true};  //montre une boite de chargement
        case PRODUCT_LIST_SUCCESS: //on a obtenu les données du serveur
            return { loading: false, products: action.payload }; 
        case PRODUCT_LIST_FAIL: // si il y a une erreur
            return { loading: false, error: action.payload };
        default:
            return state; //on ne change pas l'état
    }
}

export { productListReducer} 