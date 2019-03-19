import React, { Component } from 'react';

class Videotip extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="kama_breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                                <span itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Главная</span>
                                    </a>
                                </span>
                                <span className="kb_sep"> / </span>Видеосоветы
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col__inner">

                                <div className="row">
                                    <div className="videotip__items">
                                        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <a href="https://www.youtube.com/watch?v=4PgWyVtP0jo"
                                               title="Массаж лица за 10 минут - Базовая схема самомассажа Ренессанс" className="videotip__itemInner">
                                                <img src="uploads/2018/10/video_size_5.jpg"
                                                    alt="" className="videotip__itemImg"
                                                />
                                                <span className="videotip__play"></span>
                                            </a>
                                            <a href="/videotip/%d1%81%d0%be%d0%b2%d0%b5%d1%82-5/" className="videotip__title">
                                                Массаж лица за 10 минут - Базовая схема самомассажа "Ренессанс"
                                            </a>
                                        </div>
                                        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <a href="https://www.youtube.com/watch?v=mtrBq1AZVag"
                                               title="Крем с SPF - Какие фильтры вреднее, химические или физические?"
                                               className="videotip__itemInner"
                                            >
                                                <img src="uploads/2018/10/video_size_4.jpg"
                                                     alt="" className="videotip__itemImg"
                                                />
                                                <span className="videotip__play"></span>
                                            </a>
                                            <a href="/videotip/%d1%81%d0%be%d0%b2%d0%b5%d1%82-4/" className="videotip__title">
                                                Крем с SPF - Какие фильтры вреднее, химические или физические?
                                            </a>
                                        </div>
                                        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <a href="https://www.youtube.com/watch?v=A73wanFxw40"
                                               title="Почему после массажа Появляются Прыщи"
                                               className="videotip__itemInner">
                                                <img src="uploads/2018/10/video_size_3.jpg"
                                                     alt="" className="videotip__itemImg"
                                                />
                                                <span className="videotip__play"></span>
                                            </a>
                                            <a href="/videotip/%d1%81%d0%be%d0%b2%d0%b5%d1%82-3/" className="videotip__title">
                                                Почему после массажа Появляются Прыщи
                                            </a>
                                        </div>
                                        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <a href="https://www.youtube.com/watch?v=m7wOu3PIJJA"
                                               title="Почему вашей коже нужен Защитный Крем"
                                               className="videotip__itemInner">
                                                <img src="uploads/2018/10/video_size_2.jpg"
                                                     alt="" className="videotip__itemImg"
                                                />
                                                <span className="videotip__play"></span>
                                            </a>
                                            <a href="/videotip/%d1%81%d0%be%d0%b2%d0%b5%d1%82-2/" className="videotip__title">
                                                Почему вашей коже нужен Защитный Крем
                                            </a>
                                        </div>
                                        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <a href="https://www.youtube.com/watch?v=hD5vxRg8P_I"
                                               title="О компании Alga Ph" className="videotip__itemInner">
                                                <img src="uploads/2018/08/video_014.jpg"
                                                     alt="" className="videotip__itemImg"
                                                />
                                                <span className="videotip__play"></span>
                                            </a>
                                            <a href="videotip/%d0%b2%d0%b8%d0%b4%d0%b5%d0%be%d1%81%d0%be%d0%b2%d0%b5%d1%82-%e2%84%962-4/" className="videotip__title">
                                                О компании Alga Ph
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Videotip;