import React, { useEffect } from 'react'
import { useGetAllEmployee } from '../../../services/queries/EmployeeQueries'
import { Button, Col, Container, Row, Stack, Table } from 'react-bootstrap';
import Employee from '../employee/Employee';
import { useQueryClient } from '@tanstack/react-query';
import EmployeeService from '../../../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

type Employee = {
    id: number;
    name: string;
    email: string;
    phone: string;
    department: string;
};

const Dashboard = () => {
    
    const navigate = useNavigate();
    // const queryClient = useQueryClient();
    const {data : getAlldata, refetch} = useGetAllEmployee();
    
    const employee: Employee[] = getAlldata?.data || [] ;

    useEffect(()=>{
        refetch();
        console.log("ang daming effects");
    },[])


    const handleDetele = async (employeeId: any)=>{

        try{
            const response = await EmployeeService.deleteEmployee(employeeId);

            console.log(response.data)
        } catch(error){
            console.log("An unexpected error occurred:", error)
        }
    }


    const handleUpdate = (empId: any) => {
        navigate(`/employee/${empId}`);
    }




  return (
    <div>
        <Container className='mt-5 '>
            <Row>
                <Col>
                <h1 className='text-center'>Employee</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th className='text-center' style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {employee.map((employee: any) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.department}</td>
                                <td className='d-flex justify-content-center' >
                                <Stack direction='horizontal' gap={3}>
                                <Button variant='outline-secondary'
                                onClick={()=> handleUpdate(employee.id)}>Update</Button>
                                <Button variant='outline-danger'
                                onClick={()=> handleDetele(employee.id)}>Delete</Button>
                                </Stack>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Dashboard