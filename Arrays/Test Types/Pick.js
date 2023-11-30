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
var data = {
    username: "username",
    email: "email",
    phoneNumber: "phoneNumber"
};
function serializeTo(data) {
    return data;
}
var result = serializeTo(data);
console.log(result);
