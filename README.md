# CodePen Clone 🖋️

A fully functional CodePen clone built using **React**, **React Router**, and **Firebase Authentication**. This web-based front-end playground allows developers to code in HTML, CSS, and JavaScript and instantly preview the output.

## 🚀 Features

- 🔐 User Authentication (Email, Google, GitHub)
- ⚙️ Protected Editor Routes
- 💻 Real-Time Code Preview (HTML, CSS, JS)
- 📱 Responsive Layout (Editor best on desktop)
- 🎨 Code Editor Panes with Icons (HTML, CSS, JS)
- ⚠️ Small screen warning for better UX

---

## 🖼️ Live Preview
[Click here !](https://codepen-clone-puce.vercel.app/)

---

## 🛠️ Tech Stack

- React
- React Router
- Firebase Auth
- React Icons
- SplitPane
- Tailwind CSS

---

## 📁 Project Structure

```
📦 codepen-clone
┣ 📁 components/
┃ ┗ 📁 editor/
┃   ┗ EditorPane.jsx
┣ 📁 context/
┃ ┗ AuthContext.js
┣ 📁 layouts/
┃ ┗ MainLayout.jsx
┣ 📁 pages/
┃ ┣ Home.jsx
┃ ┣ Login.jsx
┃ ┣ Signup.jsx
┃ ┗ Editor.jsx
┣ 📁 routes/
┃ ┗ ProtectedRoutes.jsx
┣ 📁 assets/
┃ ┗ codepen_logo.svg
┣ 📁 screenshots/
┃ ┗ editor.png
┣ App.jsx
┣ main.jsx
┣ tailwind.config.js
┗ vite.config.js

```

---

## 🔐 Protected Routes
 - The /editor route is protected using ProtectedRoutes.jsx.
 - Unauthenticated users are redirected to the login page.

---

## ✨ Author
   Naveen Kumar J
   GitHub: @Naveen-KumarJ
