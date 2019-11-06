package main

import (
	"log"
	"net"
	"sync"

	"google.golang.org/grpc"
)

const port = ":30080"

type server struct {
	rw    sync.RWMutex
	count int
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	RegisterClickEServer(s, &UnimplementedClickEServer{})
	log.Println("starting server...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
