import { connect } from "react-redux";
import { handleSearchFormChange } from "../actions/creations";

const Filters = (props) => {
  return (
    <div className='form-container'>
      <form className='filters-form'>
        <div className='filters-form__group'>
          <label className='filters-form__label'>Search By</label>
          <select
            className='filters-form__input'
            name='searchOption'
            onChange={props.handleSearchFormChange}
            value={props.searchOption}
          >
            <option value='name'>Name</option>
            <option value='username'>Username</option>
          </select>
        </div>
        <div className='filters-form__group'>
          <label className='filters-form__label'>Search</label>
          <input
            className='filters-form__input'
            placeholder='Search'
            type='search'
            name='search'
            onChange={props.handleSearchFormChange}
            value={props.search}
          />
        </div>
        <div className='filters-form__group'>
          <label className='filters-form__label'>Category</label>
          <select
            className='filters-form__input'
            name='filter'
            onChange={props.handleSearchFormChange}
            value={props.filter}
          >
            <option value='All'>Show All</option>
            <option value='Drawing'>Drawing</option>
            <option value='Sculpture'>Sculpture</option>
            <option value='Dance'>Dance</option>
            <option value='Music'>Music</option>
            <option value='Recipe'>Recipe</option>
            <option value='Skit'>Skit</option>
            <option value='WebDesign'>WebDesign</option>
            <option value='Photo'>Photo</option>
          </select>
        </div>
        <div className='filters-form__group'>
          <label className='filters-form__label'>Sort by</label>
          <select
            className='filters-form__input'
            onChange={props.handleSearchFormChange}
            value={props.sort}
            name='sort'
          >
            <option value='alphabetically'>Alphabetical by Name</option>
            <option value='date'>Most Recently Created</option>
            <option value='alphabetically-by-city'>Alphabetical by City</option>
            <option value='most-popular'>Most Popular</option>
          </select>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.creations.filtersForm
});

export default connect(mapStateToProps, { handleSearchFormChange })(Filters);
