import Button from 'components/Button/Button';
import FormInput from 'components/FormInput/FormInput ';
import FormSelect from 'components/FormSelect/FormSelect';
import Switcher from 'components/Switcher/Switcher';
import React, { createRef } from 'react';
import { IFormInput, ICard, IPropsForm, IStateForm, ElementKeys } from 'type/type';
import './Form.scss';

class Form extends React.Component<IPropsForm, IStateForm> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  kindSelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  switcherInput: React.RefObject<HTMLInputElement>;

  constructor(props: IPropsForm) {
    super(props);
    this.nameInput = createRef();
    this.dateInput = createRef();
    this.kindSelect = createRef();
    this.fileInput = createRef();
    this.checkboxInput = createRef();
    this.switcherInput = createRef();

    this.state = {
      buttonsDisable: true,
      name: true,
      birthday: true,
      kind: true,
      img: null,
      file: true,
      isAgree: true,
      isValid: false,
    };
  }

  onChangeForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    const element = (e.target as HTMLInputElement | HTMLSelectElement).name;
    const fileInput = this.fileInput.current;
    if (element === 'file' && fileInput?.files && fileInput?.files?.length !== 0) {
      this.setState((oldState) => {
        return { ...oldState, file: true };
      });
    }
    this.setState((oldState) => {
      return { ...oldState, [element]: true, isValid: false };
    }, this.enableButton);

    console.log(this.state);
  };
  enableButton = () => {
    if (
      this.state.name &&
      this.state.birthday &&
      this.state.kind &&
      this.state.file &&
      this.state.isAgree
    ) {
      this.setState((oldState) => {
        return { ...oldState, buttonsDisable: false };
      });
    }
  };

  isValidInput = (condition: boolean, elementKey: ElementKeys, element: HTMLInputElement) => {
    if (condition) {
      if (elementKey !== 'isAgree') {
        element.value = '';
      } else {
        element.checked = false;
      }
      this.setState((oldState) => {
        return { ...oldState, [elementKey]: false };
      });
      return false;
    } else {
      this.setState((oldState) => {
        return { ...oldState, [elementKey]: true };
      });
      return true;
    }
  };

  getFormElements = () => {
    const nameInput = this.nameInput.current as HTMLInputElement;
    const dateInput = this.dateInput.current as HTMLInputElement;
    const fileInput = this.fileInput.current as HTMLInputElement;
    const kindSelect = this.kindSelect.current as HTMLSelectElement;
    const checkboxInput = this.checkboxInput.current as HTMLInputElement;
    const switcherInput = this.switcherInput.current as HTMLInputElement;
    return {
      nameInput,
      dateInput,
      fileInput,
      kindSelect,
      checkboxInput,
      switcherInput,
    };
  };

  isFormValidation = () => {
    const { nameInput, dateInput, fileInput, checkboxInput } = this.getFormElements();
    let isValid = true;
    isValid =
      this.isValidInput(
        nameInput.value.trim().length < 2 || !/[a-z, а-я, \s]+/i.test(nameInput.value),
        'name',
        nameInput
      ) && isValid;

    const dateValue = new Date(dateInput.value);
    const currentDate = new Date();
    isValid =
      this.isValidInput(!dateInput.value || dateValue > currentDate, 'birthday', dateInput) &&
      isValid;

    isValid =
      this.isValidInput(!fileInput.files || fileInput.files.length === 0, 'file', fileInput) &&
      isValid;

    isValid =
      this.isValidInput(checkboxInput.checked === false, 'isAgree', checkboxInput) && isValid;
    return isValid;
  };

  onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nameInput, dateInput, fileInput, kindSelect, checkboxInput, switcherInput } =
      this.getFormElements();

    if (!this.isFormValidation()) {
      this.setState((oldState) => {
        return { ...oldState, buttonsDisable: true };
      });
      return;
    }
    this.setState({ isValid: true });

    const newCard: ICard = {
      name: nameInput.value,
      birthday: dateInput.value,
      img: URL.createObjectURL((fileInput.files as FileList)[0]),
      kind: kindSelect.value,
      sex: switcherInput.checked ? 'female' : 'male',
      isAgree: checkboxInput.checked,
    };
    this.props.addCard(newCard);
    this.resetStateInputs();
  };

  resetStateInputs = () => {
    const { nameInput, dateInput, fileInput, kindSelect, checkboxInput, switcherInput } =
      this.getFormElements();

    nameInput.value = '';
    dateInput.value = '';
    fileInput.value = '';
    kindSelect.options[0].selected = true;
    switcherInput.checked = false;
    checkboxInput.checked = false;

    this.setState({
      name: true,
      birthday: true,
      kind: true,
      img: null,
      file: true,
      isAgree: true,
      buttonsDisable: true,
    });
  };

  render() {
    const inputs: IFormInput[] = [
      {
        label: 'Name: ',
        name: 'name',
        type: 'text',
        isValid: this.state.name,
        errorMessage: 'Please enter more than one character and only letters',
        reference: this.nameInput,
      },
      {
        label: 'Birthday: ',
        name: 'birthday',
        type: 'date',
        isValid: this.state.birthday,
        errorMessage: 'Please enter correct birthday',
        reference: this.dateInput,
      },
      {
        label: 'Profile picture: ',
        name: 'file',
        type: 'file',
        isValid: this.state.file,
        image: this.state.img,
        errorMessage: 'Please select picture',
        reference: this.fileInput,
      },
    ];
    return (
      <form
        className="cards-form"
        data-testid="form"
        onSubmit={this.onFormSubmit}
        onChange={this.onChangeForm}
      >
        {inputs.map((item, i) => {
          return (
            <FormInput
              key={i}
              label={item.label}
              name={item.name}
              type={item.type}
              isValid={item.isValid}
              errorMessage={item.errorMessage}
              reference={item.reference}
            />
          );
        })}
        <FormSelect
          label="Select kind of animal: "
          name="kind"
          values={['Cat', 'Dog', 'Parrot', 'Rabbit', 'Rodent']}
          reference={this.kindSelect}
        />
        <div className="cards-form__items" data-testid="form-switcher">
          <Switcher name="switcher" title="Gender: " reference={this.switcherInput} />
        </div>
        <FormInput
          label="Agree to data processing: "
          name="isAgree"
          type="checkbox"
          isValid={this.state.isAgree}
          errorMessage="You should agree"
          reference={this.checkboxInput}
        />
        <div className="cards-form__buttons">
          <Button type="submit" disabled={this.state.buttonsDisable} text="Create card" />
          <Button
            type="reset"
            disabled={this.state.buttonsDisable}
            onClick={this.resetStateInputs}
            text="Reset input"
          />
          <h3 className="cards-form__message">
            {this.state.isValid ? 'Card added successfully' : ''}
          </h3>
        </div>
      </form>
    );
  }
}

export default Form;
