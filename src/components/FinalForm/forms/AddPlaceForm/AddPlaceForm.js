import React from 'react';
import { connect } from 'react-redux';
import { Form as FinalForm, Field as FinalField } from 'react-final-form';
import { Button, Form, Divider, Header } from 'semantic-ui-react';
import { required } from '../../validators/validators';
import { setType } from '../../../../store/reducers/addPlaceReducer';
import TextFieldAdapter from '../../components/TextFieldAdapter';
import CheckboxFieldAdapter from '../../components/CheckboxFieldAdapter';
import RadioFieldAdapter from '../../components/RadioFieldAdapter';
import SliderFieldAdapter from '../../components/SliderFieldAdapter';
import ToggleFieldAdapter from '../../components/ToggleFieldAdapter';
import TextAreaFieldAdapter from '../../components/TextAreaFieldAdapter';
import SelectFieldAdapter from '../../components/SelectFieldAdapter';
import './AddPlaceForm.scss'


//51.242456, 22.565217
const defaultValues = {
    city: 'lublin',
    latitude: '51.242456',
    longitude: '22.565217'
}


class Emmiter extends React.Component {

    componentDidUpdate() {
        const { selectedType, type, setType } = this.props;

        if (selectedType && selectedType !== type) {
            setType(selectedType);
        }
    }

    render() {
        return null;
    }

}


const mapStateToProps = (state) => (
    {
        type: state.addPlace.type
    }
)


const mapDispatchToProps = {
    setType
}

const TypeEmmiter = connect(mapStateToProps, mapDispatchToProps)(Emmiter);

class AddPlaceForm extends React.Component {

    renderAdditionalOptions = () => {
        return (
            <>
                <Header as='h5'>Ogólne</Header>
                <Form.Group>
                    <FinalField
                        name='additionalOptions'
                        label='Ogrzewanie'
                        type='checkbox'
                        value='heating'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Wifi'
                        type='checkbox'
                        value='wifi'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Klimatyzacja'
                        type='checkbox'
                        value='airConditioning'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
                <Header as='h5'>Udogodnienia</Header>
                <Form.Group>
                    <FinalField
                        name='additionalOptions'
                        label='Kuchnia'
                        type='checkbox'
                        value='kitchen'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Szafki osobiste'
                        type='checkbox'
                        value='personalCabinets'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Wynajęcie miejsca na event'
                        type='checkbox'
                        value='rentingPlaceForEvent'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
                <Header as='h5'>Dostęność</Header>
                <Form.Group>
                    <FinalField
                        name='additionalOptions'
                        label='Dostęp 24h na dobę'
                        type='checkbox'
                        value='access24hours'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
                <Header as='h5'>Dostęp do kofeiny</Header>
                <Form.Group>
                    <FinalField
                        name='additionalOptions'
                        label='Darmowa herbata'
                        type='checkbox'
                        value='freeTea'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Darmowa kawa'
                        type='checkbox'
                        value='freeCoffee'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
                <Header as='h5'>Komunikacja</Header>
                <Form.Group>
                    <FinalField
                        name='additionalOptions'
                        label='Event'
                        type='checkbox'
                        value='event'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Pracownia'
                        type='checkbox'
                        value='lab'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label="Grupa na facebook'u"
                        type='checkbox'
                        value='groupOnFacebook'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Pitching event'
                        type='checkbox'
                        value='pitchingEvent'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
                <Header as='h5'>Katering</Header>
                <Form.Group>
                    <FinalField
                        name='additionalOptions'
                        label='Darmowa woda'
                        type='checkbox'
                        value='freeWater'
                        component={CheckboxFieldAdapter}
                    />
                    <FinalField
                        name='additionalOptions'
                        label='Darmowe przekąski'
                        type='checkbox'
                        value='freeSnacks'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
            </>
        )
    }

    renderDeskFields = () => {

        return (
            <>
                <Divider />
                <Form.Group  >
                    <FinalField
                        name='additionalOptions'
                        label="Ergonomiczne krzesło"
                        type='checkbox'
                        value='ergonomicChair'
                        component={CheckboxFieldAdapter}
                    />
                </Form.Group>
            </>
        )
    }

    renderRoomFields = () => {

        return (
            <>
                <Divider />
                <Form.Group  >
                    <FinalField
                        name='numberOfSeats'
                        placeholder='Liczba miejsc'
                        type='number'
                        validate={required}
                        label='Liczba miejsc'
                        component={TextFieldAdapter}
                    />
                </Form.Group>
            </>
        )
    }

    renderAddressFields = () => {

        return (
            <>
                <Divider />
            </>
        )
    }

    renderFieldsByType = () => {
        const { type } = this.props;

        switch (type) {
            case 'desk24by7':
            case 'deskOfficeHours':
                return this.renderDeskFields();
            case 'room':
            case 'conferenceRoom':
                return this.renderRoomFields();
            case 'justAddress':
                return this.renderAddressFields();
            default:
                return null;
        }


    }

    render() {
        const { onSubmit } = this.props;

        return (
            <FinalForm
                onSubmit={onSubmit}
                initialValues={defaultValues}
                render={({ handleSubmit, values }) =>
                    (
                        <Form className='document-form' onSubmit={handleSubmit}>

                            {/* <Divider /> */}

                            <TypeEmmiter
                                selectedType={values.type}
                            />

                            
                            <FinalField
                                component={TextFieldAdapter}
                                validate={required}
                                name='name'
                                label='Nazwa'
                                placeholder='Nazwa'


                            />

                            

                            <FinalField
                                component={TextAreaFieldAdapter}
                                validate={required}
                                name='description'
                                label='Opis'
                                placeholder='Opis'


                            />

                            <Divider />

                            

                            <Form.Group  >
                                <FinalField
                                    component={SelectFieldAdapter}
                                    validate={required}
                                    name='city'
                                    label='Miasto'
                                    placeholder='Miasto'
                                    options={
                                        [
                                            {
                                                key: 'lublin',
                                                value: 'lublin',
                                                text: 'Lublin',
                                            },
                                            {
                                                key: 'warsaw',
                                                value: 'warsaw',
                                                text: 'Warszawa',
                                            }
                                        ]
                                    }


                                />
                                <FinalField
                                    component={SelectFieldAdapter}
                                    validate={required}
                                    name='type'
                                    label='Rodzaj'
                                    placeholder='Rodzaj'
                                    options={
                                        [
                                            {
                                                key: 'desk24by7',
                                                value: 'desk24by7',
                                                text: 'Biurko 24 na 7',
                                            },
                                            {
                                                key: 'deskOfficeHours',
                                                value: 'deskOfficeHours',
                                                text: 'Biurko - godziny biznesowe',
                                            },
                                            {
                                                key: 'room',
                                                value: 'room',
                                                text: 'Pokój',
                                            },
                                            {
                                                key: 'conferenceRoom',
                                                value: 'conferenceRoom',
                                                text: 'Sala konferencyjna',
                                            },
                                            {
                                                key: 'justAddress',
                                                value: 'justAddress',
                                                text: 'Sam adres',
                                            }
                                        ]
                                    }


                                />
                                <FinalField
                                    name='latitude'
                                    placeholder='Szerokość geograficzna'
                                    validate={required}
                                    label='Szerokość geograficzna'
                                    component={TextFieldAdapter}
                                />
                                <FinalField
                                    name='longitude'
                                    placeholder='Długość geograficzna'
                                    validate={required}
                                    label='Długość geograficzna'
                                    component={TextFieldAdapter}
                                />
                            </Form.Group>

                            {this.renderFieldsByType()}

                            <Divider />

                            {this.renderAdditionalOptions()}

                            {/* <div>
                                <pre>
                                    {JSON.stringify(values, 0, 2)}
                                </pre>
                            </div> */}


                            <Button type='submit' color='olive'>Dodaj miejsce</Button>

                        </Form>
                    )
                }

            />


        )
    }
}

export default connect(mapStateToProps)(AddPlaceForm);