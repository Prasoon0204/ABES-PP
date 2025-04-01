const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <section>
        <div>
          <label>Name</label>
          <input
          name = "userName"
          placeholder="Type here..." />
        </div>
        <div>
          <label>Email</label>
          <input 
          name="userEmail"
          placeholder="Type here..." />
        </div>
        <button>Submit</button>
      </section>
    </form>
  )
}

export default Form