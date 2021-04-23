import React from 'react'
import { connect } from 'react-redux'
import { getCreations } from '../actions/creations'
import Creation from '../components/Creation'
import {withRouter} from 'react-router-dom'
import CreationFormModal from '../components/CreationFormModal'
import Filters from '../components/Filters'
import { addCreation, editCreation } from '../actions/creations'

class CreationContainer extends React.Component {

  state = {
    modal: false,
    form: {
      image: '',
      name: '',
      notes: '',
      city: '',
      country: '',
      date: '',
      id: null,
      category: 'Drawing',
      isPublic: false,
    },
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({form:
      {
        ...this.state.form,
        [name]: value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.form.id) {
      this.props.editCreation(this.state.form)
    } else {
      this.props.addCreation(this.state.form)
    }
    this.setState({
      modal: false,
      form: {
        image: '',
        name: '',
        notes: '',
        city: '',
        country: '',
        date: '',
        id: null,
        category: 'Drawing',
        isPublic: false,
      }
    })
  }

  componentDidMount(){
    this.props.getCreations()
  } 

  openNewCreationForm = () => this.setState({
    modal: true,
    form: {
      image: '',
      name: '',
      notes: '',
      city: '',
      country: '',
      date: '',
      id: null,
      category: 'Bird',
      isPublic: false,
    }
  })

  populateForm = (creation) => this.setState({
    modal: true,
    form: {
      image: creation.image,
      name: creation.name,
      notes: creation.notes,
      city: creation.location.city,
      country: creation.location.country,
      date: creation.date,
      id: creation.id,
      category: creation.category.name,
      isPublic: creation.public
    }
  })

  renderMyCreations = () => {
    return (
      <>
        <button className="btn btn--creation" onClick={this.openNewCreationForm}>
          Creation</button>
          <section className="cards">
            {this.props.currentUser && this.props.creations.filter(creation => creation.user.id === this.props.currentUser.id).map(creation => <Creation key={creation.id} populateForm={this.populateForm} {...creation} currentOwner={true} />)}
          </section>
        <CreationFormModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }

  publicCreations = () => {
    return this.props.creations.filter(creation => creation.public === true)
  }

  searchedCreations = () => {
    switch(this.props.searchOption) {
      case 'name':
        return this.publicCreations().filter(creation => creation.name.toLowerCase().includes(this.props.search.toLowerCase()))
      case 'username':
        return this.publicCreations().filter(creation => creation.user.username.toLowerCase().includes(this.props.search.toLowerCase()))
      default:
        return this.publicCreations()
    }
  }

  filteredCreations = () => this.props.filter === 'All' ?  this.searchedCreations() : this.searchedCreations().filter(creation => creation.category.name === this.props.filter)

  sortedCreations = () => this.props.sort === 'alphabetically' 
    ? this.filteredCreations().sort((a, b) => a.name.localeCompare(b.name)) 
    : this.filteredCreations().sort((a, b) => b.date.localeCompare(a.date))

  renderAllCreations = () => {
    return (
      <>
        <h2 className='heading-secondary'>All Creations</h2>
        <Filters />
        { !this.props.creations[0] && <div className="loader"></div> }
        <section className="cards">
          {this.props.creations && this.sortedCreations().map(creation => <Creation key={creation.id} {...creation} all={true} />)}
        </section>
      </>
    )
  }

  render(){
    return (
      <>
        { this.props.location.pathname === '/myprofile' ? this.renderMyCreations() : this.renderAllCreations() }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser.currentUser,
      creations: state.creations.creations,
      ...state.creations.filtersForm
  }
}

export default withRouter(connect(mapStateToProps, { getCreations, addCreation, editCreation })(CreationContainer))