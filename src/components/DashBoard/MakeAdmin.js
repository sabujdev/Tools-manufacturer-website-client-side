import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false)

    const onSubmit = data => {
        data.role = "admin"
        fetch('https://manufacturer-website-app.herokuapp.com/users/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    reset()
                }
            })
    }
    return (
        <div className='lg:py-10 container mx-auto'>
            <h3 className='text-center text-2xl mb-5 font-semibold'>Make Admin </h3>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 lg:w-1/2 w-full mx-auto block border-secondary pl-5 rounded-full py-3 outline-none' {...register("email", { required: true })} placeholder='Email' type='email' /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='border-2 border-secondary px-14 font-semibold cursor-pointer rounded-full bg-white mx-auto block text-black py-2' type="submit" value='Make admin' />
            </form>
            {success && <div>
                <p className='text-red-500 text-center mt-5'>admin added succesfully</p>
            </div>}
        </div>
    );
};

export default MakeAdmin;