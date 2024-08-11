# Notes React + Node js

## Commands:
###notes-app-ui:
```bash
npx create-react-app . --template typescript
```


###notes-app-server:
```bash
npm init 
# entry point: ./src/index.ts

npm i ts-node typescript nodemon @types/cors @types/express @types/node --save-dev

npm i @prisma/client cors express prisma

npx tsc --init

# after creating endpoint (notes-full-app):
# curl to test APIs quickly
curl localhost:5000/api/notes

npx prisma init
#DATABASE_URL copied from supabase connect file, had to change 
npx prisma db push
```