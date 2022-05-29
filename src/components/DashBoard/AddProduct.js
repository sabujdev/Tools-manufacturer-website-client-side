import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
 

    const onSubmit = data => {
        fetch('https://manufacturer-website-app.herokuapp.com/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added new product!')
                   
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="section-title text-center mb-10">
                    <h2 className='lg:text-4xl text-3xl mt-5 lg:mt-0 capitalize font-semibold'>Add details to add new Tools</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("name", { required: true })} placeholder='Tools Title' /> <br />
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("model", { required: true })} placeholder='Tools Model' type='text' /> <br />
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("price", { required: true })} placeholder='Tools Price' type='number' /> <br />
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("quantity", { required: true })} placeholder='Tools Quantity' type='number' /> <br />
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("year", { required: true })} placeholder='Tools released year' type='number' /> <br />
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("description", { required: true })} placeholder='Tools description' /> <br />
                    <input className='border-b-2 w-full border-secondary pl-5 mb-5 rounded-full py-3 outline-none' {...register("img", { required: true })} placeholder='Tools Image Link' type='url' /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='border-2 border-primary px-14 font-semibold text-xl cursor-pointer rounded-full bg-white mx-auto block text-black py-2' type="submit" value='Add New Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;