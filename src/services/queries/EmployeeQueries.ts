import { useQuery } from "@tanstack/react-query"
import EmployeeService from "../EmployeeService"
import http from "../http";

export const useGetAllEmployee = () => {
    return useQuery(
        {
            queryKey: ["getAllEmployeeData"],
            queryFn: async () => {
                try {
                    const data = await EmployeeService.getAllEmployee();
                
                return data;
                } catch (error) {
                    console.log("Failed to fetch employees:",error);
                }
            },
            staleTime: 3000 * 60 // 5 minutes (in milliseconds) 
        });
};

interface EmployeeDetails {
    // Define the fields based on the expected structure
}

export interface EmployeeResponse {
    message: string;
    employeeDetails: EmployeeDetails[];
}


export const getEmployeeData = async (userId: string): Promise<EmployeeResponse> => {
    try {
        const response = await http.post<EmployeeResponse>('employee/get-employee-details', { userId });
        return response.data;
    } catch (error) {
        console.error('Error fetching employee data:', error);
        throw error;
    }
};