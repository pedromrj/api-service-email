import Mail from "../lib/Mail";

export default {
    key: "RegistrationMail",
    async handle({ data }) {

        const { user } = data;

        await Mail.sendMail({
            from: "Queue Test <queue@queue.com.br>",
            to: "Queue Test <queue@queue.com.br>",
            subject: "Assunto",
            html: "<h1>Hello World</h1>"
        })
    },
}