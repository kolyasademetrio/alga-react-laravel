import React, { Component } from 'react';
import howitwork from '../database/howitwork-data';
import HowitworkSingle from '../howitwork/HowitworkSingle';
import ModalPoints from '../modals/modal-points/ModalPoints';

class Howitwork extends Component {

    state = {
        howitwork: howitwork,
        showModal: false,
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });

        document.documentElement.classList.toggle('overflow-hidden');
    }

    render(){

        const [ first, second, third, fourth, fifth, sixth, seventh ] = this.state.howitwork;

        return (
            <div className="howitwork">
                <div className="container howitworkTitle__container">
                    <div className="row howitworkTitle__row">
                        <div className="col-xs-12 howitworkTitle__col">
                            <div className="howitworkTitle__inner">
                                <h3 className="howitwork__title home__sectionTitle">Как это работает</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container howitwork__container">
                    <div className="row howitwork__row">
                        <div className="col-xs-12 howitwork__col">
                            <div className="howitwork__inner">
                                <ModalPoints showModal={this.state.showModal} onClose={this.showModal}/>
                                <div className="howitwork__desktop">
                                    <div className="howitwork__innerRow">
                                        <HowitworkSingle {...first}/>
                                    </div>
                                    <div className="howitwork__innerRow">
                                        <HowitworkSingle {...second}/>
                                        <HowitworkSingle {...third}/>
                                    </div>
                                    <div className="howitwork__innerRow">
                                        <HowitworkSingle {...fourth}/>
                                        <HowitworkSingle {...fifth}/>
                                    </div>
                                    <div className="howitwork__innerRow">
                                        <HowitworkSingle {...sixth}/>
                                        <HowitworkSingle {...seventh}/>
                                    </div>
                                    <div className="howitwork__innerRow">
                                        <div className="howitwork__btnWrap rayBtn__wrap">
                                            <a href="#headerMiddle__pointsPopup"
                                               className="howitwork__btnLink homepage__rayBtn"
                                               onClick={this.showModal}
                                            >
                                                Протестировать бесплатно
                                            </a>
                                        </div>
                                    </div>

                                    <div className="howitwork__BGinner">
                                        <img src="uploads/2018/08/bg.png" alt="" className="howitwork__BGimg"/>
                                    </div>
                                </div>

                                <div className="howitwork__mobile">
                                    <div className="howitwork__innerRow">
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/1-1.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                Не имеет возрастного ценза
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Органическую косметику можно<br />
                                                сравнить со свежевыжатым соком,<br />
                                                она полезна для любого возраста
                                            </div>
                                        </div>
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/2-2.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                Экономична в использовании
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Расход при нанесении гораздо<br />
                                                меньше, чем у другой косметики.<br /></div>
                                        </div>
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/3-2.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                Абсолютно безопасна
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Без силиконов, синтетических<br />
                                                отдушек, хим-консервантов<br /></div>
                                        </div>
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/4-2.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                97% натуральных компонентов
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Их полный перечень в он-лайн<br />
                                                доступе на нашем сайте
                                            </div>
                                        </div>
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/5.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                Быстро усваивается
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Так как молекулы ингредиентов<br />
                                                близки молекулам кожи
                                            </div>
                                        </div>
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/6.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                Ускоряет процессы регенерации
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Очень мягко стимулирует<br />
                                                процессы обновления клеток
                                            </div>
                                        </div>
                                        <div className="howitwork__item">
                                            <div className="howitwork__itemHeader">
                                                <img src="uploads/2018/08/7.png" alt="" className="howitwork__itemImg"/>
                                            </div>
                                            <div className="howitwork__itemTitle">
                                                Дает длительный результат
                                            </div>
                                            <div className="howitwork__itemDescr">
                                                Благодаря восстановлению<br />
                                                естественных функций кожи
                                            </div>
                                        </div>
                                    </div>
                                    <div className="howitwork__innerRow">
                                        <div className="howitwork__btnWrap rayBtn__wrap">
                                            <a href="#headerMiddle__pointsPopup"
                                               className="howitwork__btnLink homepage__rayBtn"
                                               onClick={this.showModal}
                                            >
                                                Протестировать бесплатно
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Howitwork;