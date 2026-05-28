# 🏡 Welcome to the Design Team Pet Village! 🌸

The Pet Village is a cozy, digital sanctuary where designers can cultivate their own pet gardens, share joy, and practice the art of version control (Git & GitHub) in a fun, pressure-free environment! 

Rather than editing complex code, we use Git to gift each other cute animals, mythical beasts, and pixelated companions.

---

## 🌻 How the Village Works
Every designer on the team has their own designated garden space in the village. 
When you visit the website, you can view each designer's garden. If they have pets, they'll show up there with their name and a note showing who gifted them!

---

## 🎁 How to Gift a Pet
Gifting a pet is a fun way to practice the Git workflow. Here is the step-by-step guide to sending a furry (or feathery, or scaly) friend to a colleague's garden:

### 1. Find or Create Your Pet 🎨
* Choose any image file (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, or `.svg`). 
* **The Magic Naming Rule:** Name your file using the format `PetName_YourName.extension`.
  * *Example:* If Dagny wants to gift a bunny named "Fluffy" to someone, she would name the file: `Fluffy_Dagny.png`.
  * The site will automatically read this and display: **Fluffy** *gifted by Dagny*!

### 2. Create a Branch (Your Secret Path) 🌿
In Git/GitHub, create a new branch. You can think of a branch as your own private pathway to the village where you can prepare your gift without modifying the main garden.
* Name it something descriptive, like `gift-for-daniel` or `monikas-new-puppy`.

### 3. Deliver the Pet to Their Garden 🏡
* Place your named pet image inside the folder of the designer you want to gift it to:
  `src/assets/pets/<designer-slug>/`
  * *Example:* If gifting to Daniel, place the file in `src/assets/pets/daniel/`.
* ⚠️ **The Unspoken Rule of the Garden:** *Never gift yourself a pet!* It is an unspoken rule of the garden to never gift yourself pets. A garden's beauty comes from the generosity of your neighbors!

### 4. Create a Pull Request (PR) ✉️
* Commit your changes, push your branch, and open a **Pull Request** on GitHub to suggest merging your branch into the main project.
* In the PR description, write a nice note about the pet you're gifting!

---

## 🌿 Running the Village Locally
If you want to run the village locally on your machine to check the gardens, you can run the following commands in your terminal:

```bash
# Install the project dependencies
npm install

# Start the local development server
npm run dev
```

Happy gifting, and may your gardens flourish! 🚜🌾
