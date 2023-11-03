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
    width:25%;
    background-color:white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
        font-size:24px;
        font-weight: 300;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
`
const Input = styled.input`
        flex:1;
        min-width:40%;
        margin: 10px 0;
        padding: 10px;
`
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color:teal;
        color:white;
        cursor: pointer;
        margin-bottom:10px;
`
const Link = styled.a`
        margin: 5px 0px;
        font-size: 13px;
        text-decoration: underline;
        cursor:pointer;

`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOG IN</Button>
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE AN ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login