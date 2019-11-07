FROM golang:1.13

COPY . /server
WORKDIR /server

RUN go build -o app .

CMD ["/server/app"]
