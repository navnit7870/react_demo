const Input = ({ placeholder }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  };
  
 export default Input