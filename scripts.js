let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let title = document.createElement('title');
title.innerHTML = 'My homework number 8';
document.head.appendChild(title);

let lang = document.querySelector('html');
lang.setAttribute('lang', 'en');

let styleTop = document.createElement('style');
styleTop.innerHTML = `
     .opacity_p {
        font-size: 25px;
        color: lightgrey;
        text-align: center;
     }

     .container {
         display: flex;
         justify-content: space-between;
         border: 2px solid #ededed;
         border-radius: 15px;
         margin: 50px 200px;
         overflow: hidden;
     }

     button {
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      background-color: #fff;
      padding: 15px 20px;
      border: 4px solid #ffc80a;
      border-radius: 30px;
      margin-top: 65px;
      margin-bottom: 90px;
      
     }

   .container__list_p {
      font-size: 20px;
      color: lightgrey;
      text-transform: uppercase;
      
   }

   .container__list:hover  {
      background-color: #8b00ff;
      color: white;
   }

   .container__list:hover .container__list_p {
      color: #ffc80a;
   }

   .container__list:hover .container__list_button {
      color: white;
      background-color: #8b00ff;
   }

   
   .container .container__list {
      text-align: center;
   }

   .container__list_title {
      margin-top: 50px;
   }

   .container__list_span {
      font-size: 18px;
      color: lightgrey;
      display: inline-block;
   }
    
`;
document.head.appendChild(styleTop);


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose You Option';
document.body.appendChild(h1);
h1.style.fontSize = '48 px';
h1.style.textAlign = 'center';
h1.style.fontWeight = '300';
h1.style.marginTop = '50px';

let p1 = document.createElement('p');
p1.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;
p1.classList.add('opacity_p');
document.body.appendChild(p1);


let div1 = document.createElement('div');
div1.classList.add('container');
document.body.appendChild(div1);

let div2 = document.createElement('div');
div1.appendChild(div2);
div2.classList.add('container__list');

let div3 = document.createElement('div');
div1.appendChild(div3);
div3.classList.add('container__list');


let p2 = document.createElement('p');
p2.innerHTML = 'Freelancer';
div2.appendChild(p2);
p2.classList.add('container__list_p');

let listTitle = h1.cloneNode();
listTitle.innerHTML = `Initially</br>disigned to`;
div2.appendChild(listTitle);
listTitle.classList.add('container__list_title');

let spanList = document.createElement('span');
spanList.innerHTML = `But I must explain to you haw all this mistaken idea of denouncing`;
div2.appendChild(spanList);
spanList.classList.add('container__list_span');

let button = document.createElement('button');
button.innerHTML = `Start hear`;
div2.appendChild(button);
button.classList.add('container__list_button');

let p3 = document.createElement('p');
p3.innerHTML = 'Studio';
div3.appendChild(p3);
p3.classList.add('container__list_p');


let listTitle2 = h1.cloneNode(true);
listTitle2.innerHTML = `Initially</br>disigned to`;
div3.appendChild(listTitle2);
listTitle2.classList.add('container__list_title');

let spanList2 = spanList.cloneNode(true);
div3.appendChild(spanList2);
spanList2.classList.add('container__list_span');

let button2 = button.cloneNode(true);
div3.appendChild(button2);
button2.classList.add('container__list_button');










