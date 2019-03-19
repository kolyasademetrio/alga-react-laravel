import {connect} from "react-redux";
import RecommendedList from '../../components/recomended/RecommendedList';

const getVisibleProducts = (productsRecommended, filterBy, catsRelation, categories) => {

    const catFilterBy = filterBy ? filterBy : (categories && categories[0]['category_filter_by']);

    const productIDs = catsRelation[catFilterBy];

    return productsRecommended && productsRecommended.filter(item => productIDs.includes(item.id));
}

const mapStateToProps = ({filter}, ownProps) => {

    const productsRecommended = ownProps.productsList &&
        ownProps.productsList.filter(product => product.is_reccomended == 1);
    
    return {
        filterBy: filter.filterBy,
        productsRecommended: getVisibleProducts(
            productsRecommended,
            filter.filterBy,
            ownProps.categoriesRelationship,
            ownProps.categories
        ),
        /*categories: ownProps.categories,
        categoriesRelationship: ownProps.categoriesRelationship,*/
    }
};

export default connect(mapStateToProps)(RecommendedList);