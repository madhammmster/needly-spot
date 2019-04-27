import React from 'react';
import { Form as FinalForm, Field as FinalField } from 'react-final-form';
import { Button, Form, Divider, Header } from 'semantic-ui-react';

import TextFieldAdapter from '../../components/TextFieldAdapter';
import CheckboxFieldAdapter from '../../components/CheckboxFieldAdapter';
import RadioFieldAdapter from '../../components/RadioFieldAdapter';
import SliderFieldAdapter from '../../components/SliderFieldAdapter';
import ToggleFieldAdapter from '../../components/ToggleFieldAdapter';
import TextAreaFieldAdapter from '../../components/TextAreaFieldAdapter';

import './SearchForm.scss'
import SelectFieldAdapter from '../../components/SelectFieldAdapter';
import { required } from '../../validators/validators';

class SearchForm extends React.Component {

    render() {
        const { onSubmit } = this.props;

        return (
            <FinalForm
                onSubmit={onSubmit}

                render={({ handleSubmit }) =>
                    (
                        <Form className='document-form' onSubmit={handleSubmit}>
                            <Form.Group  >
                                <FinalField
                                    name='city'
                                    placeholder='Miasto'
                                    validate={required}
                                    label='Miasto'
                                    component={TextFieldAdapter}
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
                            </Form.Group>

                            <Header as='h5'>Dodatkowe kryteria</Header>

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
                                <FinalField
                                    name='additionalOptions'
                                    label='Dostęp 24h na dobę'
                                    type='checkbox'
                                    value='access24hours'
                                    component={CheckboxFieldAdapter}
                                />
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


                            {/* <Form.Group  > */}
                            <Button type='submit' color='olive'>Wyszukaj</Button>
                            {/* </Form.Group> */}
                        </Form>
                    )
                }

            />


        )
    }
}

export default SearchForm;