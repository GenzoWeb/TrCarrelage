import React, { useState, useRef } from 'react';
import axios from "axios";

const BlocForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState(""); 
   const [spanInput, setSpanInput] = useState(""); 
   const [changeEmail, setChangeEmail] = useState("");
   const [sendEmail, setSendEmail] = useState("");
   const [error, setError] = useState("");
   const [send, setSend] = useState(false);

   const urlApi = 'http://localhost:80/test/index.php';

   const refTextAfterSubmit = useRef(null);
   const refErrorEmail = useRef(null);

   if(changeEmail === false) {
      refErrorEmail.current.classList.remove('email-error')
      setChangeEmail(true)
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();
      setSendEmail(false)
      setError(false)
      const testInput = function(){
         const testInputName = validTrim(name);
         const testInputTitle = validTrim(title);
         const testInputEmail = validEmail();
         const testInputMessage = validTrim(message);

         if(!testInputName || !testInputTitle || !testInputEmail || !testInputMessage) {
            refTextAfterSubmit.current.innerText="Merci de remplir correctement les champs."
            refTextAfterSubmit.current.classList.add("form-message-error")
            setSpanInput('error-form')
            return false;
         } else {
            setSend(true)
            axios({
               method: 'post',
               url: urlApi,
               headers: { "content-type": "application/json" },
               data: {
                  name: name,
                  email: email,
                  title: title,
                  message: message
               }
             })
               .then(response => {
                  if (response.data) {
                     setSendEmail(response.data)
                     setError(false)
                  } else {
                     setError(true)
                  }
               })
               .catch(error => {
                  setError(true)
               });
            
            if(refTextAfterSubmit.current.classList.contains("form-message-error")){
               refTextAfterSubmit.current.classList.remove("form-message-error")
            }
            return true;
         }
      }

      if(testInput()) {
         initInput(setMessage);
         initInput(setName);
         initInput(setTitle);
         initInput(setEmail);
      }
   };

   const validTrim = (formState) => {
      if(formState.trim().length > 0) {
         return true;
      } else {
         emptyForm(message, setMessage);
         emptyForm(name, setName);
         emptyForm(title, setTitle);
         emptyForm(email, setEmail);
         return false;
      }
   }

   const validEmail = () => {
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.trim().length > 0) {
         if(email.match(regex)) {
               return true;
         } else {
               refErrorEmail.current.classList.add('email-error')
               return false;
         }
      }
   }

   const emptyForm = (inputState, setInputState) => {
         if(inputState.trim().length === 0) {
            initInput(setInputState)
      }
   }

   const initInput = (setInput) => {
      setInput("")
      setSpanInput('')
   }

   if(sendEmail){
      setSendEmail(false)
      refTextAfterSubmit.current.innerText="Votre message a bien été envoyé"
      refTextAfterSubmit.current.classList.add("form-message-success")
      setTimeout(() => {
         refTextAfterSubmit.current.classList.remove("form-message-success")
         setSend(false)
      }, 2000)
   }
   if(error){
      setError(false)
      setSend(false)
      refTextAfterSubmit.current.innerText="Désolé une erreur s'est produite. Veuillez recommencer."
      refTextAfterSubmit.current.classList.add("form-message-error")
   }

   return (
      <div className="bloc-form">
         <h2>Envoyer un message</h2>
         <form action="" method="post">
            <div className="d-flex flex-wrap justify-content-between name-email">
               <div className="form-group">
                  <input
                     type="text"
                     id="name"
                     className="form-input input-name"
                     name="name"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                     autoComplete="off"
                     required
                  />
                  <span className={spanInput}>Votre nom *</span>
               </div>
               <div className="form-group">
                  <p ref={refErrorEmail} className="email-empty">Email non valide</p>
                  <input
                     type="mail"
                     id="email"
                     className="form-input input-email"
                     name="email"
                     onChange={function(e) { 
                        setEmail(e.target.value)
                        setChangeEmail(false)
                     }}
                     value={email}
                     autoComplete="off"
                     required
                  />
                  <span className={spanInput}>Votre email *</span>
               </div>
            </div>
            <div className="form-group">
               <input
                  type="text"
                  id="title"
                  className="form-input"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  autoComplete="off"
                  required
               />
               <span className={spanInput}>Sujet du message *</span>
            </div>
            <div className="form-group contact-message">
               <textarea
                  id="message"
                  className="form-input"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
               />
               <span className={spanInput}>Votre message *</span>
            </div>
            <div className="text-center">
               <input
                  id="form-submit"
                  className="form-submit"
                  type="button"
                  value={ send ? "Envoi ..." : "Envoyer"}
                  disabled={ send ? true : false}
                  onClick={handleSubmit}
               />
            </div>
         </form>
         <div>
            <p ref={refTextAfterSubmit} className="form-message"></p>
         </div>
      </div>
   );
};

export default BlocForm;