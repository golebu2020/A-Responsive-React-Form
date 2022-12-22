import React from 'react'

const Form = ()=>{
  const [name, setName] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isChecked:true,
    employment:"",
    favColor:""
    
  })
  
  
  const handleChange = (event)=>{
    const {name, value, type, checked} = event.target
    setName(prevName=>{
      return {
        ...prevName,
        [name]:type === 'checkbox'? checked : value
      }
    })
  } 

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(name)
  }



  return (
    <form className='form' onSubmit={handleSubmit}>
        <input 
          onChange={handleChange} 
          value={name.firstName} 
          className='form--input' 
          id='firstName' type="text" 
          name='firstName' 
          placeholder='First Name' 
          required={true} 
        />
        <input 
          onChange={handleChange} 
          value={name.lastName} 
          className='form--input' 
          id='lastName' 
          type="text" 
          name='lastName'
          placeholder='Last Name' 
          required={true} 
        />
        <input 
          onChange={handleChange} 
          value={name.email} 
          className='form--input' 
          id='email' 
          type="email" 
          name='email' 
          placeholder='Email' 
          required={true} 
        />
        <textarea 
          onChange={handleChange} 
          value={name.comments}  
          rows={8} 
          className='form--input' 
          name='comments' 
          placeholder='Write your comment here' 
          required={true}
        />
       
        <div className='form--checkbox'>
          <input name="isChecked" onChange={handleChange} type="checkbox" id='isFriendly' checked={name.isChecked} contentEditable={true} />
          <label htmlFor="isFriendly">Are you friendly?</label>
        </div>

        <fieldset className='form--fieldset'>
          <legend>Current Employment Status</legend>

          <div className='radio--container'><input 
            type="radio" 
            id='unemployed' 
            name='employment'
            value="unemployed"
            onChange={handleChange}
            checked={name.employment === 'unemployed'}          
          />
          <label 
            htmlFor="unemployed">Unemployed
          </label></div>

          <div className='radio--container'><input 
            type="radio" 
            id='part-time'              
            name='employment'
            value='part-time'
            onChange={handleChange}
            checked={name.employment === 'part-time'}     
          />
          <label 
            htmlFor="part-time">Part-time
          </label></div>

          <div className='radio--container'><input 
            type="radio" 
            id='full-time' 
            name='employment'
            value='full-time'
            onChange={handleChange}
            checked={name.employment === 'full-time'}  
          />
          <label 
            htmlFor="full-time">Full-time
          </label></div>
          <label>What is your Favourite Color?</label>
          <br />
          <select name="favColor" value={name.favColor} onChange={handleChange} id="favColor">            
            <option  value="">--Choose--</option>
            <option  value="red">Red</option>
            <option  value="orange">Orange</option>
            <option  value="yellow">Yellow</option>
            <option  value="green">Green</option>
            <option  value="blue">Blue</option>
            <option  value="indigo">Indigo</option>
            <option  value="violet">Violet</option>
          </select>
          <button style={{marginTop:"2rem"}}
          className='form--input' 
          id='btnSubmit' 
          type="submit">Submit</button>
         
        </fieldset>
        
    </form>
  )
}

export default Form


