import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./ResumeBuilder.css"

const ResumeBuilder = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [educationFields, setEducationFields] = useState([{ institute: '', year: '', degree: '' }]);
    const [experienceFields, setExperienceFields] = useState([{ company: '', year: '', designation: '' }]);
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const handleEducationChange = (index, e) => {
        const updatedFields = [...educationFields];
        updatedFields[index][e.target.name] = e.target.value;
        setEducationFields(updatedFields);
    };

    const handleExperienceChange = (index, e) => {
        const updatedFields = [...experienceFields];
        updatedFields[index][e.target.name] = e.target.value;
        setExperienceFields(updatedFields);
    };

    const handleAddEducationField = () => {
        setEducationFields([...educationFields, { institute: '', year: '', degree: '' }]);
    };

    const handleAddExperienceField = () => {
        setExperienceFields([...experienceFields, { company: '', year: '', designation: '' }]);
    };

    const handleAddSkill = () => {
        if (newSkill !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skill) => {
        const updatedSkills = skills.filter((s) => s !== skill);
        setSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', {
            name,
            email,
            address,
            phone,
            educationFields,
            experienceFields,
            skills,
        });
        // Reset form fields
        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setEducationFields([{ institute: '', year: '', degree: '' }]);
        setExperienceFields([{ company: '', year: '', designation: '' }]);
        setSkills([]);
    };

    return (
        <>
            <div>
                <h2 className='title'>Build your Resume</h2>
            </div>
            <div className="mainPage">
                <Form onSubmit={handleSubmit} className='resumeForm'>
                    <div className='container'>
                        <p className='subTitle'>Personal Details</p>
                        <Form.Group className='entry'>
                            <Form.Label className='label'>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='entry'>
                            <Form.Label className='label'>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='entry'>
                            <Form.Label className='label'>Address</Form.Label>
                            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className='entry'>
                            <Form.Label className='label'>Phone</Form.Label>
                            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </Form.Group>
                    </div>

                    <Form.Group className='container'>
                        <p className='subTitle'>Education</p>
                        {educationFields.map((field, index) => (
                            <div key={index} className="form-row entry">
                                <div className="col entry">
                                    <Form.Control
                                        type="text"
                                        name="institute"
                                        value={field.institute}
                                        placeholder="Institute"
                                        onChange={(e) => handleEducationChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className="col entry">
                                    <Form.Control
                                        type="text"
                                        name="year"
                                        value={field.year}
                                        placeholder="Year"
                                        onChange={(e) => handleEducationChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className="col entry">
                                    <Form.Control
                                        type="text"
                                        name="degree"
                                        value={field.degree}
                                        placeholder="Degree"
                                        onChange={(e) => handleEducationChange(index, e)}
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                        <Button variant="primary" className="mt-2 btn" onClick={handleAddEducationField}>
                            Add More
                        </Button>
                    </Form.Group>

                    <Form.Group className='container'>
                        <p className='subTitle'>Experience</p>
                        {experienceFields.map((field, index) => (
                            <div key={index} className="form-row entry">
                                <div className="col entry">
                                    <Form.Control
                                        type="text"
                                        name="company"
                                        value={field.company}
                                        placeholder="Company"
                                        onChange={(e) => handleExperienceChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className="col entry">
                                    <Form.Control
                                        type="text"
                                        name="year"
                                        value={field.year}
                                        placeholder="Year"
                                        onChange={(e) => handleExperienceChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className="col entry">
                                    <Form.Control
                                        type="text"
                                        name="designation"
                                        value={field.designation}
                                        placeholder="Designation"
                                        onChange={(e) => handleExperienceChange(index, e)}
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                        <Button variant="primary" className="mt-2 btn" onClick={handleAddExperienceField}>
                            Add More
                        </Button>
                    </Form.Group>

                    <Form.Group className='container'>
                        <p className='subTitle'>Skills</p>
                        <div className="input-group mb-3 entry">
                            <Form.Control
                                type="text"
                                value={newSkill}
                                placeholder="Enter a skill"
                                onChange={(e) => setNewSkill(e.target.value)}
                            />
                            <div className="input-group-append skillBtn">
                                <Button variant="primary" className='btn mt-2' onClick={handleAddSkill}>
                                    Add Skill
                                </Button>
                            </div>
                        </div>
                        {skills.map((skill, index) => (
                            <span key={index} className="badge badge-primary mr-2" onClick={() => handleRemoveSkill(skill)}>
                                {skill}
                            </span>
                        ))}
                    </Form.Group>

                    <div className='btnContainer'>
                        <Button variant="primary" className='submitBtn' type="submit">
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>
        </>
    );
};

export default ResumeBuilder;
