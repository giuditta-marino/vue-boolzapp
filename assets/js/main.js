var app = new Vue(
	{
		el: '#root',
		data: {
			inputText:'',
			index: 0,
			contacts: [
				{
					name: 'Michele',
					avatar: '_1',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
						}
					],
				},
				{
					name: 'Fabio',
					avatar: '_2',
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},
				{
					name: 'Samuele',
					avatar: '_3',
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received'
						}
					],
				},
				{
					name: 'John',
					avatar: '_4',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},
				{
					name: 'Barbara',
					avatar: '_5',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Come stai? Non ci sentiamo da tantissimo!',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'È vero, sono stata molto impegnata. Io sto bene e tu?',
							status: 'received'
						}
					],
				},
				{
					name: 'Francesca',
					avatar: '_6',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'A che ora passo da te?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Vieni quando vuoi, ti aspetto!',
							status: 'received'
						}
					],
				},
				{
					name: 'Mario',
					avatar: '_7',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Mi manderest gli appunti di Francese?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Certo, subito!',
							status: 'received'
						}
					],
				},
				{
					name: 'Roberto',
					avatar: '_8',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Buongiorno, il suo album è pronto. Può venire a ritirarlo in studio.',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Buongiorno a lei, grazie, a più tardi!',
							status: 'received'
						}
					],
				},

			]

		},

		methods: {
			// getTime: function(date) {
			// 	let dateTime = date.split(" ");
			// 	// let dateTime = date.slice(11,16);
			// 	console.log(dateTime);
			// 	let time = dateTime[1].split(":");
			// 	console.log(time);
			// 	return `${time[0]} : ${time[1]}`;
			// },

			changeIndex: function(i) {
				this.index = i;
				console.log(this.index);
			},

			// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
			// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
			// PRENDERE enter E CREARE UNA FUNZIONE CHE CREI UN OGGETTO CON TEXT INPUTTEXT E LO AGGIUNGA ALL'ARRAY MESSAGES DI QUEL CONTATTO

					// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
					// un “ok” come risposta, che apparirà dopo 1 secondo.
					// devo far partire un settimeout che un seconodo dopo l'inserimento di un messaggio da parte dell'utente crei un obj con text 'ok' e status received e lo inserisca nell'array
			writeMessage: function(){
				let obj ={
					text: this.inputText,
					status: 'sent'
				}
				this.contacts[this.index].messages.push(obj);
				this.inputText ='';
				setTimeout(() => {
					let objA ={
						text: 'Ok',
						status: 'received'
					}
					this.contacts[this.index].messages.push(objA);
				}, 1000);
			}


		}





});
