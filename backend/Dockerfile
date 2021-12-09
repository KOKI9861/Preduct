FROM python:3.8
RUN apt update -y

WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt