import {setFilter} from "../actions/filter";
import {connect} from "react-redux";
import CatsFilterHome from '../components/CatsFilterHome';



const mapStateToProps = ({filter}, ownProps) => ({
    filterBy: filter.filterBy,
    categoriesToShow: ownProps.categories && ownProps.categories.filter(category => category.show_on_homepage == 1),
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsFilterHome);