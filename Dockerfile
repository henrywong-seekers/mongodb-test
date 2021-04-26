FROM public.ecr.aws/lambda/nodejs:14

COPY . .

RUN npm i

CMD [ "app.handler" ]
