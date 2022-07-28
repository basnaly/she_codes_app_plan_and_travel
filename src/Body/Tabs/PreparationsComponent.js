import React from 'react';

import { useField, FieldArray, Field } from 'formik';
import FormikTextInput from '../InputComponents/FormikTextInput';
import FormikCheckbox from '../InputComponents/FormikCheckbox';
import { IconButton } from '@mui/material';
import { CategoryTitle, TabContentBox } from '../../styles/MuiStyles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InputGroupPreparation from '../InputComponents/InputGroupPreparation';

const PreparationsComponent = () => {

    const [field, meta, helpers] = useField('preparations');

    const groupByCategory = (field.value ?? []).reduce((groups, preparation, index) => {
        const { category } = preparation;
        preparation.index = index;
        groups[category] = groups[category] ?? [];
        groups[category].push(preparation);
        return groups;
    }, {});

    const categories = Object.keys(groupByCategory)
    console.log(groupByCategory)
    console.log(categories)

    return (

        <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto pt-3 pe-0">
            <FieldArray name='preparations'
                render={({ remove, push }) => (
                    <div className="d-flex flex-column overflow-auto">

                        <div className="d-flex flex-column align-items-center overflow-auto mb-4 pe-3">
                            {categories.map(el =>
                                <div key={el}
                                    className="d-flex flex-column align-items-center mb-2" >
                                    <CategoryTitle className="d-flex align-items-center mb-1" >
                                        {el}
                                    </CategoryTitle>
                                    {groupByCategory[el].map(note =>
                                        <div key={note.id}
                                            className="d-flex align-items-center m-1" >

                                            <Field name={`preparations[${note.index}].checked`}
                                                component={FormikCheckbox} type="checkbox" />

                                            <Field name={`preparations[${note.index}].note`}
                                                component={FormikTextInput} label='Note' size="small" />

                                            <IconButton color='error' aria-label="upload picture" component="span"
                                                className="d-flex align-items-center m-2 "
                                                onClick={() => remove(note.index)} >
                                                <DeleteOutlineIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <InputGroupPreparation categories={categories}
                            push={push} />
                    </div>
                )}>
            </FieldArray>
        </TabContentBox>
    )
}

export default PreparationsComponent;
