import http from "./http";

class EmployeeService {

    getAllEmployee(){
        return http.get("/employee");
    }

    getEmployeeById(id: any){
        return http.get(`/employee/${id}`);
    }

    addEmployee(
        name: string,
    email: string,
    phone: string,
    department: string
    ) { return http.post("/employee/post", {
        name,
        email,
        phone,
        department
    })}

    updateEmployee(
        id: any,
        name: any,
        email: any,
        phone: any,
        department: any
    ) {
        return http.put(`/employee/update/${id}`, {
            id, name, email, phone, department
        });
    }

    deleteEmployee(id: any){
        return http.delete(`/employee/delete/${id}`)
    }
}
export default new EmployeeService();