# 📝 Task Management App

A **task management application** built with **Next.js, Prisma, and MySQL**. This project provides a simple interface for managing tasks with CRUD operations.

## 🚀 Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Actions)
- **Database:** MySQL (Local instance, Prisma ORM)
- **ORM:** [Prisma](https://www.prisma.io/) (Schema modeling, migrations)
- **Styling:** Tailwind CSS 
- **State Management:** React Context API

## 📂 Project Structure
```
/app
  ├── _components       # Reusable UI components
  ├── _services         # Task service for API interaction
  ├── _context          # React Context API for global state
  ├── _utils            # Utility functions/constants
  ├── tasks             # Task-related pages (CRUD)
  ├── layout.tsx        # Root layout
  ├── page.tsx          # Main task list page
/prisma
  ├── schema.prisma     # Prisma schema definition
  ├── migrations        # Database migration files
```

## 1 Getting Started
 Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


### 2️⃣ Install Dependencies
npm install

### 3️⃣ Set Up the Database
1. **Ensure MySQL is running locally.**
2. Create a `.env.local` file and add:
   DATABASE_URL="mysql://admin:admin@localhost:3306/DATABASE"
3. Run Prisma migrations:
   npx prisma migrate dev --name init

### 4️⃣ Start the Development Server
npm run dev
Your app will be running at **http://localhost:3000** 🚀.

## 📌 Features
✅ Create, update, and delete tasks
✅ Mark tasks as completed
✅ Global state management with React Context API
✅ API integration with Prisma ORM

## 🛠 Future Enhancements
- 🌐 Deployment to Vercel (Pending)
- 📅 Due date & priority feature for tasks
- 📊 Analytics Dashboard for task completion

## 🤝 Contributing
Feel free to submit issues and pull requests! 😊

## 📜 License
MIT License © 2025 Your Name



The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
