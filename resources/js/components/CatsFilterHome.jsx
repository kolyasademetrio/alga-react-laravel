import React from 'react';

const CatsFilterHome = ({categoriesToShow: categories, setFilter, filterBy}) => {

    const catFilterBy = filterBy ? filterBy : (categories && categories[0]['category_filter_by']);
    
    return (
        <div className="recommended__cats">
            <ul className="recommended__categoryList">
                {
                    categories && categories.map((catItem, index) => (
                        <li key={'category-key-' + index} className="recommended__categoryItem">
                            <span
                                className={'recommended__categoryItemLink' + (catFilterBy === catItem['category_filter_by'] ? ' active' : '')}
                                onClick={setFilter.bind(this, catItem['category_filter_by'])}
                            >
                                { catItem['category_name'] }
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CatsFilterHome;