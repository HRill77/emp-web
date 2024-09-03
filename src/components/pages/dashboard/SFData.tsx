import React, { useEffect, useState } from 'react'
import EmployeeService from '../../../services/EmployeeService';
import { EmployeeResponse, getEmployeeData } from '../../../services/queries/EmployeeQueries';

const SFData = () => {
    const [employeeResponse, setEmployeeResponse] = useState<EmployeeResponse | null>(null);
    const userId = '13-1773'; // Replace with dynamic userId if needed

    useEffect(() => {
        getEmployeeData(userId)
            .then(data => setEmployeeResponse(data))
            .catch(error => console.error('Error:', error));
    }, [userId]);

    return (
        <div>
            <h1>Employee Data</h1>
            {employeeResponse ? (
                <div>
                    <p>{employeeResponse.message}</p>
                    <pre>{JSON.stringify(employeeResponse.employeeDetails, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SFData