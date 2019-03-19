import React, { Component } from 'react';
import ProductSingle from '../products/ProductSingle';
import { connect } from 'react-redux';
import * as productsActions from '../../actions/products';
import { CategoryFilters } from '../../actions/products';
import {fetchProductsSuccess} from "../../actions/products";

class ShopPage extends Component {

    /*componentWillMount() {
        const { setBooks } = this.props;
        axios.get('/books.json').then(({ data }) => {
            setBooks(data);
        });
    }*/

    componentWillMount() {
        this.props.fetchProducts();

        const { setProducts } = this.props;
        axios.get('/api/products').then(({ data }) => {
            setProducts(data);
        });
    }

    onFilter = (e) => {
        const filterName = e.target.attributes.filter.nodeValue;

        dispatch(setVisibilityFilter(filterName))
    }

    render(){

        const { products } = this.props.products;

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
                                                <span filter={CategoryFilters.SHOW_ALL}
                                                      className="products__categoryItemLink all__categories active"
                                                      onClick={this.onFilter}
                                                >
                                                    Весь ассортимент
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span filter={CategoryFilters.SCRUB}
                                                      className="products__categoryItemLink"
                                                      onClick={this.onFilter}
                                                >
                                                    Скрабы
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span filter={CategoryFilters.BESTSELLER}
                                                   className="products__categoryItemLink"
                                                      onClick={this.onFilter}
                                                >
                                                    Хит продаж
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span filter={CategoryFilters.FACE}
                                                   className="products__categoryItemLink"
                                                      onClick={this.onFilter}
                                                >
                                                    Косметика для лица
                                                </span>
                                            </li>
                                            <li className="products__categoryItem">
                                                <span filter={CategoryFilters.BODY}
                                                      className="products__categoryItemLink"
                                                      onClick={this.onFilter}
                                                >
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
                                            products.map( ( productData ) => (
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

const mapStateToProps = state => ({ products: state.products.productsList });

export default connect(mapStateToProps, productsActions)(ShopPage);