import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Dropdown from '../Dropdown';

const AddProduct = ({ ToggleBox }) => {
  const url = process.env.REACT_APP_API_URL;
  const [load, setLoad] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
      setSelectedValue(event.target.value);
  };

  const options = [
      { value: 'redmi', label: 'Redmi' },
      { value: 'sumsung', label: 'Sumsung' },
      { value: 'oppo', label: 'Oppo' },
  ];   

  const initialValues = {
    productName: '',
    productImage: null,
    productType: '',
    productRate: '',
  };

  const validationSchema = Yup.object({
    productName: Yup.string()
      .required('Product name is required')
      .min(3, 'Product name must be at least 3 characters long'),
    productType: Yup.string().required('Product type is required'),
    productRate: Yup.number().required('Product rate is required'),
    productImage: Yup.mixed().required('Product image is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('productName', values.productName);
    formData.append('productType', values.productType);
    formData.append('productRate', values.productRate);
    formData.append('productImage', values.productImage);

    // console.log(formData);
    // console.log(values);

    setLoad(true);

    axios
      .post(`${url}/api/products`, formData)
      .then((response) => {
        alert('Product added successfully');
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setLoad(false);
        setSubmitting(false);
      });
  };

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
      <div className='relative w-2/3 max-w-md max-md:w-full max-md:mx-1 h-auto bg-white rounded-md shadow-lg p-6'>
        <div className='absolute text-2xl text-red-600 top-2 right-4 hover:cursor-pointer hover:scale-125' onClick={ToggleBox}>
          X
        </div>
        <div className='mb-2 pb-0.5 text-center border-b-2 -mx-5 border-gray-200'>
          <h2 className='text-2xl font-semibold'>Add New Product</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting, values  }) => (
            <Form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Enter name of product</label>
                <Field
                  name='productName'
                  type='text'
                  className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <ErrorMessage name='productName' component='div' className='text-red-600 text-sm' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Enter Type of product</label>
                <div className='mt-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <Dropdown 
                    name='productType' 
                    selectedValue={values.selectedValue} 
                    handleChange={(e) => setFieldValue('productType', e.target.value)} 
                    options={options}
                  />
                </div>
                {/* <Field
                  name='productType'
                  type='text'
                  value={selectedValue}
                  className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                /> */}
                <ErrorMessage name='productType' component='div' className='text-red-600 text-sm' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Enter Rate of product</label>
                <Field
                  name='productRate'
                  type='number'
                  className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <ErrorMessage name='productRate' component='div' className='text-red-600 text-sm' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Add image here</label>
                <input
                  name='productImage'
                  type='file'
                  className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  onChange={(event) => {
                    setFieldValue('productImage', event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name='productImage' component='div' className='text-red-600 text-sm' />
              </div>
              <div>
                {load ? (
                  <button type='submit' disabled className='bg-gray-400 text-white p-2 w-full rounded-md'>
                    Submitting...
                  </button>
                ) : (
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='bg-gray-600 hover:bg-gray-800 text-white p-2 w-full rounded-md hover:scale-105 transform duration-500'
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
