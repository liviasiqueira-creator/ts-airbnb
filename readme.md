Para rodar:

- Baixar o projeto
- Rodar "npm i ou npm install"
- Rodar "npm start"

Utilizamos a classe abstrata Accommodation que serve como base para todos os tipos de acomodação,
e garantimos que todas acomodações terão nome, id, endereço, preço por noite e sua própria forma 
de calcular o preço, que é o calculatePrice, que recebe a quantidade de dias da reserva.
Dessa forma, temos flexibilidade no calculo facilitando também manuntenções futuras e mantendo a individualidade de cada acomodação.

Extendendo a classe Accommodation, temos as acomodações Casa, Apartamento e quarto compartilhado.
Cada uma com sua taxa especifica e calculo especifico. Usamos o preço por noite, quantidade de dias 
e taxa fixa para retornar o valor total da acomodação.

Temos também, as taxas do aplicativo, de limpeza e de serviço, para isso temos a interface Fee, que contem o metodo calculate, que recebe o total e calcula a respectiva taxa, de plataforma 5,85% e de
limpeza e serviço é fixa. Todas acomodações possuem taxa de plataforma, casa possui taxa de limpeza e apartamento possui taxa de serviço. Quarto compartilhado só possui taxa de plataforma.
Por mais que a taxa de limpeza e serviço sejam fixas, caso isso mude, adicionando uma % por exemplo,
podemos modificar facilmente, sem mexer na classe Apartamento/Casa.
No nosso repositorio temos os dados, no caso mockamos uma casa e temos o metodo para encontrar uma
acomodação.
No nosso service, fazemos a soma de todas as taxas aplicadas e adicionamos no valor base.
O usecase pega os dados do repositório, pede pro service executar a logica e nos devolve.

Sobre a execução:
- iniciamos o repositório com uma casa, com id = 0
- vou criar uma reserva, passando o repo e também as taxas gerais a serem adicionadas ( de plataforma )
- chamo o meu caso de uso, busco a acomodação, calculo o preço total, a partir da quantidade de dias e somo com todas as taxas

Então temos:

- 5 dias em uma casa, cuja diária é 340. Como é uma casa terá a taxa de limpeza, que é 150
e a taxa de plataforma que é 5,85% do total. 
- O total da reserva da casa ficou: (5 x 340) + 150 = 1850
- O total com a taxa da plataforma: (1850*0,0585) + 1850 = 1958,22


