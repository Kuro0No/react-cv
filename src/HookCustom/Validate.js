import React from 'react'

const Validate = (values) => {

    let err = {}
    if (!values.name.trim()) {
        err.name = "Vui lòng điền tên của bạn"
    }
    if (!values.email) {
        err.email = "Vui lòng điền email của bạn"
    }
    if (!values.title) {
        err.title = "Vui lòng điền tiêu đề email của bạn"
    }
    if (!values.content) {
        err.content = "Vui lòng điền nội dung email của bạn"
    }

    return err

}

export default Validate