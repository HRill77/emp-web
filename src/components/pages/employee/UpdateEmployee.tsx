import React, { useEffect, useState } from 'react';
import "../../../shared/styles/UpdateEmployee.css";
import { IEmployee } from './Employee';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../../../services/EmployeeService';
import { isTryStatement } from 'typescript';

const UpdateEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();

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


    useEffect(()=>{
        const fetchEmployee = async () =>{
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching employee: ", error);
            }
        }
        fetchEmployee();
    },[id])


    const handleEditSubmit = async(e:any) =>{
        e.preventDefault();

      await  EmployeeService.updateEmployee(
            id,
            formData.name,
            formData.email,
            formData.phone,
            formData.department
        ).then((res)=>{
            console.log(res.data);
            navigate("/");
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className='center-form'>
    <h1>Edit Employee</h1>
    <Form onSubmit={handleEditSubmit}>
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

        <Button variant='primary' type='submit' className='w-100' >Update Employee</Button>
    </Form>
    </div>
  )
}

export default UpdateEmployee