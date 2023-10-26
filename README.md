# Blog App - NextJS + TypeScript

## 📝 Project description

Full stack NextJS 13 blog app build from scratch using Prisma, PostgreSQL, Tailwind CSS, Typescript , Next Auth and a lot more.

## 💻 Project Features

- Firebase Storage
- Next authentication
- Create new blogs

## 🚀 Technologies and tools used

- NextJS
- ReactJS
- TypeScript
- Firebase
- Tailwind CSS
- Prisma
- PostgeSQL

## 📌 Links

- [NextJS](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Firebase](https://firebase.google.com/)

## 📊 Project status

✅ Ongoing

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

model Post {
id Int @id @default(autoincrement())
title String
description String
image String
category String
userId String
userImage String
comments String[]
}

model User {
id Int @id @default(autoincrement())
email String @unique
username String @unique
password String
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}
