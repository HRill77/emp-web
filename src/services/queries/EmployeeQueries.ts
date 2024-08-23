import { useQuery } from "@tanstack/react-query"
import EmployeeService from "../EmployeeService"

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