import React from 'react'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon,
Text } from './SigninElements'

const SignIn = () => {
  return (
    <div>
        <Container>
            <FormWrap>
                <Icon to="/">SLent</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Ingresa en tu cuenta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type= 'email' required />

                        <FormLabel htmlFor='for'>Contraseña</FormLabel>
                        <FormInput type= 'password' required />

                        <FormButton type='submit'>Continuar</FormButton>
                        <Text>Olvidé mi contraseña</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </div>
  )
}

export default SignIn;