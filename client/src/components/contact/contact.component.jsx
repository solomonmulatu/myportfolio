import React, {useState} from 'react';
import data from '../about/about.data.json'

const Contact = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log("email is" + value)
        setCredentials({
            ...credentials, [name]: value
        })


    }
    const resetForm=async()=>{
        setCredentials({
            name: '',
            email: '',
            message: '',
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("hello")
        const {message, name, email} = credentials;
        console.log("name is" + name)

        console.log({email, message});
        const response = await fetch("/api/email/send", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, email, message})
        });
        const resData = await response.json();
        if (resData.msg === 'Created') {
            alert("Message Sent.");
await resetForm()
        } else if (resData.status === 'fail') {
            alert("Message failed to send.")
        }
    }
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-1">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"/>
                                <h4>Location:</h4>
                                <p>{data[4].city}</p>
                            </div>

                            <div className="email">
                                <i className="icofont-envelope"/>
                                <h4>Email:</h4>
                                <p>{data[7].email}</p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"/>
                                <h4>Call:</h4>
                                <p>{data[3].phone}</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form  onSubmit={handleSubmit}  className='contact-form' name='sent' >
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                           value={credentials.name}
                                           onChange={handleChange}
                                           placeholder="Your Name"
                                           data-rule="minlen:4"
                                           data-msg="Please enter at least 4 chars"
                                    />
                                    <div className="validate"/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email"
                                           value={credentials.email}
                                           onChange={handleChange}
                                           placeholder="Your Email"
                                           data-rule="email"
                                           data-msg="Please enter a valid email"
                                        />
                                    <div className="validate"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control"
                                          name="message"
                                          rows="5"
                                          data-rule="required"
                                          value={credentials.message}
                                          onChange={handleChange}
                                          data-msg="Please write something for us"
                                          placeholder="Message"/>
                                <div className="validate"></div>
                            </div>

                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}
export default Contact;
