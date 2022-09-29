import React from 'react';
import {useFormik} from 'formik';
// @ts-ignore
import * as Yup from 'yup';
import {Button, TextField} from "@mui/material";

import styles from './styles.module.scss'
import {IMaskInput} from "react-imask";

const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const SignUpForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const number = '0211214544';
    const num = `${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6, number.length)}`;

    const [phone, setPhone] = React.useState<string>('+375')

    console.log(phone);

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={phone}
                    onChange={(e) => {
                        let val = e.target.value;
                        val = val.replace(/ /gm, '');
                        console.log(val);

                        let num = `${val.substring(0, 3)} ${val.substring(3, 6)} ${val.substring(6, val.length)}`;

                        num = num.trim();
                        setPhone(num)
                    }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    id="repeatPassword"
                    name="repeatPassword"
                    label="Repeat password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
