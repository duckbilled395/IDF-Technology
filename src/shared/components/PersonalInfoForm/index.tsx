import React from 'react'
import {useFormik} from 'formik'

import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from '@mui/material'
import {useAppDispatch} from 'shared/hooks'
import {data} from "shared/schema";
import {validationSchema} from './lib'


import styles from './styles.module.scss'

const PersonalInfoForm: React.FC = () => {
    // console.log(new Date().getFullYear())
    // console.log(new Date('12.11.1999').getFullYear())
    // console.log(new Date().getFullYear() - new Date('12.11.1999').getFullYear())

    const dispatch = useAppDispatch()

    const sexRequired = data.sex.required

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            sex: 'Female',
            date: '',
            ocean: '',
            hobby: [],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const arr: any = []
    const zxc = data.hobby.anyOf.map((el, i) =>
        arr.push({key: i, value: el})
    )
    console.log(arr)
    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                {/*<div className={styles.names}>*/}
                {/*    <div className={styles.names__inner}>*/}
                        <TextField
                            fullWidth
                            id='firstName'
                            name='firstName'
                            label='First name'
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    {/*</div>*/}
                    {/*<div className={styles.names__inner}>*/}
                        <TextField
                            fullWidth
                            id='lastName'
                            name='lastName'
                            label='Last name'
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.other}>*/}
                    {sexRequired && <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="sex"
                            onChange={formik.handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>}
                    <div className={styles.date}>
                        <div className={styles.date__title}>Date of birth</div>
                        <div className={styles.date__inputs}>
                            <TextField
                                fullWidth
                                id='date'
                                name='date'
                                label=''
                                type='date'
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                error={formik.touched.date && Boolean(formik.errors.date)}
                                helperText={formik.touched.date && formik.errors.date}
                            />
                        </div>
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="ocean-label">Ocean</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="ocean"
                            value={formik.values.ocean}
                            name='ocean'
                            label="Ocean"
                            onChange={formik.handleChange}
                        >
                            {data.ocean.oneOf
                                .map((el, i) =>
                                    <MenuItem sx={{
                                        color: 'rgba(0, 0, 0, 0.6);',
                                        "& .MuiButtonBase-root": {
                                            color: "rgba(0, 0, 0, 0.6);"
                                        }
                                    }} value={el} key={i}>{el}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={styles.hobby} component="fieldset" style={{display: "flex"}}>
                        <FormLabel component="legend">Hobby</FormLabel>
                        <FormGroup onChange={formik.handleChange}>
                            {arr.map((item: any) => (
                                <FormControlLabel key={item.value} control={<Checkbox name="hobby" value={item.value}/>}
                                                  label={item.value}/>
                            ))}
                        </FormGroup>
                    </FormControl>
                    <Button className={styles.btn} color='primary' variant='contained' fullWidth type='submit'>
                        Submit
                    </Button>
                {/*</div>*/}
            </form>
        </div>
    )
}

export default PersonalInfoForm
