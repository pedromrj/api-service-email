import Queue from "../lib/Queue";

export default {
    async store(request, response) {
        const {name, email, password } = request.body;

        const user = {
            name,
            email,
            passowrd,
        }

        await Queue.add("RegistrationMail", { user });

        await Queue.add("UserReport", { user });

        return response.json(user);
    }
}