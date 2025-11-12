# base image
FROM python:3.14-slim

# set working directory
WORKDIR /app

# Install uv (rust based python package manager)
RUN pip install --no-cache-dir uv

# setup uv
COPY pyproject.toml ./
COPY uv.lock ./
RUN uv sync --frozen --no-dev

# copy project files
COPY . .

# expose fastapi port
EXPOSE 8001

# run
#CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001", "--reload"]
