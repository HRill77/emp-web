import React, {  useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import "../../../shared/styles/Employee.css"
import EmployeeService from '../../../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

export interface IEmployee{
    name: string,
    email: string,
    phone: string,
    department: string
}

const Employee = () => {

    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<IEmployee>({
        name: '',
        email: '',
        phone: '',
        department: ''
    
    });

    const handleInpuChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: any) =>{
        e.preventDefault();

        // console.log(formData);
        try {
            const result = await EmployeeService.addEmployee(
                formData.name,
                formData.email,
                formData.phone,
                formData.department
            );

            queryClient.invalidateQueries({queryKey: ["getAllHomePageBanners"] });

            navigate("/")
            console.log("Employee data:",result.data)
            console.log("whasdashdfka shdfiahsdfla")
        } catch (error) {
            console.log(error)
        }

    }

    

  return (
    <div className='center-form'>
        <h1>Post New Employee</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <FormControl 
                type='text'
                name='name'
                placeholder='Enter name'
                value={formData?.name}
                onChange={handleInpuChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <FormControl 
                type='email'
                name='email'
                placeholder='Enter email'
                value={formData?.email}
                onChange={handleInpuChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <FormControl 
                type='text'
                name='phone'
                placeholder='Enter phone'
                value={formData?.phone}
                onChange={handleInpuChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <FormControl 
                type='text'
                name='department'
                placeholder='Enter department'
                value={formData?.department}
                onChange={handleInpuChange}
                />
            </Form.Group>

            <Button variant='primary' type='submit' className='w-100' >Post Employee</Button>
        </Form>
        </div>
  )
}

export default Employee