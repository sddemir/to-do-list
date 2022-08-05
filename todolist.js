let input=prompt("what would you like to do?")
const todos = ['walk', 'workout']
while(input !== 'quit' && input !== 'q')
{   if(input==='list')
     for(let i=0; i < todos.length; i++)
     {console.log(`${i}: ${todos[i]}`);}
    
    else if (input==='new')
    {const newToDo = prompt("What would you like to add to your list?");
    todos.push(newToDo);
    console.log(`${newToDo} added to the list`)}

    else if(input ==='delete')
    {const index = parseInt(prompt("Enter an index to delete:"));
      while(Number.isNaN(index)){
        const warning = parseInt(prompt("Please enter a valid index!"));
        if(!Number.isNaN(warning))break;
      }
      const deleted = todos.splice(index, 1);
 console.log(`${deleted[0]} deleted from the list`);}
    input=prompt("what would you like to do?")
}
