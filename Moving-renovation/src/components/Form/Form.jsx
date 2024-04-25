import React, { useState } from 'react';

const Form = () => {
  // Estado para controlar qué campos del formulario se muestran
  const [step, setStep] = useState(1);
  // Estado para controlar los valores de los campos del formulario
  const [formValues, setFormValues] = useState({
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    description: '',
    name: '',
    email: '',
    phoneNumber: '',
    referralSource: ''
  });
  // Estado para controlar los errores de validación
  const [errors, setErrors] = useState({});

  // Función para cambiar al siguiente paso del formulario
  const nextStep = () => {
    // Validar los campos antes de pasar al siguiente paso
    if (validateFields()) {
      setStep(step + 1);
    }
  };

  // Función para validar los campos del formulario
  const validateFields = () => {
    const { movingFrom, movingTo, moveDate, description, name, email, phoneNumber } = formValues;
    const errors = {};

    if (step === 1) {
      if (!movingFrom.trim()) {
        errors.movingFrom = 'Moving From is required';
      }
      if (!movingTo.trim()) {
        errors.movingTo = 'Moving To is required';
      }
      if (!moveDate.trim()) {
        errors.moveDate = 'Move Date is required';
      }
    } else if (step === 2) {
      if (!name.trim()) {
        errors.name = 'Name is required';
      }
      if (!email.trim()) {
        errors.email = 'Email is required';
      }
      if (!phoneNumber.trim()) {
        errors.phoneNumber = 'Phone Number is required';
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Retorna true si no hay errores
  };

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Función para renderizar los campos del formulario según el paso actual
  const renderFormFields = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-lg font-semibold mb-4">Moving Details</h2>
            <div className="form-fields">
              <input
                type="text"
                name="movingFrom"
                value={formValues.movingFrom}
                onChange={handleInputChange}
                placeholder="Moving From"
                className={`block w-full mb-2 p-2 border border-gray-300 rounded ${errors.movingFrom ? 'border-red-500' : 'text-black'}`}
              />
              {errors.movingFrom && <p className="text-sm text-red-500 mb-2">{errors.movingFrom}</p>}
              <input
                type="text"
                name="movingTo"
                value={formValues.movingTo}
                onChange={handleInputChange}
                placeholder="Moving To"
                className={`block w-full mb-2 p-2 border border-gray-300 rounded ${errors.movingTo ? 'border-red-500' : 'text-black'}`}
              />
              {errors.movingTo && <p className="text-sm text-red-500 mb-2">{errors.movingTo}</p>}
              <input
                type="text"
                name="moveDate"
                value={formValues.moveDate}
                onChange={handleInputChange}
                placeholder="Move Date"
                className={`block w-full mb-2 p-2 border border-gray-300 rounded ${errors.moveDate ? 'border-red-500' : 'text-black'}`}
              />
              {errors.moveDate && <p className="text-sm text-red-500 mb-2">{errors.moveDate}</p>}
              <textarea
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="block w-full mb-2 p-2 border border-gray-300 rounded text-black"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">By continuing, you agree to our Terms and Conditions.</p>
            <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Continue</button>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <div className="form-fields">
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`block w-full mb-2 p-2 border border-gray-300 rounded ${errors.name ? 'border-red-500' : 'text-black'}`}
              />
              {errors.name && <p className="text-sm text-red-500 mb-2">{errors.name}</p>}
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`block w-full mb-2 p-2 border border-gray-300 rounded ${errors.email ? 'border-red-500' : 'text-black'}`}
              />
              {errors.email && <p className="text-sm text-red-500 mb-2">{errors.email}</p>}
              <input
                type="tel"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className={`block w-full mb-2 p-2 border border-gray-300 rounded ${errors.phoneNumber ? 'border-red-500' : 'text-black'}`}
              />
              {errors.phoneNumber && <p className="text-sm text-red-500 mb-2">{errors.phoneNumber}</p>}
              <input
                type="text"
                name="referralSource"
                value={formValues.referralSource}
                onChange={handleInputChange}
                placeholder="Where did you hear about us?"
                className="block w-full mb-2 p-2 border border-gray-300 rounded text-black"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">By continuing, you agree to our Terms and Conditions.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow flex justify-center">
      <div className="form-container">
        {renderFormFields()}
      </div>
    </div>
  );
};

export default Form;


