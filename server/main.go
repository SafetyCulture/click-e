package main

import (
	context "context"
	"log"
	"net"
	"sync"

	"google.golang.org/grpc"
)

const port = ":30080"

type server struct {
	rw    sync.RWMutex
	count int32
}

func (s *server) Inc(context.Context, *Empty) (*Count, error) {
	s.rw.Lock()
	defer s.rw.Unlock()

	s.count++

	return &Count{Value: s.count}, nil
}

func (s *server) GetCount(context.Context, *Empty) (*Count, error) {
	s.rw.RLock()
	defer s.rw.RUnlock()
	return &Count{Value: s.count}, nil
}

func (s *server) Subcribe(_ *Empty, stream ClickE_SubcribeServer) error {
	s.rw.RLock()
	c := s.count
	s.rw.RUnlock()
	stream.Send(&Count{Value: c})
	for {
		s.rw.RLock()
		n := s.count
		s.rw.RUnlock()
		if n <= c {
			continue
		}

		if err := stream.Send(&Count{Value: n}); err != nil {
			return nil
		}
		c = n
	}

	return nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	RegisterClickEServer(s, &server{})
	log.Println("starting server...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
