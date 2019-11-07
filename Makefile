
build-envoy:
	docker build -t clicke/envoy -f envoy.Dockerfile .

build-server:
	docker build -t clicke/server ./server

gen-server:
	protoc -I. --go_out=plugins=grpc:./server click-e.proto

gen-client:
	protoc -I. --js_out=import_style=commonjs:./client/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client/src click-e.proto
	@echo '/* eslint-disable */' | cat - ./client/src/click-e_pb.js > temp && mv temp ./client/src/click-e_pb.js
	@echo '/* eslint-disable */' | cat - ./client/src/click-e_grpc_web_pb.js > temp && mv temp ./client/src/click-e_grpc_web_pb.js

gen: gen-server gen-client

run: build-server
	docker-compose up -d
