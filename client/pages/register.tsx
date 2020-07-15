import React, {useContext, useEffect, CSSProperties} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import RegisterCard from '../src/areas/RegisterCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/OpenPage'
import { UserContext } from '../src/lib/UserContext'

const Register: React.FC = () => {
    const {setToken, api} = useContext(UserContext)
    const onFinish = async ({uniq_id, password, rep_password, first_name, last_name}) => {
        if (password !== rep_password) {
            message.error("Your new password is not the same as your repeated password.")
            return
        } else {
            try {
                const body = await api.register({email: uniq_id + "@umich.edu", password, first_name, last_name})
                await setToken(body.data)
            } catch (err) {
                message.error("There was a problem making your account. If you had already created an account, please login. If you have not, please contact us for support.")
            }
            message.success("Please verify your email address before attempting to purchase or sell tickets.")
            OpenPage('/dashboard')
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Register</title>
            </Head>
            <LoginBackground>
                <RegisterCard title={"Sign Up"} onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default Register;