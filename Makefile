
gen-server:
	protoc -I. --go_out=plugins=grpc:./server click-e.proto

gen-client:
	protoc -I. --js_out=import_style=commonjs:./client/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client/src click-e.proto

gen: gen-server gen-client
