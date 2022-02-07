"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Banks",
			[
				{
					code: 1,
					name: "Banco Do Brasil S.A (Bb)",
				},
				{
					code: 237,
					name: "Bradesco S.A",
				},
				{
					code: 335,
					name: "Banco Digio S.A",
				},
				{
					code: 260,
					name: "Nu Pagamentos S.A (Nubank)",
				},
				{
					code: 290,
					name: "Pagseguro Internet S.A",
				},
				{
					code: 323,
					name: "Mercado Pago – Conta Do Mercado Livre",
				},
				{
					code: 237,
					name: "Next Bank",
				},
				{
					code: 637,
					name: "Banco Sofisa S.A",
				},
				{
					code: 77,
					name: "Banco Inter S.A",
				},
				{
					code: 341,
					name: "Itaú Unibanco S.A",
				},
				{
					code: 104,
					name: "Caixa Econômica Federal (Cef)",
				},
				{
					code: 33,
					name: "Banco Santander Brasil S.A",
				},
				{
					code: 212,
					name: "Banco Original S.A",
				},
				{
					code: 756,
					name: "Bancoob (Banco Cooperativo Do Brasil)",
				},
				{
					code: 655,
					name: "Banco Votorantim S.A",
				},
				{
					code: 655,
					name: "Neon Pagamentos S.A",
				},
				{
					code: 41,
					name: "Banrisul – Banco Do Estado Do Rio Grande Do Sul S.A",
				},
				{
					code: 389,
					name: "Banco Mercantil Do Brasil S.A",
				},
				{
					code: 422,
					name: "Banco Safra S.A",
				},
				{
					code: 70,
					name: "Banco De Brasília (Brb)",
				},
				{
					code: 136,
					name: "Unicred Cooperativa",
				},
				{
					code: 741,
					name: "Banco Ribeirão Preto",
				},
				{
					code: 739,
					name: "Banco Cetelem S.A",
				},
				{
					code: 743,
					name: "Banco Semear S.A",
				},
				{
					code: 100,
					name: "Planner Corretora De Valores S.A",
				},
				{
					code: 96,
					name: "Banco B3 S.A",
				},
				{
					code: 747,
					name: "Banco Rabobank Internacional Do Brasil S.A",
				},
				{
					code: 748,
					name: "Sicredi S.A",
				},
				{
					code: 752,
					name: "Bnp Paribas Brasil S.A",
				},
				{
					code: 91,
					name: "Unicred Central Rs",
				},
				{
					code: 399,
					name: "Kirton Bank",
				},
				{
					code: 108,
					name: "Portocred S.A",
				},
				{
					code: 757,
					name: "Banco Keb Hana Do Brasil S.A",
				},
				{
					code: 102,
					name: "Xp Investimentos S.A",
				},
				{
					code: 348,
					name: "Banco Xp S/A",
				},
				{
					code: 340,
					name: "Super Pagamentos S/A (Superdital)",
				},
				{
					code: 84,
					name: "Uniprime Norte Do Paraná",
				},
				{
					code: 180,
					name: "Cm Capital Markets Cctvm Ltda",
				},
				{
					code: 66,
					name: "Banco Morgan Stanley S.A",
				},
				{
					code: 15,
					name: "Ubs Brasil Cctvm S.A",
				},
				{
					code: 143,
					name: "Treviso Cc S.A",
				},
				{
					code: 62,
					name: "Hipercard Bm S.A",
				},
				{
					code: 74,
					name: "Bco. J.Safra S.A",
				},
				{
					code: 99,
					name: "Uniprime Central Ccc Ltda",
				},
				{
					code: 25,
					name: "Banco Alfa S.A.",
				},
				{
					code: 75,
					name: "Bco Abn Amro S.A",
				},
				{
					code: 40,
					name: "Banco Cargill S.A",
				},
				{
					code: 190,
					name: "Servicoop",
				},
				{
					code: 63,
					name: "Banco Bradescard",
				},
				{
					code: 191,
					name: "Nova Futura Ctvm Ltda",
				},
				{
					code: 64,
					name: "Goldman Sachs Do Brasil Bm S.A",
				},
				{
					code: 97,
					name: "Ccc Noroeste Brasileiro Ltda",
				},
				{
					code: 16,
					name: "Ccm Desp Trâns Sc E Rs",
				},
				{
					code: 12,
					name: "Banco Inbursa",
				},
				{
					code: 3,
					name: "Banco Da Amazonia S.A",
				},
				{
					code: 60,
					name: "Confidence Cc S.A",
				},
				{
					code: 37,
					name: "Banco Do Estado Do Pará S.A",
				},
				{
					code: 159,
					name: "Casa Credito S.A",
				},
				{
					code: 172,
					name: "Albatross Ccv S.A",
				},
				{
					code: 85,
					name: "Coop Central Ailos",
				},
				{
					code: 114,
					name: "Central Cooperativa De Crédito No Estado Do Espírito Santo",
				},
				{
					code: 36,
					name: "Banco Bbi S.A",
				},
				{
					code: 394,
					name: "Banco Bradesco Financiamentos S.A",
				},
				{
					code: 4,
					name: "Banco Do Nordeste Do Brasil S.A.",
				},
				{
					code: 320,
					name: "Banco Ccb Brasil S.A",
				},
				{
					code: 189,
					name: "Hs Financeira",
				},
				{
					code: 105,
					name: "Lecca Cfi S.A",
				},
				{
					code: 76,
					name: "Banco Kdb Brasil S.A.",
				},
				{
					code: 82,
					name: "Banco Topázio S.A",
				},
				{
					code: 286,
					name: "Ccr De Ouro",
				},
				{
					code: 93,
					name: "Pólocred Scmepp Ltda",
				},
				{
					code: 273,
					name: "Ccr De São Miguel Do Oeste",
				},
				{
					code: 157,
					name: "Icap Do Brasil Ctvm Ltda",
				},
				{
					code: 183,
					name: "Socred S.A",
				},
				{
					code: 14,
					name: "Natixis Brasil S.A",
				},
				{
					code: 130,
					name: "Caruana Scfi",
				},
				{
					code: 127,
					name: "Codepe Cvc S.A",
				},
				{
					code: 79,
					name: "Banco Original Do Agronegócio S.A",
				},
				{
					code: 81,
					name: "Bbn Banco Brasileiro De Negocios S.A",
				},
				{
					code: 118,
					name: "Standard Chartered Bi S.A",
				},
				{
					code: 133,
					name: "Cresol Confederação",
				},
				{
					code: 121,
					name: "Banco Agibank S.A",
				},
				{
					code: 83,
					name: "Banco Da China Brasil S.A",
				},
				{
					code: 138,
					name: "Get Money Cc Ltda",
				},
				{
					code: 24,
					name: "Bco Bandepe S.A",
				},
				{
					code: 95,
					name: "Banco Confidence De Câmbio S.A",
				},
				{
					code: 94,
					name: "Banco Finaxis",
				},
				{
					code: 276,
					name: "Senff S.A",
				},
				{
					code: 137,
					name: "Multimoney Cc Ltda",
				},
				{
					code: 92,
					name: "Brk S.A",
				},
				{
					code: 47,
					name: "Banco Bco Do Estado De Sergipe S.A",
				},
				{
					code: 144,
					name: "Bexs Banco De Cambio S.A.",
				},
				{
					code: 126,
					name: "Br Partners Bi",
				},
				{
					code: 301,
					name: "Bpp Instituição De Pagamentos S.A",
				},
				{
					code: 173,
					name: "Brl Trust Dtvm Sa",
				},
				{
					code: 119,
					name: "Banco Western Union",
				},
				{
					code: 254,
					name: "Parana Banco S.A",
				},
				{
					code: 268,
					name: "Barigui Ch",
				},
				{
					code: 107,
					name: "Banco Bocom Bbm S.A",
				},
				{
					code: 412,
					name: "Banco Capital S.A",
				},
				{
					code: 124,
					name: "Banco Woori Bank Do Brasil S.A",
				},
				{
					code: 149,
					name: "Facta S.A. Cfi",
				},
				{
					code: 197,
					name: "Stone Pagamentos S.A",
				},
				{
					code: 142,
					name: "Broker Brasil Cc Ltda",
				},
				{
					code: 389,
					name: "Banco Mercantil Do Brasil S.A.",
				},
				{
					code: 184,
					name: "Banco Itaú Bba S.A",
				},
				{
					code: 634,
					name: "Banco Triangulo S.A (Banco Triângulo)",
				},
				{
					code: 545,
					name: "Senso Ccvm S.A",
				},
				{
					code: 132,
					name: "Icbc Do Brasil Bm S.A",
				},
				{
					code: 298,
					name: "Vips Cc Ltda",
				},
				{
					code: 129,
					name: "Ubs Brasil Bi S.A",
				},
				{
					code: 128,
					name: "Ms Bank S.A Banco De Câmbio",
				},
				{
					code: 194,
					name: "Parmetal Dtvm Ltda",
				},
				{
					code: 310,
					name: "Vortx Dtvm Ltda",
				},
				{
					code: 163,
					name: "Commerzbank Brasil S.A Banco Múltiplo",
				},
				{
					code: 280,
					name: "Avista S.A",
				},
				{
					code: 146,
					name: "Guitta Cc Ltda",
				},
				{
					code: 279,
					name: "Ccr De Primavera Do Leste",
				},
				{
					code: 182,
					name: "Dacasa Financeira S/A",
				},
				{
					code: 278,
					name: "Genial Investimentos Cvm S.A",
				},
				{
					code: 271,
					name: "Ib Cctvm Ltda",
				},
				{
					code: 21,
					name: "Banco Banestes S.A",
				},
				{
					code: 246,
					name: "Banco Abc Brasil S.A",
				},
				{
					code: 751,
					name: "Scotiabank Brasil",
				},
				{
					code: 208,
					name: "Banco Btg Pactual S.A",
				},
				{
					code: 746,
					name: "Banco Modal S.A",
				},
				{
					code: 241,
					name: "Banco Classico S.A",
				},
				{
					code: 612,
					name: "Banco Guanabara S.A",
				},
				{
					code: 604,
					name: "Banco Industrial Do Brasil S.A",
				},
				{
					code: 505,
					name: "Banco Credit Suisse (Brl) S.A",
				},
				{
					code: 196,
					name: "Banco Fair Cc S.A",
				},
				{
					code: 300,
					name: "Banco La Nacion Argentina",
				},
				{
					code: 477,
					name: "Citibank N.A",
				},
				{
					code: 266,
					name: "Banco Cedula S.A",
				},
				{
					code: 122,
					name: "Banco Bradesco Berj S.A",
				},
				{
					code: 376,
					name: "Banco J.P. Morgan S.A",
				},
				{
					code: 473,
					name: "Banco Caixa Geral Brasil S.A",
				},
				{
					code: 745,
					name: "Banco Citibank S.A",
				},
				{
					code: 120,
					name: "Banco Rodobens S.A",
				},
				{
					code: 265,
					name: "Banco Fator S.A",
				},
				{
					code: 7,
					name: "Bndes (Banco Nacional Do Desenvolvimento Social)",
				},
				{
					code: 188,
					name: "Ativa S.A Investimentos",
				},
				{
					code: 134,
					name: "Bgc Liquidez Dtvm Ltda",
				},
				{
					code: 641,
					name: "Banco Alvorada S.A",
				},
				{
					code: 29,
					name: "Banco Itaú Consignado S.A",
				},
				{
					code: 243,
					name: "Banco Máxima S.A",
				},
				{
					code: 78,
					name: "Haitong Bi Do Brasil S.A",
				},
				{
					code: 111,
					name: "Banco Oliveira Trust Dtvm S.A",
				},
				{
					code: 17,
					name: "Bny Mellon Banco S.A",
				},
				{
					code: 174,
					name: "Pernambucanas Financ S.A",
				},
				{
					code: 495,
					name: "La Provincia Buenos Aires Banco",
				},
				{
					code: 125,
					name: "Brasil Plural S.A Banco",
				},
				{
					code: 488,
					name: "Jpmorgan Chase Bank",
				},
				{
					code: 65,
					name: "Banco Andbank S.A",
				},
				{
					code: 492,
					name: "Ing Bank N.V",
				},
				{
					code: 250,
					name: "Banco Bcv",
				},
				{
					code: 145,
					name: "Levycam Ccv Ltda",
				},
				{
					code: 494,
					name: "Banco Rep Oriental Uruguay",
				},
				{
					code: 253,
					name: "Bexs Cc S.A",
				},
				{
					code: 269,
					name: "Hsbc Banco De Investimento",
				},
				{
					code: 213,
					name: "Bco Arbi S.A",
				},
				{
					code: 139,
					name: "Intesa Sanpaolo Brasil S.A",
				},
				{
					code: 18,
					name: "Banco Tricury S.A",
				},
				{
					code: 630,
					name: "Banco Intercap S.A",
				},
				{
					code: 224,
					name: "Banco Fibra S.A",
				},
				{
					code: 600,
					name: "Banco Luso Brasileiro S.A",
				},
				{
					code: 623,
					name: "Banco Pan",
				},
				{
					code: 204,
					name: "Banco Bradesco Cartoes S.A",
				},
				{
					code: 479,
					name: "Banco Itaubank S.A",
				},
				{
					code: 456,
					name: "Banco Mufg Brasil S.A",
				},
				{
					code: 464,
					name: "Banco Sumitomo Mitsui Brasil S.A",
				},
				{
					code: 613,
					name: "Omni Banco S.A",
				},
				{
					code: 652,
					name: "Itaú Unibanco Holding Bm S.A",
				},
				{
					code: 653,
					name: "Banco Indusval S.A",
				},
				{
					code: 69,
					name: "Banco Crefisa S.A",
				},
				{
					code: 370,
					name: "Banco Mizuho S.A",
				},
				{
					code: 249,
					name: "Banco Investcred Unibanco S.A",
				},
				{
					code: 318,
					name: "Banco Bmg S.A",
				},
				{
					code: 626,
					name: "Banco Ficsa S.A",
				},
				{
					code: 270,
					name: "Sagitur Cc Ltda",
				},
				{
					code: 366,
					name: "Banco Societe Generale Brasil",
				},
				{
					code: 113,
					name: "Magliano S.A",
				},
				{
					code: 131,
					name: "Tullett Prebon Brasil Cvc Ltda",
				},
				{
					code: 11,
					name: "C.Suisse Hedging-Griffo Cv S.A (Credit Suisse)",
				},
				{
					code: 611,
					name: "Banco Paulista",
				},
				{
					code: 755,
					name: "Bofa Merrill Lynch Bm S.A",
				},
				{
					code: 89,
					name: "Ccr Reg Mogiana",
				},
				{
					code: 643,
					name: "Banco Pine S.A",
				},
				{
					code: 140,
					name: "Easynvest – Título Cv S.A",
				},
				{
					code: 707,
					name: "Banco Daycoval S.A",
				},
				{
					code: 288,
					name: "Carol Dtvm Ltda",
				},
				{
					code: 101,
					name: "Renascenca Dtvm Ltda",
				},
				{
					code: 487,
					name: "Deutsche Bank S.A Banco Alemão",
				},
				{
					code: 233,
					name: "Banco Cifra",
				},
				{
					code: 177,
					name: "Guide",
				},
				{
					code: 633,
					name: "Banco Rendimento S.A",
				},
				{
					code: 218,
					name: "Banco Bs2 S.A",
				},
				{
					code: 292,
					name: "Bs2 Distribuidora De Títulos E Investimentos",
				},
				{
					code: 169,
					name: "Banco Olé Bonsucesso Consignado S.A",
				},
				{
					code: 293,
					name: "Lastro Rdv Dtvm Ltda",
				},
				{
					code: 285,
					name: "Frente Cc Ltda",
				},
				{
					code: 80,
					name: "B&T Cc Ltda",
				},
				{
					code: 753,
					name: "Novo Banco Continental S.A Bm",
				},
				{
					code: 222,
					name: "Banco Crédit Agricole Br S.A",
				},
				{
					code: 754,
					name: "Banco Sistema",
				},
				{
					code: 98,
					name: "Credialiança Ccr",
				},
				{
					code: 610,
					name: "Banco Vr S.A",
				},
				{
					code: 712,
					name: "Banco Ourinvest S.A",
				},
				{
					code: 10,
					name: "Credicoamo",
				},
				{
					code: 283,
					name: "Rb Capital Investimentos Dtvm Ltda",
				},
				{
					code: 217,
					name: "Banco John Deere S.A",
				},
				{
					code: 117,
					name: "Advanced Cc Ltda",
				},
				{
					code: 336,
					name: "Banco C6 S.A – C6 Bank",
				},
				{
					code: 654,
					name: "Banco A.J. Renner S.A",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Banks", null, {});
	},
};
