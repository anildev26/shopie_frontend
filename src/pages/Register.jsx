import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
        url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center;
    background-size:cover;
    display: flex;
    align-items:center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
        font-size:24px;
        font-weight: 300;
`
const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
`
const Input = styled.input`
        flex:1;
        min-width:40%;
        margin: 20px 10px 0 0;
        padding: 10px;
`
const Agreement = styled.span`
        font-size: 13px;
        margin:20px 0;
`
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color:teal;
        color:white;
        cursor: pointer;
        ${mobile({ width: "100%" })}
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the Processing of my personal data in accordence
                    with the <b>Privacy Policy</b>
                </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register