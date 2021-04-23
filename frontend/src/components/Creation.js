import { connect } from 'react-redux'
import { deleteCreation } from '../actions/creations'
import { NavLink } from 'react-router-dom'

const Creation = props => {

    const onClick = () => {
        props.deleteCreation(props.id)
    }

    return ( 
        <div className='card'>
        <div className='card__side card__side--front'>
          <img className='card__image' src={props.image} alt={props.name}></img>
          { props.all && <h2 className='heading-tertiary'>Created By: {props.user.username}</h2> }
          <h2 className='heading-tertiary'>Name: {props.name}</h2>
        </div>
            <div className='card__side card__side--back'>
                <div className='card__content'>
                    <h2 className='heading-creation'>Category: {props.category.name}</h2>
                    {!props.all && 
                        <p className='heading-small'>{props.public === true ? 'Public Creation' : 'Private Creation'}</p>
                        }
                        <p className='heading-small'>Location: {props.location.city}, {props.location.country}</p>
                        <p className='heading-small'>Created on: {props.date}</p>
                        <NavLink to={`/creations/${props.id}`} className='link'>More Info</NavLink>
                    <span>
                    { props.currentOwner && 
                        <a href="#center" onClick={() => props.populateForm(props)}>Edit</a>} <br/>
                    { props.currentOwner && 
                        <a href="#center" onClick={onClick}>Delete</a>}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deleteCreation})(Creation);