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
					name: 'Luisa',
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
			]

		},
		methods: {
			getTime: function(date) {
				let dateTime = new Date(date);
				let hours = dateTime.getHours();
				let minutes = dateTime.getMinutes();
				return `${hours}:${minutes}`;
			},

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
