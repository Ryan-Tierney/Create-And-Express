import React from 'react'

const CreationFormModal = props => {
    
    const display = props.display ? "block" : "none"
    const { image, category, name, notes, date, city, country, isPublic, toggle, onChange, onSubmit } = props 

    return (
        <div id="myModal" className="modal" style={{display}}>
            <div className="modal__content">
                <span onClick={toggle} className="close">&times;</span>
                <form className='creation-form' onSubmit={onSubmit}>
                <div className='creation-form__group'>
                    <input className='creation-form__input' placeholder='Image URL' type="text" name="image" onChange={onChange} value={image} required={true}/>
                    <label className='creation-form__label' htmlFor='iamge'>Image URL</label>
                </div>
                <div className='creation-form__group'>
                    <select className='creation-form__input' name="category" onChange={onChange} value={category} >
                        <option value="Drawing">Drawing</option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Dance">Dance</option>
                        <option value="Music">Music</option>
                        <option value="Recipe">Recipe</option>
                        <option value="Skit">Skit</option>
                        <option value="WebDesign">WebDesign</option>
                        <option value="Photo">Photo</option>
                        <option value="Other">Other</option>
                    </select>
                    <label className='creation-form__label' htmlFor='category'>Category</label>
                </div>
                <div className='creation-form__group'>
                    <input className='creation-form__input' placeholder='Name' type='text' name='name' onChange={onChange} value={name} />
                    <label className='creation-form__label' htmlFor='name'>Name</label>
                </div>
                <div className='creation-form__group'>
                    <textarea className='creation-form__input' placeholder='Notes' type="text" name="notes"  onChange={onChange} value={notes}></textarea>
                    <label className='creation-form__label' htmlFor='notes'>Notes</label>
                </div>
                    <label>Location</label>
                <div className='creation-form__group'>
                    <input className='creation-form__input' placeholder='City' type="text" name="city" onChange={onChange} value={city} required={true} />
                    <label className='creation-form__label' htmlFor='city'>City</label>
                </div>
                <div className='creation-form__group'>
                    <input className='creation-form__input' placeholder='Country' type="text" name="country" onChange={onChange} value={country} required={true} />
                    <label className='creation-form__label' htmlFor='country'>Country</label>
                </div>
                <div className='creation-form__group'>
                    <input className='creation-form__input' placeholder='date' type="date" name="date" onChange={onChange} value={date} required={true} />
                    <label className='creation-form__label' htmlFor='date'>Created on</label>
                </div>
                <div className='creation-form__group'>
                    <label htmlFor='isPublic'>Make entry public?
                    <input
                        className='u-margin-left-small'
                        name="isPublic"
                        type="checkbox"
                        checked={isPublic}
                        onChange={onChange} />
                    </label>
                </div>
                    <input className="btn btn--small" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default CreationFormModal