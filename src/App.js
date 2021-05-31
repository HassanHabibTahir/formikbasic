import './App.css';
import { Formik, useFormik } from 'formik';
function App() {

  const initialValues = {
    name: "",
    email: "",
    channel: ""
  }

  const onSubmit = values => {
    console.log(values, "Form data")
  }

  const validate = values => {
    let errors = {}
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.channel) {
      errors.channel = 'Required'
    }
    return errors
  }


  const formik = useFormik({
    initialValues,
    onSubmit,
    validate

  })


  console.log("values===>", formik.errors)
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} >
        <div class="icon">
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="formcontainer">
          <div class="container">
            <label for="uname"><strong>Username</strong></label>

            <input type="text" placeholder="Enter Username" onChange={formik.handleChange} value={formik.values.name} name="name" />
            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
            <label for="mail"><strong>E-mail</strong></label>

            <input type="text" placeholder="Enter E-mail" name="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email ? <p>{formik.errors.email}</p> : null}
            <label for="psw"><strong>channel</strong></label>
            <input type="text" placeholder="Enter website name" name="channel" onChange={formik.handleChange} value={formik.values.channel} />
            {formik.errors.channel ? <p>{formik.errors.channel}</p> : null}
          </div>
          <button type="submit"><strong>SIGN UP</strong></button>

        </div>
      </form>
    </div>
  );
}

export default App;
