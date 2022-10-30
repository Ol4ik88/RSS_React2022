import React, { useEffect } from 'react';
import { ICard } from 'type/type';
import { useForm, FieldValues } from 'react-hook-form';
import './Form.scss';
import { IFormValues, IPropsForm } from './Form.type';
import FormInput from 'components/FormInput/FormInput';
import FormSelect from 'components/FormSelect/FormSelect';
import Switcher from 'components/common/Switcher/Switcher';
import Button from 'components/common/Button/Button';
import useAppContext from 'store/appContext';

function Form(props: IPropsForm) {
  const { formData, saveFormData } = useAppContext();
  const { formValues } = formData;

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    getValues,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<IFormValues>({
    defaultValues: {
      ...formValues,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: IFormValues) => {
    const newCard: ICard = {
      name: data.name,
      birthday: data.birthday,
      img: URL.createObjectURL(data.file![0]),
      kind: data.kind,
      sex: data.switcher ? 'female' : 'male',
      isAgree: data.isAgree,
    };
    props.addCard(newCard);
  };

  const onError = (errors: FieldValues) => {
    if (errors.name) {
      resetField('name', { keepError: true });
    }
    if (errors.birthday) {
      resetField('birthday', { keepError: true });
    }
  };

  const isValidDate = (dateInput: Date) => {
    const dateValue = new Date(dateInput);
    const currentDate = new Date();
    return dateValue < currentDate;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset();
      }, 1000);
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    return () => {
      saveFormData(getValues());
    };
  }, []);

  return (
    <form className="cards-form" data-testid="form" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInput
        type="text"
        name="name"
        label="Name: "
        errors={errors}
        register={register}
        validationSchema={{
          required: 'Todo text is required',
          pattern: {
            value: /[A-Zа-я, \s]{2}/i,
            message: 'Please enter more than one character and only letters',
          },
        }}
        required
      />
      <FormInput
        type="date"
        name="birthday"
        label="Birthday: "
        errors={errors}
        register={register}
        validationSchema={{
          required: 'Please enter correct birthday',
          validate: (value: Date) => isValidDate(value) || 'Date must be less than today',
        }}
        required
      />
      <FormInput
        type="file"
        name="file"
        label="Profile picture: "
        errors={errors}
        register={register}
        validationSchema={{
          required: 'Please select picture',
        }}
        required
      />
      <FormSelect
        label="Select kind of animal: "
        name="kind"
        values={['Cat', 'Dog', 'Parrot', 'Rabbit', 'Rodent']}
        register={register}
      />
      <div className="cards-form__items" data-testid="form-switcher">
        <Switcher name="switcher" title="Gender: " register={register} />
      </div>
      <FormInput
        type="checkbox"
        name="isAgree"
        label="Agree to data processing: "
        errors={errors}
        register={register}
        validationSchema={{
          required: 'You should agree',
        }}
        required
      />
      <div className="cards-form__buttons">
        <Button
          type="submit"
          disabled={!isDirty || !!Object.keys(errors).length}
          text="Create card"
        />
        <Button type="reset" disabled={!isDirty} onClick={() => reset()} text="Reset input" />
        <h3 className="cards-form__message">
          {isSubmitSuccessful ? 'Card added successfully' : ''}
        </h3>
      </div>
    </form>
  );
}

export default Form;
