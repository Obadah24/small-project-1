import React from 'react'
import {Box, Container, Heading, SimpleGrid, Button, Input, FormControl, FormLabel, FormErrorMessage, Select, Textarea} from '@chakra-ui/react'
import * as Yup from 'yup'
import {Form, Formik,Field} from 'formik'
import useSubmit from "../Hook/useSubmit"; 
import {useAlertContext} from "../context/alertContext"; 
const dropdownContainer = [
  {key: 'Freelance Project proposal', value:''},
  {key: 'Option 1', value:'Option 1'},
  {key: 'Option 2', value:'Option 2'},
  {key: 'Option 3', value:'Option 3'},
]
const FormikControl = (props) => {
  const {control, ...rest} = props
  switch(control) {
    case 'chakrainput':
    return <ChakraInput {...rest}/>
    case 'chakraselect':
    return <ChakraSelect {...rest}/>
    case 'chakratextarea':
    return <ChakraTextArea {...rest}/>
    default:
      return null
  }
}
const ChakraInput = (props) => {
  const {lable, name, color,mb, ...rest} = props
return (
  <Field name={name}>
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]} mb='4px'>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
const ChakraSelect = (props) => {
  const {lable, name, options, color, mb, ...rest} = props
return (
  <Field name={name} >
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Select id={name} {...rest} {...field}  >
          {
            options.map(option => {
              return (
                <option key={option.value} value={option.value}>{option.key}</option>
              )
            })
          }
          </Select>
          <FormErrorMessage  mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
const ChakraTextArea = (props) => {
  const {lable, name, color,mb, minH, ...rest} = props
return (
  <Field name={name}>
    {
      ({field, form}) => {
        return <FormControl isInvalid= {form.errors[name] && form.touched[name]} mb='4px'>
          <FormLabel htmlFor={name} color={color}>{lable}</FormLabel>
          <Textarea id={name} {...rest} {...field} minH={minH} />
          <FormErrorMessage mb={mb}>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      }
    }
  </Field>
)
}
export default function ContactMeSection() {
  const {isLoading, response, submit} = useSubmit(); 
  const { onOpen } = useAlertContext(); 
  const initialValues = {
    name:'',
    email:'',
    type:'',
    comment:''
  }
  const onSubmit = (values,onSubmitProps) => {
    console.log('Form Data', values)
    submit('#', values);
    onOpen(response.type, response.message);
    if (response.type === 'success') {
      onSubmitProps.resetForm()
    }
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Verfiy an email').required('Required'),
    type: Yup.string().required('Required'),
    comment: Yup.string().min(10, "Must be at least 10 characters").required('Required'),
  })
  

  return (
    <Container id='contact-me'  as='section' maxWidth='8xl' bg='purple.800' minH='110vh'>
    <Container  as='div' maxWidth='4xl' bg='purple.800' minH='110vh' color='yellow.500' fontWeight='bold'>
      <Box>
    <Heading  margin='0 auto' as='h2' size='xl' color='white' p='20px 20px 10px 0'>
      Conteact me
    </Heading>
      </Box>
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg:1 }}
      p='10px 30px'
      textAlign='center'
      border='2px solid white'
      >
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {
        formik => {
          return (
            <Form>
              <FormikControl
              control='chakrainput'
              type='text'
              lable='Name'
              name='name'
              color='white'
              mb='8px'
              />
              <FormikControl
              control='chakrainput'
              type='email'
              lable='Email'
              name='email'
              color='white'
              mb='8px'
              />
              <FormikControl
              control='chakraselect'
              type='select'
              lable='Type of enquiry'
              name='type'
              options={dropdownContainer}
              color='white'
              />
              <FormikControl
              control='chakratextarea'
              type='textarea'
              lable='Your Message'
              name='comment'
              color='white'
              mb='8px'
              minH='263px'
              />
              {!formik.isValid ?(
                <Button type='submit' disabled={!formik.isValid} bg='whiteAlpha.400'  boxSize='fit-content' p='5px 10px' mt='10px' >Submit</Button>
                ):(
                  <Button type='submit' boxSize='fit-content' p='5px 10px' mt='10px' isLoading={isLoading} >Submit</Button>
                ) }
            </Form>
          )
        }
      }
    </Formik>
    </SimpleGrid>
    </Container >
    </Container>
  )
}

