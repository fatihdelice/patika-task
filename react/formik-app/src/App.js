import './App.css';
//import { Formik } from 'formik';
import { useFormik } from 'formik';

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'Fatih',
      lastName: 'Delice',
      email: 'delicex58@gmail.com',
      gender: 'male',
      hobies: [],
      country: 'Turkiye',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={values.firstName} onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={values.lastName} onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input name="email" value={values.email} onChange={handleChange} />

        <br />
        <br />
        <span>Male</span>
        <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"} />
        <span>Female</span>
        <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"} />

        <br />
        <br />


        <div>
          <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
          Football
        </div>
        <div>
          <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
          Cinema
        </div>
        <div>
          <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
          Photography
        </div>

        <br />
        <br />

        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkiye">Türkiye</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>

        <br /><br />
        <code>{JSON.stringify(values, null, 2)}</code>
      </form>
    </div>
  )

  // return (
  //   <div className="App">
  //     <h1>Sign Up</h1>
  //     <Formik
  //       initialValues={{
  //         firstName: 'Fatih',
  //         lastName: 'Delice',
  //         email: 'delicex58@gmail.com',
  //         gender: 'male',
  //         hobies: [],
  //         country: 'Turkiye',
  //       }}
  //       onSubmit={(values) => {
  //         console.log(values);
  //       }}
  //     >
  //       {
  //         ({ handleSubmit, handleChange, values }) => (
  //           <form onSubmit={handleSubmit}>
  //             <label htmlFor="firstName">First Name</label>
  //             <input name="firstName" value={values.firstName} onChange={handleChange} />

  //             <br />
  //             <br />

  //             <label htmlFor="lastName">Last Name</label>
  //             <input name="lastName" value={values.lastName} onChange={handleChange} />

  //             <br />
  //             <br />

  //             <label htmlFor="email">Email</label>
  //             <input name="email" value={values.email} onChange={handleChange} />

  //             <br />
  //             <br />
  //             <span>Male</span>
  //             <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"} />
  //             <span>Female</span>
  //             <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"} />

  //             <br />
  //             <br />


  //             <div>
  //               <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
  //               Football
  //             </div>
  //             <div>
  //               <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
  //               Cinema
  //             </div>
  //             <div>
  //               <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
  //               Photography
  //             </div>

  //             <br />
  //             <br />

  //             <select name="country" value={values.country} onChange={handleChange}>
  //               <option value="turkiye">Türkiye</option>
  //               <option value="england">England</option>
  //               <option value="usa">USA</option>
  //             </select>

  //             <br />
  //             <br />

  //             <button type="submit">Submit</button>

  //             <br /><br />
  //             <code>{JSON.stringify(values, null, 2)}</code>
  //           </form>
  //         )
  //       }
  //     </Formik>
  //   </div>
  // );
}

export default App;
