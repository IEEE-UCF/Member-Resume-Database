# Member-Resume-Database

The following document describes the structure of the code for Version 1 of the Resume Database Infrastructure (RDI). 

## Goal

This version serves as the foundation of a website that will undergo many changes over the span of years, so the main goal for it was to be as easily accessible as possible. This was done in two ways. First, the code that represents each field in the database is easy to find. If one wants to make a change to any field, they can simply look for the component that shares its name. Second, the code that represents each field was written to be as similar to the code all other fields as possible. If one wants to understand the structure of a field, they can simply learn a simpler one, and the understanding would extend to every other one. While future versions do not need to maintain this symmetry, the will hopefully be easy to implement.

## Form Structure

The structure of the form is intended to be symmetric, such that every field looks nearly identical. This document will start by describing the simplest field, and it slowly builds up to the most complex ones.

### The Name Field

The first bits of code this document will describe are of the name field.

#### The Name Field Call in Form.tsx

The following is the code that calls NameComponent.tsx, the component for the name field, in Form.tsx:

<div className={`${formStyles.child} ${formStyles.name}`}>
    <NameComponent 
        name={formData.name} 
        setFormData={setFormData} 
    />
</div>

This code comprises of a div tag that isolates the component and connects it to the form's stylesheet. Inside the div tag is a call to the component NameComponent.tsx. It is passed the name field in the formData object and setFormData- the useState function that sets the contents of formData.

#### The Name Field as a Component

