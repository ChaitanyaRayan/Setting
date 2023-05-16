import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import './AddUser.css'
import { settingService } from '../../../ServiceAPI/SettingService/setting-service'
const AddUsers = ({trigger, onDismiss}) => {
    

    const initialValues ={
        email: '',
        first_name: '',
        last_name: '',
        role_name:''
    }

    const [values, setValues] = useState(initialValues);

    const onChangeHandling=(event) =>{
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    }

    const addUserPost = async (event) =>{
        onDismiss && onDismiss(true) 
        event.preventDefault();
   
        try{
            await settingService.addUsers(values).then((resp) =>{
                console.log(resp);
            })
            // await settingService.addRole(values).then((resp) =>{
            //     console.log(resp);
            // })
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    trigger ?(
    <div className='body'>
        <div className='popUp'>
        <div className='titleSection'>
        <span className="Add-UserTitle">
  Add New User Charan
</span>
        </div>
        <div className='inputFields'>
          <div className='label-Inputs'>
            <label className='Add-UserLabel'>First Name</label>
            <input className='Add-UserField'type='text'  placeholder='Current Password' name='first_name' onChange={onChangeHandling}/>
            </div>
          <div className='label-Inputs'>
            <label className='Add-UserLabel'>Last Name</label>
            <input className='Add-UserField' type='text' placeholder='New Password' name='last_name' onChange={onChangeHandling}/>
            </div>
          <div className='label-Inputs'>
            <label className='Add-UserLabel'>Email Address</label>
            <input className='Add-UserField' type='email'  placeholder='Confirm Password' name='email' onChange={onChangeHandling}/>
            </div>
          <div className='label-Inputs'>
            <label className='Add-UserLabel'>Access Level &nbsp; <FaInfoCircle/></label>
            <select className='Add-UserField' value={values.role_name} name='role_name'  onChange={onChangeHandling}>
                <option value='' >Select</option>
                <option value='Admin'>Admin</option>
                <option value='Analyst' >Analyst</option>
                <option value='Reader' >Reader</option>
            </select>
            </div>
        </div>
        <hr/>
        <div className='cancel-submitButtons'>
            <button className='cancelButton' onClick={()=> onDismiss && onDismiss(true)}>Cancel</button>
            <button className='addUserButton' onClick={addUserPost}>Add User</button>
        </div>
    </div>
    </div>): ''
  )
}

export default AddUsers