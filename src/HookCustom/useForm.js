import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'


const useForm = (validate) => {


    const [textErr, setTextErr] = useState({})
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        name: '',
        email: '',
        title: '',
        content: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSend = async () => {
        const contact = doc(db, 'contact', `${values.title}---${values.email}`);
        const { name, email, title, content } = values
        setLoading(true)
        setTextErr(validate(values))

        if (name.trim() && email.trim() && title.trim() && content.trim()) {
            await setDoc(contact, {
                name: values.name,
                email: values.email,
                title: values.title,
                content: values.content
            });

            setValues({
                name: '',
                email: '',
                title: '',
                content: ''
            })
            alert("Gửi thành công")

        }
        setLoading(false)

    }


    return {
        handleChange, values, handleSend, textErr,loading
    }


}

export default useForm