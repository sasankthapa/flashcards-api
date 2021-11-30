# flashcards-api

Backend service for Chinese Flashcards app.

Current api uses both MongoDB and postgres database. Postgres is containerized in the same network, and MongoDB Atlas is used with a r/w user. 

Characters are stored in the postgres database but the user information and folder structure is stored in MongoDB.

```
docker-compose up
```

### testing

Runs `jest --watchAll`
```
docker-compose -f docker-compose.test.yml up
```

### debugging
`docker-compose up -d` to start the container, then

for database: `docker-compose exec db psql -U flashcarduser -d flashcards`

for web service: `docker-compose exec backend bash`

#### Todo:
- put in ER diagrams
- More Verbose testing 
- Testing express app using supertest 
