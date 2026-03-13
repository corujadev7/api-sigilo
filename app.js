import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();
const app = express()

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

// Rota de teste
app.get('/healthy', (req, res) => {
    return res.json({ name: "✅ API HEALTH IS OK" });
});


//payment route


app.post('/create/payment', async (req, res) => {
    try {
        const { amount, phone } = req.body;

    

        const nomes = [
            "Leonardo Laurentino Da Silva",
            "Marcos Miguel Santana Guimarães",
            "Anderson Pessanha Corrêa",
            "Vinicius Magalhaes Cordeiro",
            "Sarah Estephanie Paulo Portugal",
            "Alex Ribeiro Pessanha",
            "Agatha Coelho Pinto",
            "Thiago Da Silva Bernardo Gomes",
            "Jonathan Da Silva Tavares",
            "Karen Vieira Da Silva",
            "Thiago De Sousa Carvalho",
            "Yago Coutinho Rocha",
            "Steynmon Santos Drumond",
            "Matheus Henrique Patrocinio De Souza",
            "Júlia Junger Ferreira",
            "David Oliveira De Souza",
            "Isabella Miuky Gomes Otani Rangel",
            "Vitória Farias Santos Alves",
            "Arthur Dos Santos Oliveira Andrade",
            "Herick Travassos Pacheco",
            "Gabriel Honório Galdino",
            "Maria Clara Ramalho Da Costa",
            "Jose Messias Barcellos Gomes",
            "Gilcimar Caetano Santiago",
            "Mateus Siqueira Da Costa Souza",
            "Pedro Jeronimo Lima Cabral",
            "Kristen Miranda Muniz",
            "Quezia Ramos De Aguiar",
            "Lucas Martins Reis",
            "Kennedy Souza Rodrigues",
            "Ayrton Da Silva Santos",
            "Maria Luiza Da Silva Souza",
            "Adriele Pessanha Corrêa",
            "Alanna De Freire Borges",
            "Gustavo Aguiar Santos",
            "João Luiz De Jesus Oliveira",
            "Alef Da Silva Guimaraes",
            "Ludymila Da Silva Bernado Do Rosario",
            "Taynara Pinheiro Dos Santos",
            "Emelly Da Silva Machado Tavares Do",
            "Nicolas Rodrigues Mendes Barreto Silva",
            "Rafael Oliveira De Souza",
            "Loruama De Jesus Dos Santos",
            "Yasmin Luciana Gonçalves Lopes",
            "Everttom Pereira Pinto Ferreira",
            "Pamela Rosa Rodrigues Gomes",
            "Ingrid Santos Santiago",
            "Kevin Mariano Da Silva",
            "Ronald Bernardo Baptista Freitas",
            "Everton Gomes Dos Santos",
            "Ariane Bor Da Silva",
            "Gabriel Chagas Dos Santos",
            "Lohan Baltazar De Brito",
            "Rodrigo Araujo De Aguiar",
            "Isaque Da Silva Cardoso",
            "Gleici Ketelen Souza De Araujo",
            "Diego Oliveira Ribeiro",
            "Renata De Souza Grain",
            "João Guilherme Dantas Gomes",
            "Mel Vitoria Bento Rodrigues Coelho",
            "Guilherme Dos Santos Pinheiro",
            "Felipe Ramos Lima",
            "Maykon Douglas Kleber Da Silva",
            "Julyano Rodrigues De Souza",
            "Joelson Parahyba Da Fonseca Júnior",
            "Thailany Da Silva Barreto",
            "Ana Carolina Carvalho Do Nascimento",
            "Joao Vitor Correia Silva",
            "Kevyn Machado Mendes",
            "Fabiana Brito Da Silva",
            "Thais Da Conceição Paixão",
            "Filipe Carvalho Pedroso",
            "Felipe Gomes Marinelli",
            "Wilkerson Silva Do Nascimento",
            "Kayque Vieira Da Silva Schumacker",
            "Jhon Erick De Azevedo Melo",
            "João Victor Silva Leal",
            "Mayume De Castro Freitas",
            "Millena Amado Matias",
            "Werry Jhonatan Moraes Da Cruz",
            "Hingridy Reis Dos Santos",
            "Uelinton Ribeiro Bernardo",
            "Matheus Siqueira De Moraes",
            "Maycon Da Silva Ferreira",
            "Amanda Da Silva Fonseca",
            "Reinan Carmo Dasm= Merces",
            "Karolaynne Da Silva Souza",
            "Luana Souza Cordeiro",
            "Esther Nunes Dos Santos Felix",
            "Kezia Andrade Lopes Pereira",
            "Leonardo Silva Dos Santos",
            "Ana Vitoria De Souza Ribeiro",
            "David Thierry Andrade Costa",
            "Yure Da Silva Beserra",
            "Jabson Queiroz Mendes",
            "Andre Victor Pires Amado",
            "Leonny Leonel Baptista",
            "Lucas Dos Santos Batalha",
            "Elisama Nunes Silva",
            "Marcio David Rangel Pessanha Neto",
            "Yan Santos Nascimento",
            "João Vitor Da Silva Carneiro Miranda",
            "Daniel Aguiar Mendonça",
            "Alberto Mota Soares Dos Santos",
            "Gabriela Araujo Noronha",
            "Esthephany Silva Teixeira Rocha",
            "Jhenifer Da Silva Soares",
            "Amanda Oliveira Ribeiro",
            "Davi Batista Da Silva",
            "Matheus Nunes Reis",
            "Raquel Pinto Mota",
            "João Carlos Pinheiro Jerônyno",
            "Jheferson Da Silva Nascimento",
            "Matheus Silva Dos Santos",
            "Lecildo Moura Junior",
            "Laisa Fernanda De Souza Marcelino",
            "Brendo Alves Da Silva",
            "Maria Grazieli Dos Santos Ferreira",
            "Adrielly Cardoso Dos Santos",
            "Matheus Da Silva Martins",
            "Joao Victor Monteiro Goncalves",
            "Jonathan Assunção Ferreira",
            "Ryan Lourenço Soares Nunes"
        ];

        const cpfs = [
            "19495154782",
            "19155730760",
            "20443257728",
            "19396191736",
            "18351822752",
            "19866110788",
            "12546256742",
            "17782324777",
            "18905419747",
            "19244636794",
            "16235461763",
            "18775974738",
            "06362417771",
            "20977233731",
            "17529835726",
            "06450755741",
            "16449521732",
            "20558682766",
            "14702666797",
            "06429443779",
            "17712862702",
            "15567472765",
            "19527299713",
            "15296704622",
            "14937632701",
            "06254630729",
            "17842571767",
            "20197441718",
            "19486941742",
            "19786037707",
            "19442391704",
            "06481207754",
            "06500207742",
            "20089034783",
            "20556890701",
            "19693851706",
            "19321164782",
            "17253743741",
            "06360898780",
            "17464148711",
            "19652027723",
            "17578059742",
            "49829878821",
            "16176509785",
            "21003134793",
            "06416194724",
            "15296777697",
            "20979255708",
            "21005774765",
            "06434547722",
            "20711332770",
            "12005771759",
            "18686983782",
            "15337571788",
            "19327401719",
            "19702602700",
            "19283707729",
            "21019060743",
            "18772262702",
            "18518899737",
            "20208836780",
            "18483098725",
            "18690217703",
            "18675917740",
            "16302097754",
            "19029600764",
            "06464451707",
            "17826997755",
            "20993495761",
            "19463191712",
            "17525406707",
            "15492913786",
            "16694240732",
            "19043971740",
            "19989030790",
            "06487282774",
            "20964898730",
            "20496895788",
            "20627649793",
            "20854118780",
            "55732275215",
            "19737464761",
            "13199739733",
            "19381380740",
            "06481258740",
            "15877142720",
            "19202839786",
            "18985353705",
            "06506073764",
            "06423170703",
            "19322837730",
            "13554156752",
            "19968646709",
            "14969812780",
            "06397477797",
            "20998060712",
            "19538569776",
            "13772240747",
            "20159955793",
            "20971517797",
            "20466341792",
            "20338780742",
            "18457986783",
            "16093423727",
            "20999379747",
            "19455611732",
            "19099776756",
            "19283685733",
            "17123924762",
            "06420663709",
            "20956048730",
            "13389121781",
            "16727573719",
            "06462922770",
            "20958342750",
            "06504539723",
            "14025269708",
            "16205518708",
            "19753805764",
            "20267758774",
            "19661315779",
            "06498029773",
            "19181168730",
            "13272862706",
            "06462968761",
            "14649834708",
            "14596487731",
            "11900535785",
            "06412315713",
            "17596992765",
            "20961885718",
            "18407831760",
            "20095440720",
            "20625344774",
            "17077756726",
            "19467065746",
            "13577451769",
            "19329621740",
            "13352633738",
            "16132818707",
            "19175194783",
            "19127131793",
            "20068782713",
            "20969590717",
            "06381468793",
            "20976476770",
            "16428989700",
            "18887399751",
            "16425037709",
            "06216454781",
            "19098108784",
            "06432683750",
            "16447375747",
            "19444119769",
            "19073557747",
            "18552131765",
            "20173647707",
            "19679019705",
            "18511036784",
            "16537375738",
            "06504991740",
            "17069673736",
            "19102213761",
            "06437363797"
        ];

        const randomName = nomes[Math.floor(Math.random() * nomes.length)];
        const randomCpfs = cpfs[Math.floor(Math.random() * cpfs.length)];
        const phoneNumber = phone.replace(/\D/g, '');

        const newAmount = parseFloat(amount)
        console.log("NEW AMOUNT==>", newAmount)

        const formattedEmail = `${randomName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`


        const pixData = {
            "identifier": uuidv4(),
            "amount": newAmount,
            "client": {
                "name": randomName,
                "email": formattedEmail,
                "phone": phoneNumber,
                "document": randomCpfs
            },
            "products": [
                {
                    "id": "cmmo5utcr049f1klo1btl8fhy",
                    "name": "Recarga",
                    "quantity": 1,
                    "price": newAmount
                }
            ]
        }

        const newData = {
            "identifier": "zqdq51nlwb",
            "amount": 80,
            "client": {
                "name": "João da Silva",
                "email": "joao@gmail.com",
                "phone": "(11) 99999-9999",
                "document": "164.250.377-09"
            },
            "products": [
                {
                    "id": "gya98txladmp",
                    "name": "Produto 1",
                    "quantity": 1,
                    "price": 80
                }
            ]
        }

        const response = await axios.post('https://app.sigilopay.com.br/api/v1/gateway/pix/receive',
            pixData,
            {
                headers: {
                    'x-public-key': process.env.PUBLIC_KEY,
                    'x-secret-key': process.env.SECRET_KEY,
                    'Content-Type': 'application/json'
                },
            });

        console.log(response.data)
        return res.json({data:response.data, success:true})
    } catch (error) {
        console.log(error.response.data)

    }
})

app.get('/transaction/:id', async (req, res) => {
  const id = req.params.id;
  console.log("CHAMANDO VERIFICAÇÂO DE PIX AQUI:", id)
  const publicKey = process.env.PUBLIC_KEY;
  const secretKey = process.env.SECRET_KEY;

  try {
    const response = await axios.get(`https://app.sigilopay.com.br/api/v1/gateway/transactions?id=${id}`, {
      headers: {
        'x-public-key': publicKey,
        'x-secret-key': secretKey,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data)
    const status = response.data.transaction.status; // ou response.status dependendo da API
    res.json({ status: status });

  } catch (error) {
    // console.error('Erro ao buscar transação:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao buscar transação' });
  }
});
const PORT = process.env.PORT || 5003;


app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`)
})