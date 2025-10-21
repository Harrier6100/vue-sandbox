export async function formValidate(schema, formData) {
    try {
        await schema.validate(formData, { abortEarly: false });
        return { isValid: true, errors: {} };
    } catch (err) {
        const errors = {};
        if (err.inner && Array.isArray(err.inner)) {
            err.inner.forEach(e => {
                errors[e.path] = e.message;
            });
        }
        return { isValid: false, errors };
    }
};