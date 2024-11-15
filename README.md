# Rick and Morty API Explorer

This project is a Next.js application that uses the **Rick and Morty API** to provide the following features:
- Search for characters by name.
- Filter characters by attributes such as status, species, type, and gender.
- View detailed information about characters.
- Paginate through character lists.

---

## 🚀 Features

1. **Character Search**:
   - Search for characters by entering their name in the search bar.

2. **Filters**:
   - Filter characters by:
     - **Status**: Alive, Dead, or Unknown.
     - **Species**: E.g., Human, Alien, etc.
     - **Gender**: Male, Female, Genderless, or Unknown.
     - **Type**: Custom types as defined in the API.

3. **Character Details**:
   - View detailed information, including:
     - Character's name, status, species, and gender.
     - Origin and current location.
     - Episodes the character appears in.

4. **Responsive Design**:
   - Works seamlessly on both desktop and mobile devices.

---

## 📦 Project Setup

### Prerequisites
- **Node.js** (v14 or later recommended)
- **npm** or **yarn** for dependency management

### Clone the Repository
```bash
git clone https://github.com/Betulk96/rick-morty.git
cd rmapi

###Docker
docker pull btl96/rick-morty-api
---

## 📋 Kurulum

### Gereksinimler
- **Node.js** (v14 veya üzeri)
- **npm** veya **yarn**

### Bağımlılıkları Kurun
```bash
npm install
# veya
yarn install


### Run the Development Server
npm run dev
# or
yarn dev

###Access the Application
 #The application will be running at http://localhost:3000.
  How to Use
  Search for Characters:

Enter a character name in the search bar.
Click on the Search button to fetch results.
Apply Filters:

Use dropdown menus or input fields to select filters for:
Status, Species, Gender, or Type.
Click Apply to narrow down the results.
Character Details:

Click on any character card to view its details, including:
Appearance in episodes.
Current location and origin.
Pagination:

Navigate between pages using the pagination component at the bottom.