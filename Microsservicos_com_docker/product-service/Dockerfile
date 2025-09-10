#Image base
FROM node:18

#Diretorio de trabalho
WORKDIR /app

#Copia os arquivos
COPY . .

#Instala as dependencias
RUN npm install express axios

#Expõe a porta do serviço
EXPOSE 3002

#Comando de execução
CMD ["node", "index.js"]

