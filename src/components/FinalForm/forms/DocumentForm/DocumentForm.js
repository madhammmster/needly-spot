import React from 'react';
import { Form as FinalForm, Field as FinalField } from 'react-final-form';
import { Button, Form, Divider } from 'semantic-ui-react';

import TextFieldAdapter from '../../components/TextFieldAdapter';
import CheckboxFieldAdapter from '../../components/CheckboxFieldAdapter';
import RadioFieldAdapter from '../../components/RadioFieldAdapter';
import SliderFieldAdapter from '../../components/SliderFieldAdapter';
import ToggleFieldAdapter from '../../components/ToggleFieldAdapter';
import TextAreaFieldAdapter from '../../components/TextAreaFieldAdapter';

import './DocumentForm.scss'
import SelectFieldAdapter from '../../components/SelectFieldAdapter';

class DocumentForm extends React.Component {

    render() {
        const { onSubmit } = this.props;

        return (
            <FinalForm
                onSubmit={onSubmit}

                render={({ handleSubmit, values }) =>
                    (
                        <Form className='document-form' onSubmit={handleSubmit}>

                            <Divider />

                            <Form.Group  >
                                <FinalField
                                    name='textField'
                                    placeholder='Text Field'
                                    label='Text Field'
                                    icon='user'
                                    iconPosition='left'
                                    component={TextFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <Form.Group  >
                                <FinalField
                                    name='textAreaField'
                                    placeholder='Text Area Field'
                                    component={TextAreaFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <Form.Group  >
                                <FinalField
                                    name='selectField'
                                    options={
                                        [
                                            {
                                                key: 'value1',
                                                value: 'value1',
                                                text: 'value 1',
                                            },
                                            {
                                                key: 'value2',
                                                value: 'value2',
                                                text: 'value 2',
                                            }
                                        ]
                                    }
                                    placeholder='Select Field'
                                    component={SelectFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <Form.Group>
                                <FinalField
                                    name='checkboxFieldsWithValue'
                                    label='Checkbox Fields with value 1'
                                    type='checkbox'
                                    value='checkbox1'
                                    component={CheckboxFieldAdapter}
                                />
                                <FinalField
                                    name='checkboxFieldsWithValue'
                                    label='Checkbox Fields with value 2'
                                    type='checkbox'
                                    value='checkbox2'
                                    component={CheckboxFieldAdapter}
                                />
                            </Form.Group>

                            <Form.Group>
                                <FinalField
                                    name='checkboxField'
                                    label='Checkbox Field'
                                    type='checkbox'
                                    component={CheckboxFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <Form.Group>
                                <FinalField
                                    name='sliderFieldsWithValue'
                                    label='Slider Fields with value 1'
                                    type='checkbox'
                                    value='slider1'
                                    component={SliderFieldAdapter}
                                />
                                <FinalField
                                    name='sliderFieldsWithValue'
                                    label='Slider Fields with value 2'
                                    type='checkbox'
                                    value='slider2'
                                    component={SliderFieldAdapter}
                                />
                            </Form.Group>

                            <Form.Group>
                                <FinalField
                                    name='sliderField'
                                    label='Slider Field'
                                    type='checkbox'
                                    component={SliderFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <Form.Group>
                                <FinalField
                                    name='toggleFieldsWithValue'
                                    label='Toggle Fields with value 1'
                                    type='checkbox'
                                    value='toggle1'
                                    component={ToggleFieldAdapter}
                                />
                                <FinalField
                                    name='toggleFieldsWithValue'
                                    label='Toggle Fields with value 2'
                                    type='checkbox'
                                    value='toggle2'
                                    component={ToggleFieldAdapter}
                                />
                            </Form.Group>

                            <Form.Group>
                                <FinalField
                                    name='toggleField'
                                    label='Toggle Field'
                                    type='checkbox'
                                    component={ToggleFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <Form.Group>
                                <FinalField
                                    name='radioField'
                                    label='Radio Field 1'
                                    value='radio1'
                                    type='radio'
                                    component={RadioFieldAdapter}
                                />
                                <FinalField
                                    name='radioField'
                                    label='Radio Field 2'
                                    value='radio2'
                                    type='radio'
                                    component={RadioFieldAdapter}
                                />
                            </Form.Group>

                            <Divider />

                            <div>
                                <pre>
                                    {JSON.stringify(values, 0, 2)}
                                </pre>
                            </div>

                            <Form.Group  >
                                <Button type='submit' color='olive'>Dodaj dokument</Button>
                            </Form.Group>
                        </Form>
                    )
                }

            />


        )
    }
}

export default DocumentForm;