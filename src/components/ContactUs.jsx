import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import './contactus.css'

function ContactUs() {

  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    homeaddress: yup.string().required('Home Address is required'),
    dishType: yup.string().required('Dish Type is required')
  })

 const {register,
   handleSubmit,
    formState:{errors}} = useForm({resolver: yupResolver(schema)})

  const onsubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='contactInfo'>
      <form method= "post" onSubmit={handleSubmit(onsubmit)} className='contactInfo'>
<fieldset>
      <label htmlFor="firstName"> First Name</label>
        <input type="text" name="firstName" {...register("firstName")} />
        <p>{
          errors.firstName?.message
        }
        </p>
        <br /><br />

        <label htmlFor='lastName'>Last Name</label>
        <input type="text" name="lastName" {...register("lastName")} />
        <p>{
          errors.lastName?.message
        }
        </p>
        <br /><br />

        <label htmlFor='homeaddress'>HomeAddress</label>
        <input type="text" name="HomeAdress" {...register("homeaddress")} />
        <p>{
          errors.homeaddress?.message
        }
        </p>
        <br /><br />

        <label htmlFor='dishtype'>dishType</label>
        <input type="text" name="dishType" {...register("dishType")} />
        <p>{
          errors.dishType?.message
        }
        </p>
        <br /><br />

        <button type="submit">Make an order Today</button>
        </fieldset>

      </form>
    </div>
  )
}
// <?php
// if (isset($_POST['submit'])) {
//   $name = $_POST['name'];
//   $dishtype = $_POST['dishtype'];
//   $homeaddress = $_POST['homeaddress'];

//   echo "<h4>dear $name your $dishtype will be delivered $homeaddress.THANKYOU FOR ORDERING WITH US.</h4>";
//     ?>

//   }

export default ContactUs