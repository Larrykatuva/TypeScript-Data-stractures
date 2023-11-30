// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//   }
   
//   type TodoPreview = Pick<Todo, "title" | "completed">;
   
//   const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//   };
   
//   todo;

const data = {
    username: "username",
    email: "email",
    phoneNumber: "phoneNumber"
}

interface User {
    username: string;
    email: string;
}

function serializeTo<T>(data: any) {
    type newFormat = ReturnType<() => T>;
    return data as newFormat;
}

const result = serializeTo<User>(data);
console.log(result);



