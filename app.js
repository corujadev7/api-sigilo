import express from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv';
import data from './data/names.json' with { type: 'json' };
import cpfData from './data/cpfs.json' with { type: 'json' };
dotenv.config()



const app = express()

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json())







app.post('/api/create-payment', async (req, res) => {

    const name = searchNames();
    const cpf = searchCpfs()
    const { amount, phone } = req.body

    const title = "Recarga de " + `${amount}`
 

    const formattedEmail = `${name.toLowerCase().replace(/\s+/g, '.')}@gmail.com`
    const newValue = Math.round(amount * 100)
    const phoneNumber = phone.replace(/\D/g, '');

    const pixData = {
        customer: {
            document: {
                number: cpf,
                type: "cpf"
            },
            name: name,
            email: formattedEmail,
            phone: phoneNumber
        },
        pix: {
            expiresInDays: 1
        },
        amount:newValue,
        paymentMethod: "pix",
        items: [
            {
                tangible: false,
                title: title,
                unitPrice: newValue,
                quantity: 1
            }
        ]
    };

    const url = process.env.URL || "https://api.velana.com.br/v1/transactions";
    const secretKey = process.env.SECRET_KEY;

    const auth = 'Basic ' + Buffer.from(`${secretKey}:x`).toString('base64');
    try {
        const response = await axios.post(url,
            pixData,
            {
                headers: {
                    accept: 'application/json',
                    authorization: auth,
                    'content-type': 'application/json'
                },
            });

            const data = response.data;
        return res.json({ data, success: true })


    } catch (error) {
        console.log(error.response.data)

    }
})


app.get('/api/verify-status/:id', async (req, res) => {
    const { id } = req.params;

    const secretKey = process.env.SECRET_KEY;
    const auth = 'Basic ' + Buffer.from(`${secretKey}:x`).toString('base64');
    const url = process.env.URL || "https://api.velana.com.br/v1/transactions"
    try {



        const response = await axios.get(`${url}/${id}`,

            {
                headers: {
                    accept: 'application/json',
                    authorization: auth,
                    'content-type': 'application/json'
                },
            }
        )
        const status = response.data.status
        return res.json({status})
    } catch (error) {
        return res.status(400).json(error)
    }
})

const searchNames = () => {
    const nomes = data.nomes
    const randomName = nomes[Math.floor(Math.random() * nomes.length)];

    return randomName;
}

const searchCpfs = () => {
    const cpfs = cpfData.cpfs;
    const randomCpf = cpfs[Math.floor(Math.random() * cpfs.length)]

    return randomCpf;
}


app.get('/api/healthy', (req, res) => {
    return res.status(200).json({ message: "✅🏴‍☠️🏴‍☠️ API IS UP AND WORKING.." })
})

const PORT = process.env.PORT || 5004;


app.listen(PORT, () => {
    console.log("Server is running....")
})