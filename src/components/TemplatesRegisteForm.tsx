import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import { 
  PaperPlaneOutline 
}  from 'react-ionicons';
import axios from 'axios';
import Validator from 'validator';

interface FormDataStype {
  name: string,
  email: string,
  phone: string,
  message: string,
}

interface dataTemplates {
  data:any
}

const TemplatesRegisteForm = (props:dataTemplates) => {
  const addtionalData:any = props.data;

  const [formData , setFormData] = useState<FormDataStype>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChangeName = (e:any) => {
    let updatedValue = {};
    updatedValue = {name:e.target.value};
    setFormData(formData => ({
          ...formData,
          ...updatedValue
        }));
    }
  const handleChangeEmail = (e:any) => {
    let updatedValue = {};
    updatedValue = {email:e.target.value};
    setFormData(formData => ({
          ...formData,
          ...updatedValue
        }));
    }

    const handleChangePhone = (e:any) => {
      let updatedValue = {};
      updatedValue = {phone:e.target.value};
      setFormData(formData => ({
            ...formData,
            ...updatedValue
          }));
      }
    
    const handleChangeMessage = (e:any) => {
      let updatedValue = {};
      updatedValue = {message:e.target.value};
      setFormData(formData => ({
            ...formData,
            ...updatedValue
          }));
    }
  
    const Submit = (props:FormDataStype) => {
      console.log('submit', props);
      if( !Validator.isEmpty(props.email) &&  !Validator.isEmpty(props.name)){
        
        const FormData = require('form-data');
    
        const data = new FormData();

        data.append('your-name', props.name);
        data.append('your-email', props.email);
        data.append('tel-74', props.phone);
        let message:any = '';
        if(addtionalData != undefined){
          message += addtionalData.title ? 'Giao diện' + addtionalData.title + '&#13;&#10;' : '';
          message += addtionalData.link ? 'Đường dẫn' + addtionalData.link + '&#13;&#10;' : '';
        }
        message += props.message
        data.append('your-message', message);
    
        const config:any = {
          method: 'post',
          url: 'https://southteam.vn/wp-json/contact-form-7/v1/contact-forms/4224/feedback',
          data : data
        };
    
        axios(config)
        .then(function (response:any) {
          console.log(JSON.stringify(response.data));
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }

  return (
    <>
        <Form onSubmit={(e) => {e.preventDefault(); Submit(formData)}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <p className='mb-0 py-1'>Tên của bạn <span className="text-danger">*</span></p>
            </Form.Label>
            <Form.Control type="text" placeholder="Tên của bạn" value={formData.name} onChange={(e:any) => handleChangeName(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <p className='mb-0 py-1'>Địa chỉ Email <span className="text-danger">*</span></p>
            </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={formData.email} onChange={(e:any) => handleChangeEmail(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <p className='mb-0 py-1'>Số điện thoại <span className="text-danger">*</span></p>
              </Form.Label>
            <Form.Control type="phone" placeholder="Số điện thoại" value={formData.phone} onChange={(e:any) => handleChangePhone(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nội dung lời nhắn</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Nhập nội dung của bạn ở đây" value={formData.message} onChange={(e:any) => handleChangeMessage(e)}/>
          </Form.Group>
        <Button type="submit" variant='primary'>
        <PaperPlaneOutline
              color={'#ffffff'} 
              title={'Gửi đi'}
              height="16px"
              width="16px"
              cssClasses={'me-2'}
            />
            Gửi thông tin</Button>
      </Form>
    </>
  );
};

export default TemplatesRegisteForm;
