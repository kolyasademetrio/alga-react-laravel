import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import { connect } from 'react-redux';
import {setProducts} from "../../actions/products";

class ShopPage extends Component {
    componentDidMount() {
        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    render(){

        const {categoriesRelationship, productsList, categories, isReady} = this.props;

        return (
            <div className="container woocomm__container">
                <div className="row woocomm__row">
                    <div className="col-xs-12">
                        <div className="woocomm__col">
                            <div className="kama_breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                                <span itemProp="itemListElement" itemType="http://schema.org/ListItem">
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Главная</span>
                                    </a>
                                </span>
                                <span className="kb_sep"> / </span>
                                Ассортимент
                            </div>
                            <div className="products__wrapper">
                                <div className="products__sidebar">
                                    <div className="products__categories">
                                        <div className="products__categoryHeader">
                                            <div className="products__categoryTitle">Ассортимент продуктов</div>
                                            <a href="#products__categoryList" className="products__categoryMenuBtn"></a>
                                        </div>

                                        <ul className="products__categoryList" id="products__categoryList">
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink all__categories active">
                                                    Весь ассортимент
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Скрабы
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Хит продаж
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Косметика для лица
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span className="products__categoryItemLink">
                                                    Косметика для тела
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">Весь ассортимент</div>
                                        <div className="products__contentHeaderFilter">
                                            <span className="products__contentHeaderFilterText">Сортировать по: Цене</span>
                                            <span className="products__contentHeaderFilterLinks">
                                                <ul name="orderby" className="orderby">
                                                    <li>
                                                        <a href="/shop/?orderby=price"></a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop/?orderby=price-desc"></a>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__list">
                                        {
                                            productsList && productsList.map( ( productData ) => (
                                                <ProductSingle key={productData.id} {...productData} />
                                            ))
                                        }
                                    </div>
                                    <nav className="woocommerce-pagination">
                                        <ul className="page-numbers">
                                            <li>
                                                <span aria-current="page" className="page-numbers current">1</span>
                                            </li>
                                            <li>
                                                <a className="page-numbers" href="/shop/page/2/">2</a>
                                            </li>
                                            <li>
                                                <a className="next page-numbers"  href="/shop/page/2/">→</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function getCategoryProductRelations(categoriesRelationship){
    let newRelations = [];

    if ( categoriesRelationship !== undefined ) {
        for(let i=0;i<categoriesRelationship.length;i++) {
            let o = categoriesRelationship[i];
            if (!newRelations[o.catFilterBy]) newRelations[o.catFilterBy] = [];
            newRelations[o.catFilterBy].push(o.productID);
        }
    }
    return newRelations;
}

const mapStateToProps = ({products}) => ({
    productsList: products.items.productsList,
    categories: products.items.categories,
    categoriesRelationship: getCategoryProductRelations( products.items.categoriesRelationship ),
    isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
    setProducts: product => dispatch(setProducts(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);