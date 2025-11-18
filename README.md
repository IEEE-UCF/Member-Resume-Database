# 1. Member-Resume-Database

The following document describes the structure of the code for Version 1 of the Resume Database Infrastructure (RDI). 

## 2. Goal

This version serves as the foundation of a website that will undergo many changes over the span of years, so the main goal for it was to be as easily accessible as possible. This was done in two ways. First, the code that represents each field in the database is easy to find. If one wants to make a change to any field, they can simply look for the component that shares its name. Second, the code that represents each field was written to be as similar to the code all other fields as possible. If one wants to understand the structure of a field, they can simply learn a simpler one, and the understanding would extend to every other one. While future versions do not need to maintain this symmetry, the will hopefully be easy to implement.

## 3. Form Structure

The structure of the form is intended to be symmetric, such that every field looks nearly identical. This document will start by describing the simplest section, and it slowly builds up to the most complex ones.

### 3.1. The Name Section

The first bits of code this document will describe are of the name section.

#### 3.1.1. The Name Section Call in Form.tsx

The following is the code that calls NameComponent.tsx, the component for the name field, in Form.tsx:

```javascript
<div className={`${formStyles.child} ${formStyles.name}`}>
    <NameComponent 
        name={formData.name} 
        setFormData={setFormData} 
    />
</div>
```

This code comprises of a div tag that isolates the component and connects it to the form's stylesheet. Inside the div tag is a call to the component NameComponent.tsx. It is passed the name field in the formData object and setFormData- the useState function that sets the contents of formData.

#### 3.1.2. The Name Section as a Component

The following is the code inside NameComponent.tsx.

```javascript
import React from "react";
import type { Form } from "../interfaces";

type NameComponentProps = {
    name: string;
    setFormData: React.Dispatch<React.SetStateAction<Form>>;
};

const NameComponent = ({ name, setFormData }: NameComponentProps) => {
    return (
        <div className="input name">
            <h3>Name</h3>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
            />
        </div>
    );
};

export default NameComponent;
```

As stated before, NameComponent.tsx is passed two properties: the name field in formData and the function setFormData of useState, which resets formData according to changes. These components are handled as a type called NameComponentProps.

The name component itself is a constant that is sent to Form.tsx as the default export of NameComponent.tsx.

Inside the component is only its return value, which comprises of a title for the component and an input tag in HTML. The input tag is passed four fields. The first is an input type as a text. The second is its key in the JSON object sent in the POST request of the fom. Third is the string in the input tag accessed through the name field in formData, passed as the variable called name, and used as the value for the name in the JSON object. Finally, it is passed an onChange, a field provided by React, which is given the function setFormData. This version of setFormData sets formData to a new formData object in which the only change is in the name field, which is set to the string the user writes in the input tag. It is updated during every rerender.

### 3.2. The Skills Section

The code of the skills section is nearly identical to the code of the name section except in that it is implmented as an array, has a different name, and represents another part of the form.

#### 3.2.1. The Skills Section Call in Form.tsx

This code is nearly identical to that of the name section call in Form.tsx. Its parts are described in better detail in section 3.1.1 in this document.

```javascript
<div className={`${formStyles.child} ${formStyles.skills}`}>
    <SkillsComponent
        skills={formData.skills}
        setFormData={setFormData}
    />
</div>
```

#### 3.2.2.

The following is the code inside SkillsComponent.tsx:

```javascript
import { Dispatch, SetStateAction } from "react";

import { type Form } from "../interfaces"

interface SkillsComponentProps {
    skills: string[];
    setFormData: Dispatch<SetStateAction<Form>>;
}

const SkillsComponent = ({ skills, setFormData }: SkillsComponentProps) => {
    return (
        <>
            <h3>Skills</h3>
            {skills.map((skill, index) => {
                return (
                    <div key={`skills[${index}]`}>
                        <input
                            type="text"
                            name={`skills[${index}]`}
                            value={skill}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    const result = [...prev.skills];
                                    result[index] = e.target.value;
                                    return { ...prev, skills: result };
                                })
                            }
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setFormData((prev) => ({
                                    ...prev,
                                    skills: prev.skills.filter((_, i) => i !== index),
                                }))
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setFormData((prev) => ({
                        ...prev,
                        skills: [...prev.skills, ""],
                    }))
                }}
            >
                Add Skill
            </button>
        </>
    );
};

export default SkillsComponent;
```

This code has a lot in common with the name section as a component in section 3.1.2. This section of the document will focus on the key difference, its implementation as an array.

Skills is an array because one resume can contain multiple skills. In fact, it may contain a number of skills that cannot be accurately counted. This document handles that by using the .map() function to iterate through each skill in the skills array and return it as a component.

