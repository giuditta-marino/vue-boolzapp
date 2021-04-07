var app = new Vue(
	{
		el: '#root',
		data: {
			inputText:'',
			inputTextSearch: '',
			index: 0,
			indexMess: null,
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
					name: 'Giovanni',
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
							text: 'Hai ragione! Io sto bene e tu?',
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
							text: 'Mi manderesti gli appunti di Informatica?',
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
							text: 'Buongiorno, il suo album è pronto.',
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

		// computed: {
		//
		// 				filteredContacts: function() {
		//
		// 					const filteredContacts = this.contacts.filter((element) => {
		// 						if (this.inputTextSearch !== '') {
		// 							console.log(this.inputTextSearch);
		// 							console.log(element);
		// 							name = element.name;
		// 							return name.toLowerCase().includes(this.inputTextSearch.toLowerCase());
		// 						} else {
		// 							return true;
		// 						}
		//
		// 					})
		// 					return filteredContacts;
		// 				}
		// },

		mounted() {
			this.focusInput()
		},

		methods: {
			// Prendo solo ore e minuti dalla data
			// getTime: function(date) {
				// let dateTime = date.split(" ");
				// console.log(dateTime);
				// console.log(dateTime[1]);
				// let time = dateTime[1].split(":");
				// console.log(time);
				// return `${time[0]}:${time[1]}`;
			//
			// 	let dateTime = date.slice(11,16);
			// 	return dateTime;
			// },

			changeIndex: function(i) {
				this.index = i;
				console.log(this.index);
			},

			// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
			// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
			// PRENDERE enter E CREARE UNA FUNZIONE CHE CREI UN OGGETTO CON TEXT INPUTTEXT E LO AGGIUNGA ALL'ARRAY MESSAGES DI QUEL CONTATTO

					// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
					// un “ok” come risposta, che apparirà dopo 1 secondo.
					// devo far partire un settimeout che un seconodo dopo l'inserimento di un messaggio da parte dell'utente crei un obj con text 'ok' e status received e lo inserisca nell'array
			writeMessage: function(){
				const date = dayjs().format('DD/MM/YYYY HH:mm:ss');

				let obj ={
					date,
					text: this.inputText,
					status: 'sent'
				}
				this.contacts[this.index].messages.push(obj);
				// ripulisco l'input
				this.inputText ='';
				// salvo in una variabile il contatto a cui ho scritto il messaggio in modo che l'ok mi venga dato da lui anche se cambio schermata in quel secondo
				let indexAnswer = this.contacts[this.index];

				setTimeout(() => {
					let objA ={
						date,
						text: 'Ok',
						status: 'received'
					}
					indexAnswer.messages.push(objA);
				}, 1000);
			},

			lastMessage: function(i) {
				// nella const messages salva la posizione dei messaggi del contatto all'index
				const message = this.contacts[i].messages;
				const lastIndex = message.length - 1;
				if (message.length) {
					if (message[lastIndex].text.length > 35) {
						return message[lastIndex].text.substring(0, 35) + '...';
					} else {
						return message[lastIndex].text
					}
				} else {
					return 'Non hai messaggi da visualizzare'
				}

			},

			// prende ultimo accesso del contatto selezionato tramite index e ritorna la data
			lastAccess: function(i) {

				// nella const messages salva la posizione dei messaggi del contatto all'index
				const messages = this.contacts[i].messages;
				// nella const lastIndex salva l'indice dell'ultimo messaggio del contatto
				const lastIndex = messages.length - 1;

				if (messages.length) {
					// la funziona ritorna la data dell'ultimo messaggio del contatto selezionato
					return messages[lastIndex].date;
				} else {
					return "Inizia a chattare con " + this.contacts[i].name + "!";
				}

			},

			isSearched: function(i){
				const isUserSearched = this.contacts[i].name.toLowerCase().includes(this.inputTextSearch.toLowerCase());

				const messages = this.contacts[i].messages;
				const lastIndex = messages.length - 1;
				if (messages.length) {
					const isMessageSearched = messages[lastIndex].text.toLowerCase().includes(this.inputTextSearch.toLowerCase());

					return isUserSearched || isMessageSearched;
				} else {
					return isUserSearched;
				}

			},

			// showOptions: function(indexMess) {
			//
			// 	 this.contacts[this.index].messages = this.contacts[this.index].messages.map((message, i) => {
			// 		if (indexMess == i) {
			//
			// 			return {
			// 				...message,
			// 				options: true
			// 			}
			//
			// 		} else {
			// 			return {
			// 				...message,
			// 				options: false
			// 			}
			// 		}
			//
			// 	})
			// 	console.log(this.contacts[this.index].messages);
			// },

			deleteMess: function(i){
				this.contacts[this.index].messages.splice(i, 1);
			},

			focusInput: function() {
				this.$refs.write.focus();
			}





		}





});
