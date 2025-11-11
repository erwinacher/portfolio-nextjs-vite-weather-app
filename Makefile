# todo: will need some improvement, this is just bare bones for a quick CI pipeline

.PHONY: build run test fmt check ci


build:
	cd weather-backend && cargo build

run:
	cd weather-backend && cargo run

test:
	cd weather-backend && cargo test

fmt:
	cd weather-backend && cargo fmt --all

check:
	cd weather-backend && cargo clippy --all-targets --all-features -- -D warnings

ci: fmt check test
