import React, {Component} from 'react';

import CatsFilterHome from '../../containers/CatsFilterHome';
import RecommendedList from '../../containers/recommended/RecommendedList';

class Recommended extends Component {
    componentWillMount(){
        const { setProducts } = this.props;
        axios.get(`/api/products`)
            .then(response => {
                setProducts(response.data);
            });
    }

    handleClick = (e) => alert(11);

    render(){
        const {productsList, categories} = this.props.products;
        const {categoriesRelationship} = this.props;

        return (
            <div className="recommended">
                <div className="container recommendedTitle__container">
                    <div className="row recommendedTitle__row">
                        <div className="col-xs-12 recommendedTitle__col">
                            <div className="recommendedTitle__inner">
                                <h3 className="recommended__title home__sectionTitle home__sectionTitleAfter">
                                    Мы рекомендуем </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container recommended__container">
                    <div className="row recommended__row">
                        <div className="recommended__col col-xs-12">
                            <div className="recommended__inner">

                                <CatsFilterHome categories={categories}/>

                                <RecommendedList productsList={productsList}
                                                 categories={categories}
                                                 categoriesRelationship={categoriesRelationship}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container recommended__container">
                    <div className="row recommended__row">
                        <div className="recommended__col col-xs-12">
                            <div className="recommended__btnWrap rayBtn__wrap">
                                <a href="/shop" className="reccomended__btnLink homepage__rayBtn">Просмотреть все товары</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recommended;