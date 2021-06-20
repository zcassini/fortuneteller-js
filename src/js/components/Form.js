export default function Form() {
  return `
  
   <div class='userForm__container'>
    <input class='firstName' type='text' placeholder='Enter first name' />
    <input class='lastName'  type='text' placeholder='Enter lastName' />
    <input class='age' type='text' placeholder='Enter your age' />
    <input class='birthMonth' type='text' placeholder='Enter your birth month' />
    <input class='color' type='text' placeholder='Enter your favorite color' />
    <input class='siblings' type='text' placeholder='Enter your number of siblings' />
    <input class='submit' type='submit' />
   </div>
    
    `;
}
